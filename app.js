function SendEmail() {
    Email.send({
        Host :"smtp.elasticemail.com",
        Username: "rajkalariya78@gmil.com",
        Password:"",
        To: 'rajkalariya77@gmail.com',
        From: "rajkalariya78@gmail.com",
        Subject: "",
        Body: "Email : " + document.getElementById("Email").value + "<br> Name : " + document.getElementById("name").value + "<br> Message : " + document.getElementById("Message").value,
    }).then(
        message => alert("Message Sent Successfully")
    );
}

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        document.title = "Hey, Raj is Here ! (:";
    } else {
        document.title = "It's Raj ";
    }
});

window.addEventListener('load', function () {
    setTimeout(function () {
        var loadpage = document.getElementById("Loading-Page");
        var mainpage = document.getElementById("main-page");

        loadpage.style.display = "none";
        mainpage.style.display = "block";
    }, 3000);
})