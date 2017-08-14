/*
Part 3
Validating the user ID with JavaScript

1- On your text editor, create a “script.js” file and save in the same folder as your index.html and style.css.  After form loads create a function that will have the text field focus go to the User ID field.
2- Create a function that will validate the User’s ID with the console method, “User ID should not be empty!”
*/

// Part 3.1
function firstfocus(){
  let userId= document.getElementsByName('userid')[0];
  userId.focus();
}

// Part 3.2
function userid_validation(min, max){
  let userId= document.getElementsByName('userid')[0].value;
  if (userId==="" || userId.length===0){
    console.log("User ID should not be empty!");
  } else if(userId.length<min){
    console.log("User ID is too short!");
  } else if(userId.length>max){
    console.log("User ID is too long!");
  } else{
    //Part 4.1
    let passId= document.getElementsByName('passid')[0];
    passId.focus();
  }
}

/*
Part 4
Validating the user password with JavaScript

1- In your script.js file, create a function that will have the text field focus will go to password validation.
2- Create a function that will validate the user’s password with the console method, “User password should not be empty!”
*/

//Part 4.2
function passid_validation(min,max){
  let passId= document.getElementsByName('passid')[0].value;
  if (passId==="" || passId.length===0){
    console.log("User password should not be empty!");
  } else if(passId.length<min){
    console.log("User password is too short!");
  } else if(passId.length>max){
    console.log("User password is too long!");
  } else{
    //Part 5.1
    let usernameId= document.getElementsByName('username')[0];
    usernameId.focus();
  }
}

/*
Part 5
Validating the user’s name with JavaScript

1- Create a function that will have the text field focus will go to the name validation.
2- Create a function that will validate the user’s password with the console method, “User’s name should have alphabet characters only!”
*/

function allLetter(){
  let usernameId= document.getElementsByName('username')[0].value;
  for(let i=0; i<usernameId.length; i++){
    if ((usernameId[i].toLowerCase().charCodeAt(0)< 97)
      && (usernameId[i].toLowerCase().charCodeAt(0)> 122)){
      //also an option but less coverage:
      //(isNaN(parseInt(usernameId[i]))===false || usernameId[i] == "!" || usernameId[i] == "@" || usernameId[i] == "#" || usernameId[i] == "$" || usernameId[i] == "%" || usernameId[i] == "^" || usernameId[i] == "&" || usernameId[i] == "*" || usernameId[i] == "(" || usernameId[i] == ")" || usernameId[i] == `"` || usernameId[i] == "/" || usernameId[i] == ">" || usernameId[i] == "<" || usernameId[i] == ";" || usernameId[i] == "[" || usernameId[i] == "]" || usernameId[i] == ":" || usernameId[i] == "{" || usernameId[i] == "}" || usernameId[i] == "-" || usernameId[i] == "|")
      console.log("User’s name should have alphabet characters only!")
    }
  }
  let emailId= document.getElementsByName('email')[0];
  emailId.focus();
}

/*
Part 6
Validating the user’s email with JavaScript

1- Create a function that will have the text field focus will go to the email validation.
2- Create a function that will validate the user’s password and with the console method, “You have entered an invalid email format!”
*/





