## Part B – Using String Methods and Conditional Statements


### Objective
<strong>
In this section you will create a program using operators, control flow statements and the String API using core JAVA</strong>

### Requirements

<strong>Name the package containing all of the classes for this section, “JavaAssignment_PartB”. 

Use the BufferedReader from java.io on this one to collect input. Go ahead and import java.io.*;</strong>  

### Activities

<strong><u>Transformer Optimus Prime’s Quest</u></strong>

Optimus Prime, the heroic Autobot transformer is trapped in an infinitely large rectangular grid by villainous Decepticons. 

Optimus wanted to trace the whereabouts of Cybertron’s ancient relics and weaponry that was somewhere hidden in the same grid. 

Optimus Prime's source code contains a list of  n commands, each either 'U', 'R', 'D', or 'L' — instructions to move a single square up, right, down, or left, respectively that will direct him to the point where the ancient relics and weaponry is available. The start position of the Optimus is the center of the grid (0,0). 
  
Can you help Optimus execute a string of commands and reach the position of the ancient relics and weaponry?

<strong>Input Format: </strong>

When the program starts, the user should be asked for directions for Mr. Prime. For now, he will only respond to the following characters; 'U', 'R', 'D', or 'L'. Your program will take the input, in string format, and it should print the co-ordinates of the point where the ancient relics and weaponry is available in the grid, separated by spaces. 

<strong>Sample Input 1: URLLDL</strong>
<strong>Sample Output 1: -2 0 </strong>
  
<strong>Sample Input 2: DLRUR </strong>
<strong>Sample Output 2: 1 0 </strong>

### Conditions:
If the length of the commands exceed ‘10’, the program should respond by printing … <i>“I won’t be able to make it that far” to the screen.</i>

### Clues:
Establish an initial value of ‘x’ and ‘y’. Each character in the string, if U,R,D or L, will end up changing the value of ‘x’ and ‘y’. You may have to use a string method to separate the characters in the string into an array of characters. Loop through that array and for every iteration, if the character in the iteration is a command that Optimus understands, then his position on the grid will update.