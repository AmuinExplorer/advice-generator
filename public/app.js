let id = 0;

function load() {
    // increment id
    id += 1;

    // advice api url
    const adviceApiUrl = `https://api.adviceslip.com/advice/${id}`; 

    // fetch method
    const method = {
        method: 'GET'
    }
    
    // fetch function
    fetch(adviceApiUrl, method)
    .then(response => {
        // convert response to json format
        return response.json()
    })
    .then(data => {
        // advice number & advice content
        const adviceNumber = document.querySelector('.advice-number');
        const adviceContent = document.querySelector('.advice-content');

        adviceNumber.innerTextContent = `Advice #${data.slip.id}`
        adviceContent.innerTextContent = `"${data.slip.advice}"`

        console.log(adviceNumber)
    })
}

// onlick event
const random = () => {
    id += 1;

    const adviceApiUrl = `https://api.adviceslip.com/advice/${id}`; 

    const method = {
        method: 'GET'
    }
    
    fetch(adviceApiUrl, method)
    .then(response => {
        return response.json()
    })
    .then(data => {
        const adviceNumber = document.querySelector('.advice-number');
        const adviceContent = document.querySelector('.advice-content');

        adviceNumber.innerText = `Advice #${data.slip.id}`
        adviceContent.innerText = `"${data.slip.advice}"`
    })
}