function handleSubmit(event) {
    event.preventDefault()
        // check what text was put into the form field
    let formText = document.getElementById('phrase').value;
    const data = {
        formText
    }
    if (Client.checkForName(formText)) {
        fetch('http://localhost:8081/text', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(function(res) {
                console.log(res.body);
                document.getElementById('text').innerHTML = 'Model: ' + res.model;
                document.getElementById('agree').innerHTML = 'Agreement: ' + res.agreement;
                document.getElementById('confid').innerHTML = 'Confidence: ' + res.confidence;

            })
    } else {
        console.log('Please enter a sentence')
    };
}

export { handleSubmit }