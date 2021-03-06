## Hands-on Exercise Objective
After completing the hands-on exercises, you will be able to:
    
    Create Custom Exceptions and handle it using Try/Catch/Finally blocks.

<strong>Problem Statement 1:</strong>

Develop a simple java application to calculate the tax for a particular employee based on his salary.

Develop  a  class  named  “<strong>TaxCalculator</strong>“ with a method named <strong>calculateTax</strong> with the following method parameters,

| Variable Name | Data Type |
|---------------|-----------|
|empName|String|
|isIndian|boolean|
|empSal|double|

This method should return a double taxAmount.

The business logic for calculating the tax  is as follows, this has to be implemented inside the method,

If the employee is not a Indian

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The calculator should throw
 <strong>CountryNotValidException</strong>

If the employee name is null or empty

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The calculator should throw a <strong>EmployeeNameInvalidException</strong>

If  empSal is greater than one lakh and isIndian true

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;taxAmount =empSal *8/100 

Otherwise  If  empSal  is between 50K and 1lakh and isIndian true

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;taxAmount =empSal *6/100 

Otherwise  If  empSal  is between 30 and 50 Thousand  and isIndian true

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;taxAmount =empSal *5/100 

Otherwise  If  empSal  is between 10 and 30 Thousand  and isIndian true

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;taxAmount =empSal *4/100 

Otherwise

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The calculator should throw a <strong>TaxNotEligibleException</strong>. 

Develop a main class CalculatorSimulator  , implement the following logic in main method

1.	Execute the calculateTax Method and print the tax amount as <strong>“Tax amount is “&lt;Tax Amount&gt;</strong>
2.	In case the calculateTaxMethod throws exceptions, this method needs to catch the appropriate exception print the stack trace and display the following messages,
    
    a.	<strong>Country not valid</strong>:  “<strong>The employee should be an Indian citizen for calculating tax</strong>”

    b.	<strong>Employee name not valid</strong>:  “<strong>The employee name cannot be empty</strong>”

    c.	<strong>Not eligible for Tax calculation</strong>:  “<strong>The employee does not need to pay tax</strong>”

The following test cases to be executed, change the data in main method and run it and verify the output messages

|Test Cases|Employee Name|Employee Salary|Is Indian |Message Expected|
|----------|-------------|---------------|----------|----------------|
|Test Case 1|Ron|34000|<strong>False</strong>|<strong>The employee should be an Indian citizen for calculating tax.</strong>|
|Test Case 2|Tim|1000|<strong>True</strong>|<strong>The employee does not need to pay tax</strong>|
|Test Case 3|Jack|55000|<strong>True</strong>|<strong>Tax amount is 3300</strong>|
|Test Case 4|	|30000|<strong>True</strong>|<strong>The employee name cannot be empty</strong>|


