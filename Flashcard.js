const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("add-question-ca");
const cardButton = document.getElementById("save-btn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addFlashcardBtn = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
const cardListContainer = document.querySelector(".card-list-container");
let editBool = false;
let currentEditCard = null; // To keep track of the card being edited

// Event listener for "Add Flashcard" button
addFlashcardBtn.addEventListener("click", () => {
    container.classList.add("hide");
    // Clear input fields when opening the "Add Flashcard" view
    question.value = "";
    answer.value = "";
    addQuestionCard.classList.remove("hide");
    errorMessage.classList.add("hide"); // Hide error message if previously shown
    editBool = false; // Ensure edit mode is off when adding new
    disableButtons(false); // Enable buttons when adding a new card
});

// Event listener for close button 
closeBtn.addEventListener("click", () => {
    addQuestionCard.classList.add("hide"); // Hide the add/edit question card
    container.classList.remove("hide"); // Show the main container
    errorMessage.classList.add("hide"); // Hide any error message
    editBool = false; // Reset edit mode
    currentEditCard = null; // Clear current edited card
    disableButtons(false); // Enable buttons
});

// Event listener for "Save" button
cardButton.addEventListener("click", () => {
    let tempQuestion = question.value.trim();
    let tempAnswer = answer.value.trim();

    if (!tempQuestion || !tempAnswer) {
        errorMessage.classList.remove("hide");
        return; // Stop execution if fields are empty
    }

    errorMessage.classList.add("hide"); // Hide error if inputs are valid

    if (editBool) {
        // Update existing card
        currentEditCard.querySelector(".question-div").innerText = tempQuestion;
        currentEditCard.querySelector(".answer-div").innerText = tempAnswer;
        editBool = false;
        currentEditCard = null;
    } else {
        // Create new card
        createFlashcard(tempQuestion, tempAnswer);
    }

    // Hide the add/edit card and show main container after saving
    addQuestionCard.classList.add("hide");
    container.classList.remove("hide");
    question.value = ""; // Clear input fields
    answer.value = "";
    disableButtons(false); // Re-enable buttons after saving
});

// Function to create and display a new flashcard
function createFlashcard(questionText, answerText) {
    let div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML += `<p class="question-div">${questionText}</p>`;

    let displayAnswer = document.createElement("p");
    displayAnswer.classList.add("answer-div", "hide");
    displayAnswer.innerText = answerText;

    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.setAttribute("class", "show-hide-btn");
    link.innerHTML = "Show/Hide";
    link.addEventListener("click", () => {
        displayAnswer.classList.toggle("hide");
    });

    div.appendChild(link);
    div.appendChild(displayAnswer);

    let buttonsCon = document.createElement("div");
    buttonsCon.classList.add("button-con");

    // Edit Button
    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit");
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    editButton.addEventListener("click", () => {
        editBool = true;
        currentEditCard = div; // Set the current card being edited
        modifyElement(editButton, true);
        addQuestionCard.classList.remove("hide");
        container.classList.add("hide"); // Hide main container while editing
        disableButtons(true); // Disable other buttons while editing
    });
    buttonsCon.appendChild(editButton);

    // Delete Button
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.addEventListener("click", () => {
        div.remove(); // Remove the entire card div
        disableButtons(false); // Enable buttons after deleting
    });
    buttonsCon.appendChild(deleteButton);

    div.appendChild(buttonsCon);
    cardListContainer.appendChild(div); // Append to the actual card list container
}

// Function to handle editing a flashcard
const modifyElement = (element, edit = false) => {
    let parentDiv = element.parentElement.parentElement;
    let parentQuestion = parentDiv.querySelector(".question-div").innerText;
    let parentAnswer = parentDiv.querySelector(".answer-div").innerText;

    if (edit) {
        answer.value = parentAnswer;
        question.value = parentQuestion;
    }
};

// Function to disable/enable edit/delete buttons
const disableButtons = (value) => {
    let editButtons = document.getElementsByClassName("edit");
    let deleteButtons = document.getElementsByClassName("delete"); // Also get delete buttons
    Array.from(editButtons).forEach((element) => {
        element.disabled = value;
    });
    Array.from(deleteButtons).forEach((element) => { // Disable delete buttons too
        element.disabled = value;
    });
};