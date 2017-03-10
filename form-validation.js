function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var length = userEntered.length;
  var lengthPass = passEntered.length;



  if (userEntered.indexOf(' ') >= 0)
  {
    document.getElementById("usernameError").innerHTML="Username has spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if (length <= 5)
  {
    document.getElementById("usernameError").innerHTML="Username less than 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if (length >= 6)
  {
    document.getElementById("usernameError").innerHTML="";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items green
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  if (passEntered == "password")
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Can't be password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if (lengthPass < 6 || lengthPass > 20)
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password is less than 6 or greater than 20.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if (userEntered == passEntered)
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password can't be the same as username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else
  {
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
