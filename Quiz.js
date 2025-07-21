function getQuiz() {
    const apiUrl=  "https://quizapi.io/api/v1/questions?apiKey=PQx1luiZasPXmyBpBTGOOsFAiuvOVa28vimt8VPd&?category=Linux";
    const outputElement=document.getElementById('output');

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
        console.log(data);
        outputElement.textContent=JSON.stringify(data.quote);

        
    })
    .catch(error=> {
        console.error('Error:',error);
    });
}