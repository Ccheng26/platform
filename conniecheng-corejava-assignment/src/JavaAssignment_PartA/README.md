# Assignment 1:

## Part A – Exception Handling

### Objective

<strong>In this section you will create a program that will implement exception handling</strong>

### Requirements
<strong>Name the package containing all of the classes for this section, “JavaAssignment_PartA”. 

You can use the Scanner from java.util on this one to collect input. Go ahead and import java.util.*;  </strong>

### Activities

Write a program that takes as input the size of the array and the elements in the array. The program then asks the user to enter a particular index and prints the element at that index. 
  
This program may generate Array Index Out Of Bounds Exception. Use exception handling mechanisms to handle this exception. In the catch block, print the class name of the exception thrown. 

<strong>Input and Output Format: </strong>

Refer sample input and output for formatting specifications.
All text in bold corresponds to input and the rest corresponds to output.

<strong><u>Sample Input and Output 1: </u></strong>

<i>Enter the number of elements in the array 

 <strong>3</strong> 

Enter the elements in the array 

<strong>20</strong>

<strong>90</strong>

<strong>4 </strong>


Enter the index of the array element you want to access 

<strong>2 </strong>

The array element at index 2 = 4 

The array element successfully accessed 
</i>

<strong><u>Sample Input and Output 2: </u></strong>

<i>
Enter the number of elements in the array 

<strong>3</strong> 

Enter the elements in the array 

<strong>20</strong>

<strong>90</strong>

<strong>4 </strong>

Enter the index of the array element you want to access 

<strong>6 </strong>

IndexOutOfRangeException
</i>