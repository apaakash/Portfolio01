function SendData(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "3idiotsvlogs0@gmail.com",
        Password: "9C40169564AE1D2A899CB214826F41F94AE1", // Be cautious: never expose in production
        To: '3idiotsvlogs0@gmail.com',
        From: document.getElementById("E1").value,
        Subject: "Portfolio Mail",
        Body: "Name: " + document.getElementById("name1").value
            + "<br> Email: " + document.getElementById("E2").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message sent successfully!")
    ).catch(
        error => alert("Failed to send message. Error: " + error)
    );
}
