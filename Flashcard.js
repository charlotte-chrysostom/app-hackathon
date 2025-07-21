const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
let editBool = false;

addQuestion.addEventListener("click", () => {
    container.classList.add("hide");
    addQuestion.value = "";
    answer.value = "";
    addQuestionCard.classList.remove("hide");
})

closeBtn.addEventListener(
    "click",
    (submitQuestion = () => {
        editBool = false;
        tempQuestion = question.value.trim();
        tempAnswer = answer.value.trim();
        if(!tempQuestion || tempAnswer){
            errorMessage.classList.remove("hide");
        }else{
          container.classList.remove("hide");
          errorMessage.classList.add("hide");
          viewlist();
          question.value = "";
          answer.value = "";
        }
    })
);

function viewlist(){
    var listCard = document.getElementsByClassName("card-list-container");
    var div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML +=
    <p class="question-div">${question.value}</p> ;
    var displayAnswer = document.createElement("p");
    displayAnswer.classList.add("answer-div", "hide");
    displayAnswer.innerText = answer.value;

    var link = document.createElement("a");
    link.setAttribute("href", "#");
    link.setAttribute("class", "show-hide-btn");
    link.innerHTML = "Show/Hide";
    link.addEventListener("click",  () => {
        displayAnswer.classList.toggle("hide");
    });

    div.appendChild(link);
    div.appendChild(displayAnswer);

    let buttonsCon = document.createElement("div");
    buttonsCon.classList.add("buttons-con");
    var editButton = document.createElement("button");
    editButton.setAttribute("class", "edit");
    editButton.innerHTML = <i class="fa-solid fa-pen-tosquare"></i>;
    editButton.addEventListener("click", () => {
        editBool = true;
        modifyElement(editButton, true);
        addQuestionCard.classList.remove("hide");
    });
    buttonsCon.appendChild(deleteButton);

    div.appendChild(buttonsCon);
    listCard[0].appendChild(div);
    hideQuestion();

    const modifyElement = (element, edit = false) =>{
        let parentDiv = element.parentElement.parentElement;
        let parentQuestion = parentDiv.querySelector(".question-div").innerText;
        if (edit){
            let parentAns = parentDiv.querySelector(".answer-div").innerText;
            answer.value = parentAns;
            question.value = parentQuestion;
            disableButtons(true);
        }
    }
    parentDiv.remove();
};

const disableButtons = (value) => {
    let editButton = document.getElementsByClassName("edit");
    Array.from(editButton).forEach((element) => {
        element.disabled = value;
    })
}
