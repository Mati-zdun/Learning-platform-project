// Paste your JavaScript code here
document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle active class and expand/collapse content
  function toggleContent(button) {
    var content = button.nextElementSibling;
    button.classList.toggle("active");
    if (button.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px"; // Expand content fully
    } else {
      content.style.maxHeight = null; // Remove maxHeight property
    }
  }
  // JavaScript to handle the toggle of lessonextend div
  const lessonToggle = document.querySelector(".collapsible");
  const lessonExtend = document.querySelector(".lessonextend");

  lessonToggle.addEventListener("click", function () {
    if (lessonExtend.classList.contains("active")) {
      lessonExtend.style.transform = "translateX(100%)";
      lessonExtend.classList.remove("active");
    } else {
      lessonExtend.style.transform = "translateX(0)";
      lessonExtend.classList.add("active");
    }
  });

  // Add event listeners for click to toggle collapsible divs
  var coll = document.querySelectorAll(".collapsible");
  coll.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleContent(this);
    });
  });

  // Add event listeners to all "Click Me" buttons
  document.querySelectorAll(".click-me").forEach(function (button) {
    button.addEventListener("click", function () {
      // Extract the lesson number from the button's ID
      var lessonNumber = this.id.split("-")[2];
      // Get the corresponding output element using the lesson number
      var outputElement = document.getElementById("output-" + lessonNumber);
      // Call the typeText function with the output element
      typeText(outputElement, lessonNumber);
    });
  });

  // flash cards
  const flashcards = document.querySelectorAll(".flashcard");

  flashcards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // Function to type text onto the screen
  function typeText(outputElement, lessonNumber) {
    const textToType = [
      [
        'type of "Hello"; = "string" .',
        'type of true; = "boolean" .',
        'type of null; = "object" .',
        'type of undefined; = "undefined" .',
        'type of Symbol("foo"); = "symbol" .',
        'type of 123; = "bigint" .',
        'type of Math; = "object" .',
        "more examples of data types.. . .",
        "1; var num = 10; .",

        "num is identity of the number being used or stored under .",
        ". .------------------------------------. .",
        ". .2 String var message = 'Hello, World!'; .",
        'let anotherMessage = "JavaScript is awesome!" .',
        ". .------------------------------------. .",
        ". .3 Boolean var isTrue = true;.",
        "let isFalse = false;.",
        ". .------------------------------------. .",
        ". .4 Undefined var notDefined; .",
        "let alsoNotDefined;.",
        ". .------------------------------------. .",
        ". .5 Null var nothing = null; .",
        ". .------------------------------------. .",
        ". .6 Symbol const sym = Symbol('unique'); .",
        ". .------------------------------------. .",
        ". .7 Object var person = { name: 'John', age: 30 }; .",
        ". .------------------------------------. .",
        ". . 8 BigInt const bigIntNum .= 1234567890123456789012345678901234567890n",
        ". .------------------------------------. .",
      ].join(""),
      [
        "In JavaScript, statements are individual instructions executed line by line, forming the basic building blocks of programs .",
        "Each statement performs specific tasks like declaring variables, assigning values, or calling functions .",
        "Example .: let x = 5 . // Variable declaration statement . console.log(x) . // Function call statement .",
        "Declarations in JavaScript define variables or functions using keywords like var, let, const, or function .",
        "Variable declarations allocate memory for data, while function declarations define named functions for later use .",
        "Example: var name = 'John' . // Variable declaration . function greet() { return 'Hello, ' + name; } . // Function declaration .",
        "Expressions in JavaScript combine values, variables, operators, and functions to produce a single value .",
        "They're used for calculations, conditions evaluation, or creating new values .",
        "Example: let result = 10 * (2 + 3) . // Arithmetic expression . let isAdult = age >= 18 . // Logical expression . let greet = function() { return 'Hello'; } . // Function expression .",
        "Comments in JavaScript are explanatory notes within the code, ignored by the JavaScript engine, meant for human readers .",
        "They enhance code readability, provide context, and document the codebase .",
        "Example: // This is a single-line comment . /* This is a multi-line comment . It can span multiple lines . */ .",
        "These elements are crucial for understanding and writing effective JavaScript code . forming the basis of syntax essential for building robust applications.",
      ].join(""),
      [
        "Object-Oriented Programming (OOP) in JavaScript: .",
        "Example: Creating a Person object with a name property .",
        "const person = {                            .",
        "  name: 'John',                            .",
        "  greet: function() {                           .",
        "    return 'Hello, my name is ' + this.name;                             .",
        "  }                     .",
        "};                          .",
        "                       .",
        "console.log(person.greet()); // Output: Hello, my name is John                           .",
        "Functional Programming Paradigm:                           .",
        "Example: Adding numbers in an array using reduce.                           .",
        "const numbers = [1, 2, 3, 4, 5];                           .",
        "const sum = numbers.reduce((total, num) => total + num, 0);                           .",
        "                           .",
        "console.log(sum); // Output: 15                           .",
        "Asynchronous JavaScript (Promises, async/await):                           .",
        "Example: Simulating a delayed response using setTimeout and Promise.                           .",
        "function delayedResponse() {                           .",
        "  return new Promise((resolve, reject) => {                           .",
        "    setTimeout(() => {                           .",
        "      resolve('Delayed response');                           .",
        "    }, 2000);                           .",
        "  });                           .",
        "}                           .",
        "                           .",
        "delayedResponse().then(response => console.log(response)); // Output: Delayed response                           .",
        "Modules and Module Loaders:                           .",
        "Example: Exporting and importing functions between modules.                           .",
        "// Module: math.js                           .",
        "export function add(a, b) {                           .",
        "  return a + b;                           .",
        "}                           .",
        "                           .",
        "// Module: main.js                           .",
        "import { add } from './math.js';                           .",
        "                           .",
        "console.log(add(2, 3)); // Output: 5                           .",
        "Browser APIs and DOM Manipulation:                           .",
        "Example: Changing the text of an HTML element using document.getElementById.                           .",
        "<!DOCTYPE html>                           .",
        "<html>                           .",
        "<body>                           .",
        "  <h1 id='heading'>Hello, World!</h1>                           .",
        "                           .",
        "  <script>                           .",
        "    const heading = document.getElementById('heading');                           .",
        "    heading.textContent = 'Welcome to JavaScript!';                           .",
        "  </script>                           .",
        "</body>                           .",
        "</html>                           .",
        "Error Handling and Debugging Techniques:                           .",
        "Example: Handling errors using try...catch blocks.                           .",
        "try {                           .",
        "  const result = 10 / 0; // Division by zero                           .",
        "  console.log(result);                           .",
        "} catch (error) {                           .",
        "  console.error('An error occurred:', error.message);                           .",
        "}                           .",
        "These examples provide a simpler understanding of each coding concept in JavaScript.                           .",
      ].join(""),
      [
        "JavaScript Operations Tutorial                         .",
        "This tutorial covers basic operations in JavaScript, including arithmetic, assignment, comparison, logical, and increment/decrement operations .",

        "Arithmetic Operations:                         .",
        "Arithmetic operations are used to perform mathematical calculations.                         .",

        "var x = 10;                         .",
        "var y = 5;                         .",
        "var sum = x + y;  // Addition                         .",
        "var difference = x - y;  // Subtraction                         .",
        "var product = x * y;  // Multiplication                         .",
        "var quotient = x / y;  // Division                         .",
        "var remainder = x % y;  // Modulus                         .",

        "Assignment Operations:                         .",
        "Assignment operations are used to assign values to variables.                         .",

        "var num = 10;                         .",
        "num += 5;  // Equivalent to: num = num + 5;                         .",
        "num -= 3;  // Equivalent to: num = num - 3;                         .",
        "num *= 2;  // Equivalent to: num = num * 2;                         .",
        "num /= 4;  // Equivalent to: num = num / 4;                         .",

        "Comparison Operations:                         .",
        "Comparison operations are used to compare two values.                         .",

        "var a = 5;                         .",
        "var b = 10;                         .",
        "var isEqual = (a == b);  // Equal to                         .",
        "var isNotEqual = (a != b);  // Not equal to                         .",
        "var isGreater = (a > b);  // Greater than                         .",
        "var isLess = (a < b);  // Less than                         .",
        "var isGreaterOrEqual = (a >= b);  // Greater than or equal to                         .",
        "var isLessOrEqual = (a <= b);  // Less than or equal to                         .",

        "Logical Operations:                         .",
        "Logical operations are used to combine or manipulate boolean values.                         .",

        "var x = true;                         .",
        "var y = false;                         .",
        "var resultAnd = x && y;  // Logical AND                         .",
        "var resultOr = x || y;  // Logical OR                         .",
        "var resultNot = !x;  // Logical NOT                         .",

        "Increment and Decrement Operations:                         .",
        "Increment (++) and decrement (--) operations are used to increase or decrease the value of a variable by one.                         .",

        "var num = 5;                         .",
        "num++;  // Increment by one                         .",
        "num--;  // Decrement by one                         .",
      ].join(""),
      [
        "// Conditional Statements                        .",
        "var age = 25;                        .",
        "                        .",
        "if (age >= 18) {                        .",
        "  console.log('You are an adult.'); // Executes if condition is true                        .",
        "} else {                        .",
        "  console.log('You are a kid.'); // Executes if condition is false                        .",
        "}                        .",
        "                        .",
        "var dayOfWeek = 'Monday';                        .",
        "                        .",
        "if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {                        .",
        "  console.log('It's the weekend!');                        .",
        "} else if (dayOfWeek === 'Friday') {                        .",
        "  console.log('It's almost the weekend!');                        .",
        "} else {                        .",
        "  console.log('It's a weekday.');                        .",
        "}                        .",
        "                        .",
        "// Loops                        .",
        "// for Loop                        .",
        "for (var i = 0; i < 5; i++) {                        .",
        "  console.log('Iteration ' + (i + 1));                        .",
        "}                        .",
        "                        .",
        "// while Loop                        .",
        "var count = 0;                        .",
        "while (count < 3) {                        .",
        "  console.log('Count: ' + count);                        .",
        "  count++;                        .",
        "}                        .",
        "                        .",
        "// do...while Loop                        .",
        "var x = 0;                        .",
        "do {                        .",
        "  console.log('Value of x: ' + x);                        .",
        "  x++;                        .",
        "} while (x < 3);                        .",
        "                        .",
        "// Switch Statement                        .",
        "var color = 'red';                        .",
        "                        .",
        "switch (color) {                        .",
        "  case 'red':                        .",
        "    console.log('The color is red.');                        .",
        "    break;                        .",
        "  case 'blue':                        .",
        "    console.log('The color is blue.');                        .",
        "    break;                        .",
        "  case 'green':                        .",
        "    console.log('The color is green.');                        .",
        "    break;                        .",
        "  default:                        .",
        "    console.log('Unknown color.');                        .",
        "}                        .",
      ].join(""),

      [
        "// Function Declaration                        .",
        "function greet(name) {                        .",
        "  console.log('Hello, ' + name + '!');                        .",
        "}                        .",
        "                        .",
        "// Function Call                        .",
        "greet('Alice');                        .",
        "greet('Bob');                        .",
        "                        .",
        "// Function Expression                        .",
        "var add = function(a, b) {                        .",
        "  return a + b;                        .",
        "};                        .",
        "                        .",
        "var result = add(3, 5);                        .",
        "console.log('Result:', result);                        .",
        "                        .",
        "// Arrow Function                        .",
        "var multiply = (x, y) => {                        .",
        "  return x * y;                        .",
        "};                        .",
        "                        .",
        "var product = multiply(4, 6);                        .",
        "console.log('Product:', product);                        .",
        "                        .",
        "// Default Parameters                        .",
        "function greetUser(name = 'Guest') {                        .",
        "  console.log('Hello, ' + name + '!');                        .",
        "}                        .",
        "                        .",
        "greetUser(); // Output: Hello, Guest!                        .",
        "greetUser('Emily'); // Output: Hello, Emily!                        .",
      ].join(""),
      [
        "// Object Literal                        .",
        "var person = {                        .",
        "  name: 'John',                        .",
        "  age: 30,                        .",
        "  isAdmin: false                        .",
        "};                        .",
        "                        .",
        "// Accessing Object Properties                        .",
        "console.log('Name:', person.name);                        .",
        "console.log('Age:', person['age']);                        .",
        "                        .",
        "// Adding New Property                        .",
        "person.email = 'john@example.com';                        .",
        "console.log('Email:', person.email);                        .",
        "                        .",
        "// Removing Property                        .",
        "delete person.isAdmin;                        .",
        "console.log('isAdmin:', person.isAdmin); // Output: undefined                        .",
        "                        .",
        "// Object Constructor                        .",
        "function Car(make, model, year) {                        .",
        "  this.make = make;                        .",
        "  this.model = model;                        .",
        "  this.year = year;                        .",
        "}                        .",
        "                        .",
        "// Creating Object Instances                        .",
        "var myCar = new Car('Toyota', 'Camry', 2020);                        .",
        "                        .",
        "// Accessing Object Methods                        .",
        "Car.prototype.info = function() {                        .",
        "  return 'My car is a ' + this.year + ' ' + this.make + ' ' + this.model;                        .",
        "};                        .",
        "                        .",
        "console.log(myCar.info()); // Output: My car is a 2020 Toyota Camry                        .",
      ].join(""),
      [
        "// Array Declaration: Declares an array named 'fruits'                     . containing three string elements:                      .'apple', 'banana', and 'orange'.                     .",
        "var fruits = ['apple', 'banana', 'orange'];",

        "// Accessing Array Elements: Accesses and logs the first and second elements of the 'fruits' array.                     .",
        "console.log('First fruit:', fruits[0]);                     .",
        "console.log('Second fruit:', fruits[1]);                     .",

        "// Modifying Array Elements: Modifies the second element of the 'fruits' array to 'grape' and logs the updated array.                     .",
        "fruits[1] = 'grape';                     .",
        "console.log('Modified array:', fruits);                     .",

        "// Array Length: Determines and logs the number of elements in the 'fruits' array.                     .",
        "console.log('Number of fruits:', fruits.length);                     .",

        "// Adding Elements to Array: Adds 'strawberry' to the end of the 'fruits' array and logs the updated array.                     .",
        "fruits.push('strawberry');                     .",
        "console.log('Updated array:', fruits);                     .",

        "// Removing Elements from Array: Removes the last element from the 'fruits' array and logs the updated array.                     .",
        "fruits.pop();                     .",
        "console.log('Updated array:', fruits);                     .",

        "// Iterating Through an Array: Iterates through each element of the 'fruits' array and logs each element.                     .",
        "for (var i = 0; i < fruits.length; i++) {                     .",
        "  console.log('Fruit:', fruits[i]);                     .",
        "}                     .",

        "// Array Methods: Demonstrates various array methods such as join, slice, and concat, and logs the results.                     .",
        "console.log('Joined elements:', fruits.join(', '));                     .",
        "console.log('Sliced array:', fruits.slice(1, 3));                     .",
        "console.log('Concatenated array:', fruits.concat(['pear', 'kiwi']));                     .",

        "// Searching in an Array: Searches for the index of 'orange' and 'grape' in the 'fruits' array and logs the results.                     .",
        "console.log('Index of orange:', fruits.indexOf('orange'));                     .",
        "console.log('Index of grape:', fruits.indexOf('grape'));                     .",
      ].join(""),
      // Add more arrays for each lesson as needed
    ];

    const typingSpeed = 9; // Speed in milliseconds between each character

    let index = 0;

    function typeNextChar() {
      if (index < textToType[lessonNumber - 1].length) {
        const currentChar = textToType[lessonNumber - 1].charAt(index);
        const nextChar = textToType[lessonNumber - 1].charAt(index + 1); // Get the next character

        outputElement.innerHTML += currentChar;
        if (currentChar === " " && nextChar === ".") {
          outputElement.innerHTML += "<br>"; // Add a line break after two consecutive periods
          index++; // Increment index to skip the next character, as it's already processed
        }
        index++;
        setTimeout(typeNextChar, typingSpeed);
      }
    }
    typeNextChar(); // Start typing
  }
});

// Define an array of coding terms and their corresponding classes

// Function to replace coding terms with HTML markup
function highlightCodingTerms(text) {
  // Create a regex pattern to match coding terms
  const pattern = new RegExp(
    "\\b(" + codingTerms.map((termObj) => termObj.term).join("|") + ")\\b",
    "g"
  );

  // Replace coding terms with HTML markup
  return text.replace(
    pattern,
    (match) =>
      `<span class="${
        codingTerms.find((termObj) => termObj.term === match).class
      }">${match}</span>`
  );
}
