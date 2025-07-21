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
        tempQuestion = addQuestion.value.trim();
        rempAnswer = answer.value.trim();
        if(!tempQuestion || tempAnswer){
            errorMessage.classList.remove("hide");
        }else
          container.classList.remove("hide");
          errorMessage.classList.add("hide");
          viewList();
          addQuestion.value = "";
          answer.value = "";
    })
);

function viewlist(){
    var lisrCard = document.getElementsByClassName("card-list-container");
    var div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML +=
    <p class="question-div">${addQuestion.value}</p> ;
}
