// Write a function that takes a numerical score (0-100) as an argument and returns a letter grade (A, B, C, D, or F) based on the standard grading scale.
// function lettergrade(score){
// if(score>=90)
//     return 'A';
// else if(score>=80)
//     return 'B';
// else if(score>=70)
//     return 'C';
// else if(score>=60)
//     return 'D';
// else(score>=50)
// return'E';
// }
// console.log(lettergrade(90))
// Question-2  Use a while loop to print all odd numbers from 1 to 50.
// let i=1;
// while(i<=50){
//     i+=2;
//     console.log(i);
// }
// Question-3What will the following code output?
// javascript
// Copy code in
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2)
// console.log(doubled);
// line24-[1,2,3,4,5];
// line26=number.map(num*2 );so the resulting new factor will be (1*2=2,2*2=4,3*2=6,4*2=8,5*2=10)
// const doubled=(2,4,6,8,10)

// Output: [2, 4, 6, 8, 10] 
// Question-4 String Methods: How can you check if a string contains a specific substring? Provide an example using the string "Hello, World!".
// const str = "Hello, World!";
// const substring = "World";

// if (str.includes(substring)) {
//   console.log(`The string contains the substring "${substring}"`);
// } else {
//   console.log(`The string does not contain the substring "${substring}"`);
// }
// Question-5-Ob0jects: How do you add a new property to an existing object? Provide an example object and show how to add a property called age.
// person={
//     Name:"Ankit"
// }
// person.age="16"
// console.log(person)
// Question-6 Functions: Write a function called sum that takes two parameters and returns their sum. What will sum(5, 10) return?
// function sum(num1,num2){
//     return num1+num2;
// }
// let rv=sum(5,10);
// console.log(rv);
//  Question-7Function Constructor: How do you create an object using a function constructor? Provide an example of a constructor function called Car that initializes make and model properties.
// function Car( name,version){
//    this.name= name;
//    this.version=version;
// }
// let cardetails = new Car("ferrari",12);
// console.log(cardetails); 
// Question-8 Fibonacci Function: Write a function that returns the nth Fibonacci number. For example, if the input is 5, the output should be 5 (0, 1, 1, 2, 3, 5).
// let x=0;
// let y=1;
// let z=x+y;
// function fibocianci(num){
// for(i=0;i<=10;i++){
//     x=y;
//     y=z;
//     z=x+y;
//     console.log(y);
    
// }
// }
// fibocianci(10)
// Question-9 given an array, the task is to cyclically rotate the array clockwise by one time.
// Examples:
// Input: arr[] = {1, 2, 3, 4, 5}
// Output: arr[] = {5, 1, 2, 3, 4}
// Input: arr[] = {2, 3, 4, 5 , 1}
// Output: {1, 2, 3, 4, 5}

//  *
//  * @param {Array} arr - The input array to be rotated.
//  * @returns {Array} The rotated array.
//  */
// function rotateArray(arr) {

//     if (arr.length === 0) {
//         return arr;
//     }

    
//     let lastElement = arr[arr.length - 1];

    
//     for (let i = arr.length - 1; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }

    
//     arr[0] = lastElement;

//     return arr;
// }


// let arr1 = [1, 2, 3, 4, 5];
// console.log("Original array:", arr1);
// console.log("Rotated array:", rotateArray(arr1));

// let arr2 = [2, 3, 4, 5, 1];
// console.log("Original array:", arr2);
// console.log("Rotated array:", rotateArray(arr2));
// Question- 10Example:
// Input: "hello"
// Output: "HELLO"
// Hint:
// You can use ASCII values to determine the difference between lowercase and uppercase letters. In the ASCII table:
// Lowercase letters ('a' to 'z') range from 97 to 122.
// Uppercase letters ('A' to 'Z') range from 65 to 90.
// You can use this information to convert each lowercase letter to its corresponding uppercase counterpart.
// function toUppercase(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         let charcode = str.charCodeAt(i);
//         if (charcode >= 97 && charcode <= 122) {
//             result += String.fromCharCode(charcode - 32);
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }

// console.log(toUppercase("Hello world"));