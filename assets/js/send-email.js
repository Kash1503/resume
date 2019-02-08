function sendMail(contactForm) {
    emailjs.send("gmail", "kash", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })

        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAIL", error);
            });

    contactForm.name.value = "";
    contactForm.emailaddress.value = "";
    contactForm.projectsummary.value = "Thanks! Your message has been sent :)"

    return false;
}
