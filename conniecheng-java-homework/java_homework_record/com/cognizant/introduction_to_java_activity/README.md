## Hands-on Exercise Objective

After completing the hands-on exercises, you will be able to:
- Develop simple Java program using notepad.
- Develop simple Java class and create objects using notepad.
- Develop simple Java program using packages and objects.
- How to handle compile time errors.

Problem Statement 1
Fix the compilation errors and run the program? 
The program should print “My First Java Program” in the console.
``` java
Class myProgram {
  Public static void main(String arg[]);{
  system.out.Println("My First Java Program");
 }
}

Save the file as “MyProgram.java” and compile it
```
    


Problem Statement 2

Fix the compilation error and invoke the method printMessage() of DisplayMessage class.
```java
class DisplayMessage{
    void printMessage(){
        System.out.println((“Hello My Message”);
    }
}  

Save the file as “DisplayMessage.java”  .

class MyProgram{
    public static void main(String arg[]){
      MyProgram program=new MyProgram();
      program.printMessage();
    }
}

Save the file as “MyProgram.java” and compile it.
```


Problem Statement: 3

Develop a class “Rectangle” inside a package “com.cognizant.shapes”. The class should have a method called calculateArea() which should print a message “The Area of the rectangle is calculated using the formula length * breadth”. Develop another class “AreaCalculator” inside the package “com.cognizant.shapes” add a main method which invokes the calculateArea of the rectangle object.

Output: The following message should be displayed in the console
“The Area of the rectangle is calculated using the formula length * breadth”


