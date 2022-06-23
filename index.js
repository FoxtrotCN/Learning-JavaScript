
let num1 = 23;
let num2 = 13;

document.write(num1 == num2);

let num3 = 23;
let num4 = 14;

document.write(num3 != num4);

let num5 = 23;
let text = "23";

document.write(num5 == text); // this return True

// but this

document.write(num5 === text); // return False ' = = = ' check if the data is identical.

document.write(num1 > num2); // x > y ; x < y ; x >= y ; x <= y;

// Logical Operators

let value = true;
let value2 = true;

let result = value && value2; // Both are true, return true.
let result2 = value || value2; // One true, all is true. Both false, return false.
let result3 = !value; // change the value: false -> true / true -> false.



