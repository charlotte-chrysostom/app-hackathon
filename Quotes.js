function getQuote() {
    const apiUrl='https://quoteslate.vercel.app/api/quotes/random';
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