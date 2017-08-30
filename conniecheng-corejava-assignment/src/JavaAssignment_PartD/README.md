## Part D – Method Overload!!!

### Objectives

<strong><u>The Mathematician</u>

In this section you will be creating a program with multiple classes implementing the constructor and access modifiers, abstraction, inheritance, method overloading, garbage collecting, the Calendar API and the File API.
</strong>
### Requirements
<strong>Name the package containing all of the classes for this section, “JavaAssignment_PartD”. 

Developer’s preference as far as collecting user input on this one. 
Go ahead and import the following, we will be using them for the program:

<i>import java.io.*; 

import java.util.*;</i></strong>

### Activities
<strong>
You will be building a glorified, over-the-top calculator called the Mathematician. Create an abstract class called ‘Mathematician’. Declare, but not initialize, five protected integer variables; num1, num2, num3, result, & responseTime and declare one ‘Object Date’ variable: ‘timeRequested’. Create four Abstract methods; add, subtract, multiply and divide. Since this class is abstract, we aren’t going to define these methods until we extend the class. Each of these methods takes two parameter of type integer.

Create one more method and name it ‘print’. This method will take two parameters. The first will be an integer, which will be the result, and the second will be another integer, which will be the amount of seconds it took to produce the result (will explain later). This method will print the following statements to the screen:

“The answer to your inquiry is <i>‘param 1’</i> ” 

“Response time: <i>‘param 2’</i> seconds”

Create a subclass of the Mathematician class and call it ‘Adder’. Those four variables that you declared in the superclass will be inherited by this class. The values for these variables will be assigned via the constructor upon instantiation. So let’s tackle the constructor first. 

Create a constructor that will receive two parameters. The constructor will take the two parameters and assign them to the initially declared variables; num1 & num2. Assigned ‘timeRequested’ to the current time in milliseconds . 

But this calculator is over-the-top so we will make it …responsive to     user input. Create another constructor that will receive three parameters. This constructor will take the three parameters and assign them to the variables; num1, num2, & num3. Assigned ‘timeRequested’ to the current time in milliseconds .

Now create a method called ‘add’. This method take two parameters, (variables num1 & num2 that were initialized by the constructor) add them together and store the result in the initially declared variable ‘result’. 
Within the method create a new date object and convert it to milliseconds . Then subtract the timeReqested from the new date object (in seconds) and store the result in the ‘responseTime’ variable. Then call the print() method, passing in the ‘result’ and ‘responseTime’ as parameters.

Create another method called ‘add’ that will execute the same commands as the first method but this will take three parameters (num1, num2, num3).

Extend the Mathematician class three more times for the ‘Multiplier’, ‘Divider’, and ‘Subtractor’ classes, and follow the same layout as we did in the ‘Adder’ class. Each class should have two constructors, taking different parameters and two ‘same-name’ methods taking different parameters. Override the appropriate method for the appropriate class.

Collecting the Input:
Create a class called ‘InputCollector’. The inputCollector object will be responsible for collecting the input, making a record of the time the inquiry was made and passing the information on to the right calculating object <i>(Adder, Subtractor, Multiplier, or Divider)</i>. Declare a variable with a ‘long’ data type and name it ‘timeRequested’.  It will be initialized via the constructor when the InputCollector is instantiated. Declare, but not initialize another three variables with an integer data type. Name them num1, num2, & num3. Inside the constructor, use the Calendar method .getInstance() to get the current time. Convert that into milliseconds using another Calendar method, and assign it to the ‘timeRequested’ variable. 

Create a method called ‘collectInput’. This method will perform the following:
Ask the user if they want to:
1.	Add
2.	Substract
3.	Multiply
4.	Divide

If input is equal to ‘1’, then ask user for First and second Integer. Store the values into the variables you declared earlier. Then ask the user if they have a third integer, tell them to: 

Enter ‘1’ for Yes

Enter ‘2’ for No

If input is equal to ‘1’, user has another integer, then collect it and store the value into the variable ‘num3’, then create a new ‘Adder’ class object and get the four variables, num1, num2, num3 & timeRequested into the constructor. Then call the add method.

If input is equal to ‘2’, no more integers, then create a new ‘Adder’ class object and get the three variables, num1, num2, & timeRequested into the constructor. Then call the add method.

Did we mention this calculator was over-the-top? Well the Mathematician is known for making a log of all inquiries. So using the File API <i>(from Java.io.*)</i>, create a new File and name it “Mathematician’s Log book”. We will be writing to this ‘file’ using a stream, specifically an output stream. For now the only information we will be sending through this stream is the time the inquiry was made. The Calendar method .getTime(), after getting an instance, will be the format we want to send through the stream. We can only send bytes through this stream so we will need to first convert the time to a string, and then into bytes. Just a heads up when using the output stream you may have to catch an IOException. And remember to close the stream as the final command.

Since we just collected a good amount of data, the ‘heap’ may need some cleaning up. Now Java handles memory allocation automatically when necessary but we can also do it manually. So go ahead and summon the garbage collector. In order to do this you will have to create a new Java Runtime object, in order to interface with the ‘environment’. Then call the gc() <i>(garbage collection)</i> method. This will suggest a ‘clean-up’ to the JVM. 

Repeat this process to respond to the user’s request to either subtract, multiply or divide.

Almost there! Create one more class called Main. Create a main method. Inside the method create a new InputCollector object and call the ‘collectInput’ method.</strong>