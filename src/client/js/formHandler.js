function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    //     .then(res => {
    //         res.json()
    //     })
    //     .then(function (data) {
    //         document.getElementById('results').innerHTML = data.message
    //     })

    let reqBody = {
        theText: formText
    };

    
    fetch('/testing', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.polarity
        console.log(res);
        alert(dataText);
    })
}

export {
    handleSubmit
}