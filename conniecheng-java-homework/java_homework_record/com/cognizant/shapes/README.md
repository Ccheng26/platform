## Hands-on Exercise Objective
After completing the hands-on exercises, you will be able to:
- Develop simple Java program using if-else if - else statement.
- Develop simple Java program using Switch/Case Statement.
- Develop simple Java program using while statement

Problem Statement 1 :
    Develop  classes  named  “<strong>Circle</strong>”, “<strong>Square</strong>”,  and “<strong>Triangle</strong>“ .Each  class should have a method named calculateArea()  which calculates  the area based on the below logic and display the appropriate message

|Class Name | Method Name | Variable Name| Variable Type| Logic |
|-----------|-------------|--------------|--------------|-------|
|Circle	|calculateArea 	|Radius|	int|	3.14 *radius * radius|
|Triangle|	calculateArea|	Sides|	int|	0.433 * sides  * sides| 
|Square	|calculateArea|	 Sides|	int|	sides  * sides|
  
Develop a class “<strong>Shapes</strong>” inside a package “<strong>com.cognizant.shapes</strong>”. The class should have one instance variables of type int named “”numberOfSides” and a method called calculateShapeArea(). This method takes two arguments one for identifying the shape and other for side length.

<strong>This method should identify the shape based on the numberOfSides and calculate the area and print it in console as follows</strong>

<strong>If</strong> numberOfSides is 1 then  invoke the “calculateArea” of the  Circle Object.

This method will also display the following message in the console.

    “The Area of the Circle is”<area>

<strong>If</strong> numberOfSides is 3  then  invoke the “calculateArea” of the  Triangle  Object.

This method will also display the following message in the console.

    “The Area of the Triangle is”<area>

<strong>If</strong> numberOfSides is 4 then  invoke the “calculateArea” of the  Square Object.

This method will also display the following message in the console.

    “The Area of the Square is”<area>

<strong>If</strong> numberOfSides is other than the specified ones then display the message 

    “No Shapes Present”.

<strong>Note</strong>: <area> - The value would be printed based on the above logics of different shapes such as Circle, Triangle and Square.

In the Shapes class add a main method which sets the values and invoke the following methods in the <strong>Shapes</strong> object.

<strong>Test Case 1</strong>:  Specify the following values and run the main method
1. Set the value of numberOfSides as 3 and sideLength as 12.
2. Invoke the method calculateShapeArea ().

<strong>Expected Output:</strong> The following messages should be displayed in the console

    The Area of the Triangle is 62.3538

<strong>Test Case 2</strong>:  Specify the following values and run the main method
1.	Set the value of numberOfSides as 4 and sideLength as 15.
2.	Invoke the method calculateShapeArea ().

<strong>Expected Output:</strong> The following messages should be displayed in the console

    The Area of  the  Square  is  225

<strong>Test Case 3</strong>: Specify the following values and run the main method
1.	Set the value of numberOfSides as 5 and sideLength as 15.
2.	Invoke the method calculateShapeArea().

<strong>Expected Output:</strong> The following messages should be displayed in the console

    No Shapes Present 



Problem Statement 2:

In the previous activity related to calculate area of circle/triangle and square replace the IF statements with Switch case.

Now Execute the class for the following test cases,

<strong>Test Case 1</strong>:  Specify the following values and run the main method

3. Set the value of numberOfSides as 3 and sideLength as 12.
4. Invoke the method calculateShapeArea ().

<strong>Expected Output:</strong> The following messages should be displayed in the console

    The Area of the Triangle is 62.3538
<strong>Test Case 2</strong>: Specify the following values and run the main method

3. Set the value of numberOfSides as 4 and sideLength as 15.
4. Invoke the method calculateShapeArea ().

<strong>Expected Output:</strong> The following messages should be displayed in the console

    The Area of the Square is 225
<strong>Test Case 3</strong>:  Specify the following values and run the main method
3.	Set the value of numberOfSides as 5 and sideLength as 15.
4.	Invoke the method calculateShapeArea().

<strong>Expected Output:</strong> The following messages should be displayed in the console

    No Shapes Present 

Problem Statement # 3:

Develop a program which prints the prime numbers between 1 and 150
The output should be printed in this format
1,3,5……goes on till it prints the last prime number.

<strong>Prime number definition:</strong> A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. For example 5 is prime, as only 1 and 5 divide it.

