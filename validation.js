$(document).ready(function () {
    $('#contact-form').submit(function (event) {
       var isValid = true;

       //validate the email entry with a regular expression
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        //Get the value of email
        var email = $('#email').val().trim();

        if(email == ""){
            $('#email').next().text("This field is required");
            isValid = false;
        }
        else if(!emailPattern.test(email)){
            $('#email').next().text("Must be a valid email address.");
            isValid = false;
        }
        else{
            $('#email').next().text("");
        }





    });
});