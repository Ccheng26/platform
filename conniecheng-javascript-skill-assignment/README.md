# Javascript Skill Assignment
### HTML Form Validation with Javascript
Today we will be practicing HTML form validation with Javascript.
#### Assignment Duration: 1 hour.
#### Learning objectives:
- Form validation
- Event handling
- String manipulation
- JavaScript methods

#### Setup:
You're provided code for a basic website with included index.html and style.css. All of your work will be done in the script.js file that you will create- you shouldn't have to edit index.html or style.css. Please create individual functions for each solution.
#### Hang In:
JavaScript assignment should be uploaded to Github.
#### Instructions:
Instructor will demonstrate how to perform the following instructions.

Using the Github Desktop, create a Github repository and name the repository your first and last name as well as the name of the assignment. Example: baironvasquez-javaScriptAssignment. After creating a repository and uploading your work to this repository, submit a link of your Github repository to LMS in the assignment section.


### Part 1
##### Structure and style of our form

1. Let’s start by giving our form some structure. Please copy and paste the following HTML code onto your text editor and make sure to click “save as” giving the file the name of “index.html”.
 <!DOCTYPE html><br>
<html lang="en">
<head> 
<meta charset="utf-8"> 
<title>Form Validation Assessment</title>  
<link rel='stylesheet' href='style.css' type='text/css' /> 
<script src="script.js"></script> 
</head> 
<body onload="firstfocus();"> 
<h1>User Registration form</h1> 
<h2>Use tab key or mouse to go next field</h2><br><form name='registration'"> 
<ul> 
<li><label for="userid">User id [5 to 12 characters] :</label></li> 
<li><input type="text" name="userid" size="12" onblur="userid_validation(5,12)"/></li> 
<li><label for="passid">Password [7 to 12 characters] :</label></li> 
<li><input type="password" name="passid" size="12" onblur="passid_validation(7,12)"/></li> 
<li><label for="username">Name [Alphabet characters only] :</label></li> 
<li><input type="text" name="username" size="50" onblur="allLetter()"/></li> 
</select></li>  
<li><label for="email">Email [Valid email] :</label></li> 
<li><input type="text" name="email" size="50" onblur="ValidateEmail()" /></li>   
<li><input type="submit" name="submit" value="Submit" onclick="alert('Form submitted successfully')" /></li> 
</ul> 
</form> 
</body> 
</html>
2. Open the index.html sheet in your browser to see the nifty form that you have created.

### Part 2
1. Now, let’s give your form some style. Please copy and paste the following css code onto your text editor and in the same folder as your index.html file make sure to click “save as” giving the file the name of style.css.
 h1{ 
 margin-left: 50px; 
 color: navy; 
} 
h2{ 
 margin-left: 50px; 
 color: navy; 
 margin-top: -20px; 
} 
form li{ 
 list-style: none; 
 margin-bottom: 5px; 
} 
form ul li label{ 
 float: left; 
 clear: left; 
 width: 265px; 
 text-align: right; 
 margin-right: 10px; 
 font-family:Verdana, Arial, Helvetica, sans-serif;
 font-size:14px; 
} 
form ul li input, select, span{ 
 float: left; 
 margin-bottom: 10px; 
 border: 1px solid maroon; 
} 
form textarea { 
 float: left; 
 width: 350px; 
 height: 150px; 
} 
[type="submit"]{ 
 clear: left; 
 margin: 20px 0 0 300px; 
 font-size:18px;
}
2. Open the index.html sheet in your browser and make sure that the styling has been applied.
At this point, your form should look something like this:

### Part 3
##### Validating the user ID with JavaScript
1. On your text editor, create a “script.js” file and save in the same folder as your index.html and style.css.  After form loads create a function that will have the text field focus go to the User ID field.

2. Create a function that will validate the User’s ID with the console method, “User ID should not be empty!”

### Part 4
##### Validating the user password with JavaScript

1. In your script.js file, create a function that will have the text field focus will go to password validation.
2. Create a function that will validate the user’s password with the console method, “User password should not be empty!”

### Part 5
##### Validating the user’s name with JavaScript
1. Create a function that will have the text field focus will go to the name validation.
2. Create a function that will validate the user’s password with the console method, “User’s name should have alphabet characters only!”

### Part 6
##### Validating the user’s email with JavaScript
1. Create a function that will have the text field focus will go to the email validation.
2. Create a function that will validate the user’s password and with the console method, “You have entered an invalid email format!”
