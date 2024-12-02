/* This is the function that allows the user to login */
function Login() {
    /* This sends out a console message that the function has started*/
    console.log("Login() function started");
    /* This line creates a variable and sets it to the username that was entered */
    var UserName = document.getElementById("uName").value;
    /* This line creates a variable and sets it to the password that was entered */
    var PassWord = document.getElementById("pWord").value;
    /* This if statement looks at how long the username that was entered is */
    if (UserName.length > 20 || UserName.length < 2) {
        document.getElementById("loginStatus").innerHTML =
            "Invalid full username! Please try again...";
        /* This else if statement looks at how long the password that was entered is */
    } else if (PassWord.length > 20 || PassWord.length < 2) {
        document.getElementById("loginStatus").innerHTML =
            "Invalid full password! Please try again...";
        /* This else statement will send the user to the homepage once the user has successfully logged in */
    } else {
        alert("You have successfully logged in! You will now be sent to the homepage.");
        location.replace("HomeScreen.html");
    }
}