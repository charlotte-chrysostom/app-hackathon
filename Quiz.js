function getQuiz() {
    const selectelement=document.getElementById('cat');
    const selectvalue=selectelement.value;
    const apiUrl=  "https://quizapi.io/api/v1/questions?apiKey=PQx1luiZasPXmyBpBTGOOsFAiuvOVa28vimt8VPd&category="+selectvalue;
    const outputElement=document.getElementById('quote');

    // M
    fetch(apiUrl, {keepalive: true})
    .then(response => {
        console.log(response);
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data=>{
        console.log(data[0]);
        outputElement.textContent=JSON.stringify(data[0].question);

        
    })
    .catch(error=> {
        console.error('Error:',error);
    });
}