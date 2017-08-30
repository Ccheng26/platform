## Part C – Lists & Threads

### Objective
<strong>In this section you will create a program that will implement multithreading and collections.
Requirements
Name the package containing all of the classes for this section, “JavaAssignment_PartC”. 

You’ll be using collections (List, Arrays, ArrayList) from java.util to store data. Go ahead and import java.util.*;   </strong>

### Activities
<strong><u>Thread - Generate Number</u></strong>

Write a Java program to generate even and odd numbers using two threads. Collect two numbers, start and end range, from the user and generate the even and odd numbers using two threads in parallel.

Create a main class "Main_Program.java"
Create <strong>Number_Program</strong> class with below attributes,
+ start - Integer
+ end - Integer
+ numberType - String (Contain value "ODD" or "EVEN")
+ numberList  - List<Integer>

Create a constructor for Number_Program class with arguments numberType, start and end. Also set the numberList to initial value null.

Extend thread classes and override the run() method

Create another method display() to display the numbers in numberList

In the main class after reading the input from the user, create two objects for the Number_Program class and start both the threads using start() method. Wait for the child thread to finish the operation by calling join() method on those objects.

In the run() method generate the even or odd number based on the numberType value and store the generated numbers into the number list. 

<strong>Input and Output Format:
Refer sample input and output for formatting specifications.

[All text in bold corresponds to input and the rest corresponds to output]</strong>

Sample Input/Output : 

<i>Enter range of numbers

<strong>20</strong>

<strong>40</strong>

Odd numbers in given range

21 23 25 27 29 31 33 35 37 39

Even numbers in given range

20 22 24 26 28 30 32 34 36 38 40 </i>
