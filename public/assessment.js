(function () {
  let currentQuiz = null; // Variable to store the current quiz data

  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    currentQuiz.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    currentQuiz.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${currentQuiz.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // Define quiz data arrays for each assessment
  //general knowledge
  const myQuestions1 = [
    {
      question: "1. Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
      },
      correctAnswer: "c",
    },
    {
      question: "2. Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
      },
      correctAnswer: "c",
    },
    {
      question: "3. Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint",
      },
      correctAnswer: "d",
    },
    {
      question: "4. What is the result of the expression 'typeof null'?",
      answers: {
        a: "null",
        b: "undefined",
        c: "object",
        d: "number",
      },
      correctAnswer: "c",
    },
    {
      question:
        "5. What is the purpose of the 'use strict' directive in JavaScript?",
      answers: {
        a: "To enable strict mode, which catches common coding mistakes and 'unsafe' actions",
        b: "To indicate that the script should be executed in strict security mode",
        c: "To specify that the script should be loaded asynchronously",
      },
      correctAnswer: "a",
    },
    {
      question:
        "6. What is the correct way to check if a variable is an array in JavaScript?",
      answers: {
        a: "typeof variable === 'array'",
        b: "variable instanceof Array",
        c: "Array.isArray(variable)",
      },
      correctAnswer: "c",
    },
    {
      question:
        "7. Which method is used to add new elements to the end of an array in JavaScript?",
      answers: {
        a: "push()",
        b: "add()",
        c: "append()",
        d: "insert()",
      },
      correctAnswer: "a",
    },
    {
      question:
        "8. What is the purpose of the 'splice()' method in JavaScript?",
      answers: {
        a: "To remove elements from an array",
        b: "To add new elements to an array",
        c: "To replace elements in an array with new elements",
        d: "All of the above",
      },
      correctAnswer: "d",
    },
    {
      question:
        "9. Which symbol is used for single-line comments in JavaScript?",
      answers: {
        a: "//",
        b: "/* */",
        c: "'",
        d: ";",
      },
      correctAnswer: "a",
    },
    {
      question: "10. What does 'NaN' stand for in JavaScript?",
      answers: {
        a: "Not a Null",
        b: "Not a Number",
        c: "Not a Name",
        d: "None of the above",
      },
      correctAnswer: "b",
    },
    {
      question: "11. What is the JavaScript function 'isNaN()' used for?",
      answers: {
        a: "To determine if a value is not a number",
        b: "To check if a value is equal to NaN",
        c: "To convert a string to a number",
        d: "To round a number to the nearest integer",
      },
      correctAnswer: "a",
    },
    {
      question: "12. What does the 'this' keyword refer to in JavaScript?",
      answers: {
        a: "The current function",
        b: "The parent object of a function",
        c: "The global window object",
        d: "The object that owns the currently executing code",
      },
      correctAnswer: "d",
    },
    // Add more questions for assessment 2 as needed
  ];
  //data types
  const myQuestions2 = [
    {
      question: "What is the value of the JavaScript expression 'typeof 42'?",
      answers: {
        a: "string",
        b: "number",
        c: "boolean",
        d: "undefined",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Which data type in JavaScript represents a sequence of characters?",
      answers: {
        a: "number",
        b: "string",
        c: "boolean",
        d: "object",
      },
      correctAnswer: "b",
    },
    {
      question: "How do you represent a boolean value in JavaScript?",
      answers: {
        a: "True",
        b: "False",
        c: "true",
        d: "false",
      },
      correctAnswer: "c",
    },
    {
      question:
        "Which data type in JavaScript represents a collection of key-value pairs?",
      answers: {
        a: "array",
        b: "object",
        c: "string",
        d: "boolean",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What is the value of the JavaScript expression 'typeof [1, 2, 3]'?",
      answers: {
        a: "object",
        b: "array",
        c: "number",
        d: "string",
      },
      correctAnswer: "a",
    },
    {
      question: "How do you represent an undefined value in JavaScript?",
      answers: {
        a: "null",
        b: "undefined",
        c: "nil",
        d: "void",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What is the value of the JavaScript expression 'typeof 'hello''?",
      answers: {
        a: "number",
        b: "boolean",
        c: "string",
        d: "object",
      },
      correctAnswer: "c",
    },
    {
      question:
        "Which data type in JavaScript represents a number with floating-point precision?",
      answers: {
        a: "integer",
        b: "float",
        c: "double",
        d: "number",
      },
      correctAnswer: "d",
    },
    {
      question: "What is the value of the JavaScript expression 'typeof true'?",
      answers: {
        a: "string",
        b: "number",
        c: "boolean",
        d: "object",
      },
      correctAnswer: "c",
    },
    {
      question: "How do you represent infinity in JavaScript?",
      answers: {
        a: "Infinity",
        b: "inf",
        c: "∞",
        d: "infinite",
      },
      correctAnswer: "a",
    },
    {
      question: "What is the value of the JavaScript expression 'typeof null'?",
      answers: {
        a: "null",
        b: "undefined",
        c: "object",
        d: "number",
      },
      correctAnswer: "c",
    },
    {
      question:
        "Which data type in JavaScript represents a value that is not a valid number?",
      answers: {
        a: "null",
        b: "NaN",
        c: "undefined",
        d: "Infinity",
      },
      correctAnswer: "b",
    },
  ];
  //basic syntax
  const myQuestions3 = [
    {
      question:
        "What symbol is used to denote single-line comments in JavaScript?",
      answers: {
        a: "//",
        b: "/* */",
        c: "'",
        d: ";",
      },
      correctAnswer: "a",
    },
    {
      question: "How do you declare a variable in JavaScript?",
      answers: {
        a: "var",
        b: "let",
        c: "const",
        d: "all of the above",
      },
      correctAnswer: "d",
    },
    {
      question: "What keyword is used to declare a function in JavaScript?",
      answers: {
        a: "def",
        b: "function",
        c: "fun",
        d: "func",
      },
      correctAnswer: "b",
    },
    {
      question: "Which symbol is used for string concatenation in JavaScript?",
      answers: {
        a: "+",
        b: "-",
        c: "*",
        d: "/",
      },
      correctAnswer: "a",
    },
    {
      question:
        "What is the correct way to write a multi-line comment in JavaScript?",
      answers: {
        a: "/* */",
        b: "//",
        c: "<!-- -->",
        d: "##",
      },
      correctAnswer: "a",
    },
    {
      question: "How do you access the length of an array in JavaScript?",
      answers: {
        a: "array.length",
        b: "lengthOf(array)",
        c: "array.size",
        d: "size(array)",
      },
      correctAnswer: "a",
    },
    {
      question: "Which operator is used for strict equality in JavaScript?",
      answers: {
        a: "==",
        b: "===",
        c: "!=",
        d: "!==",
      },
      correctAnswer: "b",
    },
    {
      question: "What is the result of the expression `3 + '3'` in JavaScript?",
      answers: {
        a: "6",
        b: "'33'",
        c: "33",
        d: "Error",
      },
      correctAnswer: "b",
    },
    {
      question: "What keyword is used to exit from a loop in JavaScript?",
      answers: {
        a: "break",
        b: "exit",
        c: "continue",
        d: "return",
      },
      correctAnswer: "a",
    },
    {
      question:
        "Which method is used to convert a string to lowercase in JavaScript?",
      answers: {
        a: "toLowerCase()",
        b: "toLower()",
        c: "caseLower()",
        d: "lowerCase()",
      },
      correctAnswer: "a",
    },
  ];
  //variables
  const myQuestions4 = [
    {
      question: "What keyword is used to declare a variable in JavaScript?",
      answers: {
        a: "variable",
        b: "var",
        c: "let",
        d: "const",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Which keyword declares a variable with block scope in JavaScript?",
      answers: {
        a: "var",
        b: "let",
        c: "const",
        d: "all of the above",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What is the result of declaring a variable without initializing it?",
      answers: {
        a: "SyntaxError",
        b: "undefined",
        c: "null",
        d: "0",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What is the difference between 'let' and 'const' in JavaScript?",
      answers: {
        a: "'let' can be reassigned, while 'const' cannot.",
        b: "'const' can be reassigned, while 'let' cannot.",
        c: "'let' and 'const' are interchangeable.",
        d: "'let' and 'const' both cannot be reassigned.",
      },
      correctAnswer: "a",
    },
    {
      question:
        "Which statement correctly declares multiple variables in JavaScript?",
      answers: {
        a: "var a, b, c;",
        b: "let a, b, c;",
        c: "const a, b, c;",
        d: "all of the above",
      },
      correctAnswer: "d",
    },
    {
      question: "What is the scope of a variable declared with 'var'?",
      answers: {
        a: "Function scope",
        b: "Block scope",
        c: "Global scope",
        d: "Local scope",
      },
      correctAnswer: "a",
    },
    {
      question:
        "Which keyword is used to declare a constant variable in JavaScript?",
      answers: {
        a: "var",
        b: "let",
        c: "const",
        d: "constVar",
      },
      correctAnswer: "c",
    },
    {
      question:
        "What happens if you try to redeclare a variable using 'let' or 'const'?",
      answers: {
        a: "SyntaxError",
        b: "It overrides the previous declaration.",
        c: "It creates a new variable in a different scope.",
        d: "It converts the variable to a constant.",
      },
      correctAnswer: "a",
    },
    {
      question: "Which type of variables are hoisted in JavaScript?",
      answers: {
        a: "let",
        b: "const",
        c: "var",
        d: "all of the above",
      },
      correctAnswer: "c",
    },
    {
      question:
        "What is the value of a variable before it is assigned in JavaScript?",
      answers: {
        a: "null",
        b: "undefined",
        c: "0",
        d: "NaN",
      },
      correctAnswer: "b",
    },
  ];
  //operations
  const myQuestions5 = [
    {
      question: "What is the result of the expression '5 + 3'?",
      answers: {
        a: "8",
        b: "53",
        c: "NaN",
        d: "undefined",
      },
      correctAnswer: "a",
    },
    {
      question: "What is the result of the expression '10 - 4'?",
      answers: {
        a: "6",
        b: "104",
        c: "NaN",
        d: "undefined",
      },
      correctAnswer: "a",
    },
    {
      question: "What is the result of the expression '3 * 4'?",
      answers: {
        a: "12",
        b: "34",
        c: "NaN",
        d: "undefined",
      },
      correctAnswer: "a",
    },
    {
      question: "What is the result of the expression '15 / 3'?",
      answers: {
        a: "3",
        b: "153",
        c: "NaN",
        d: "undefined",
      },
      correctAnswer: "a",
    },
    {
      question: "What is the result of the expression '12 % 5'?",
      answers: {
        a: "2",
        b: "7",
        c: "0.4",
        d: "undefined",
      },
      correctAnswer: "a",
    },
    {
      question: "What is the result of the expression '2 ** 3'?",
      answers: {
        a: "5",
        b: "6",
        c: "8",
        d: "undefined",
      },
      correctAnswer: "c",
    },
    {
      question: "What is the result of the expression '10 + '5''?",
      answers: {
        a: "15",
        b: "105",
        c: "NaN",
        d: "undefined",
      },
      correctAnswer: "b",
    },
    {
      question: "What is the result of the expression '10 + 5 + '3''?",
      answers: {
        a: "15",
        b: "105",
        c: "18",
        d: "undefined",
      },
      correctAnswer: "c",
    },
    {
      question: "What is the result of the expression '10 - '3''?",
      answers: {
        a: "7",
        b: "13",
        c: "NaN",
        d: "undefined",
      },
      correctAnswer: "c",
    },
    {
      question: "What is the result of the expression '5 * '3''?",
      answers: {
        a: "15",
        b: "153",
        c: "NaN",
        d: "undefined",
      },
      correctAnswer: "c",
    },
  ];
  // control structures
  const myQuestions6 = [
    {
      question:
        "Which JavaScript control structure is used to execute a block of code if a condition is true?",
      answers: {
        a: "for loop",
        b: "if statement",
        c: "switch statement",
        d: "while loop",
      },
      correctAnswer: "b",
    },
    {
      question: "What is the syntax for an if statement in JavaScript?",
      answers: {
        a: "if (condition) { code }",
        b: "(condition) if { code }",
        c: "{ code } if (condition)",
        d: "{ code } (condition)",
      },
      correctAnswer: "a",
    },
    {
      question: "Which keyword is used to exit a loop in JavaScript?",
      answers: {
        a: "break",
        b: "continue",
        c: "return",
        d: "exit",
      },
      correctAnswer: "a",
    },
    {
      question:
        "What will the following code output?\n\nvar x = 5;\nif (x > 10) { console.log('Hello'); }\nelse { console.log('World'); }",
      answers: {
        a: "Hello",
        b: "World",
        c: "5",
        d: "undefined",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Which control structure is used to execute a block of code multiple times?",
      answers: {
        a: "if statement",
        b: "for loop",
        c: "switch statement",
        d: "while loop",
      },
      correctAnswer: "b",
    },
    {
      question: "What is the syntax for a for loop in JavaScript?",
      answers: {
        a: "for (var i = 0; i < n; i++) { code }",
        b: "for (i = 0; i < n; i++) { code }",
        c: "for (var i = 0; i < n; i++) code",
        d: "for (i = 0; i < n; i++) code",
      },
      correctAnswer: "a",
    },
    {
      question:
        "Which JavaScript control structure is used to select one of many code blocks to be executed?",
      answers: {
        a: "for loop",
        b: "if statement",
        c: "switch statement",
        d: "while loop",
      },
      correctAnswer: "c",
    },
    {
      question: "What is the syntax for a switch statement in JavaScript?",
      answers: {
        a: "switch (expression) { case x: code }",
        b: "switch (expression) { x: case code }",
        c: "switch (expression) { x: code }",
        d: "switch (expression) { code case x }",
      },
      correctAnswer: "a",
    },
    {
      question:
        "What will the following code output?\n\nvar day = 'Tuesday';\nswitch (day) {\n  case 'Monday': console.log('Start of the week'); break;\n  case 'Tuesday': console.log('Middle of the week'); break;\n  default: console.log('End of the week');\n}",
      answers: {
        a: "Start of the week",
        b: "Middle of the week",
        c: "End of the week",
        d: "Tuesday",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What will the following code output?\n\nfor (var i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i);\n}",
      answers: {
        a: "0, 1, 3, 4",
        b: "1, 2, 3, 4",
        c: "0, 1, 2, 3",
        d: "0, 1, 2, 3, 4",
      },
      correctAnswer: "a",
    },
  ];
  // functions
  const myQuestions7 = [
    {
      question: "What is the keyword used to define a function in JavaScript?",
      answers: {
        a: "define",
        b: "function",
        c: "func",
        d: "def",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Which of the following is not a valid way to declare a function in JavaScript?",
      answers: {
        a: "Function declaration",
        b: "Function expression",
        c: "Arrow function",
        d: "Function statement",
      },
      correctAnswer: "d",
    },
    {
      question: "What is a function expression in JavaScript?",
      answers: {
        a: "A way to define a function using the function keyword",
        b: "A way to assign a function to a variable",
        c: "A function that returns an expression",
        d: "A function that takes an expression as an argument",
      },
      correctAnswer: "b",
    },
    {
      question: "What is the purpose of the return statement in a function?",
      answers: {
        a: "To terminate the function execution",
        b: "To return a value from the function",
        c: "To define the function's parameters",
        d: "To declare the function",
      },
      correctAnswer: "b",
    },
    {
      question: "What is a callback function?",
      answers: {
        a: "A function that is called after another function has finished executing",
        b: "A function that is passed as an argument to another function",
        c: "A function that is called before another function",
        d: "A function that is defined inside another function",
      },
      correctAnswer: "b",
    },
    {
      question: "What is the purpose of the bind() method in JavaScript?",
      answers: {
        a: "To create a new function with a specific context",
        b: "To bind arguments to a function",
        c: "To call a function with a specified context",
        d: "To execute a function immediately",
      },
      correctAnswer: "a",
    },
    {
      question: "What is a higher-order function in JavaScript?",
      answers: {
        a: "A function that operates on other functions",
        b: "A function that returns another function",
        c: "A function that takes a function as an argument",
        d: "All of the above",
      },
      correctAnswer: "d",
    },
    {
      question:
        "What is the purpose of the arguments object in JavaScript functions?",
      answers: {
        a: "To pass arguments to a function",
        b: "To access all the arguments passed to a function",
        c: "To declare function parameters",
        d: "To return values from a function",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What does the 'this' keyword refer to in a JavaScript function?",
      answers: {
        a: "The function itself",
        b: "The global object",
        c: "The object that invokes the function",
        d: "The arguments object",
      },
      correctAnswer: "c",
    },
    {
      question:
        "What is the purpose of the apply() method in JavaScript functions?",
      answers: {
        a: "To call a function with a specified context",
        b: "To execute a function immediately",
        c: "To invoke a function with a given this value and arguments provided as an array",
        d: "To create a new function with a specific context",
      },
      correctAnswer: "c",
    },
  ];
  //objects
  const myQuestions8 = [
    {
      question: "What is an object in JavaScript?",
      answers: {
        a: "A built-in data type",
        b: "A collection of key-value pairs",
        c: "A variable",
        d: "A function",
      },
      correctAnswer: "b",
    },
    {
      question: "How do you access the properties of an object in JavaScript?",
      answers: {
        a: "Using dot notation",
        b: "Using bracket notation",
        c: "Both dot and bracket notation",
        d: "Neither dot nor bracket notation",
      },
      correctAnswer: "c",
    },
    {
      question: "What is a method in JavaScript objects?",
      answers: {
        a: "A property that holds a function",
        b: "A way to access object properties",
        c: "A data type",
        d: "An object itself",
      },
      correctAnswer: "a",
    },
    {
      question:
        "How do you add a new property to an existing object in JavaScript?",
      answers: {
        a: "Using dot notation",
        b: "Using bracket notation",
        c: "Both dot and bracket notation",
        d: "Neither dot nor bracket notation",
      },
      correctAnswer: "c",
    },
    {
      question:
        "What is the purpose of the 'this' keyword in JavaScript objects?",
      answers: {
        a: "To refer to the current object",
        b: "To refer to the parent object",
        c: "To refer to the global object",
        d: "To refer to the object's prototype",
      },
      correctAnswer: "a",
    },
    {
      question: "How do you delete a property from an object in JavaScript?",
      answers: {
        a: "Using the delete keyword",
        b: "Setting the property value to null",
        c: "Both a and b",
        d: "None of the above",
      },
      correctAnswer: "a",
    },
    {
      question: "What is object destructuring in JavaScript?",
      answers: {
        a: "A way to access object properties",
        b: "A way to create new objects",
        c: "A way to extract properties from an object and assign them to variables",
        d: "A way to delete object properties",
      },
      correctAnswer: "c",
    },
    {
      question:
        "What is the difference between objects and arrays in JavaScript?",
      answers: {
        a: "Objects store data in key-value pairs, while arrays store data in ordered lists",
        b: "Objects are used for mathematical operations, while arrays are used for data storage",
        c: "Objects can only hold primitive data types, while arrays can hold any data type",
        d: "There is no difference",
      },
      correctAnswer: "a",
    },
    {
      question:
        "Which of the following is a valid way to create an object in JavaScript?",
      answers: {
        a: "Using the Object.create() method",
        b: "Using the new keyword with a constructor function",
        c: "Both a and b",
        d: "Neither a nor b",
      },
      correctAnswer: "c",
    },
    {
      question: "What does JSON stand for?",
      answers: {
        a: "JavaScript Object Notation",
        b: "JavaScript Oriented Notation",
        c: "JavaScript Object Network",
        d: "JavaScript Object Naming",
      },
      correctAnswer: "a",
    },
  ];
  //arrays
  const myQuestions9 = [
    {
      question: "What is an array in JavaScript?",
      answers: {
        a: "A built-in data type",
        b: "A collection of key-value pairs",
        c: "A variable",
        d: "A function",
      },
      correctAnswer: "a",
    },
    {
      question: "How do you access elements of an array in JavaScript?",
      answers: {
        a: "Using dot notation",
        b: "Using bracket notation",
        c: "Both dot and bracket notation",
        d: "Neither dot nor bracket notation",
      },
      correctAnswer: "b",
    },
    {
      question: "What is the length property of an array in JavaScript?",
      answers: {
        a: "The number of elements in the array",
        b: "The maximum number of elements the array can hold",
        c: "The index of the last element in the array",
        d: "The total memory occupied by the array",
      },
      correctAnswer: "a",
    },
    {
      question:
        "What is the purpose of the push() method in JavaScript arrays?",
      answers: {
        a: "To remove the last element of the array",
        b: "To add a new element to the end of the array",
        c: "To sort the elements of the array",
        d: "To reverse the order of the elements in the array",
      },
      correctAnswer: "b",
    },
    {
      question:
        "How do you remove the last element from an array in JavaScript?",
      answers: {
        a: "Using the pop() method",
        b: "Using the shift() method",
        c: "Using the splice() method",
        d: "Using the slice() method",
      },
      correctAnswer: "a",
    },
    {
      question: "What does the join() method do in JavaScript arrays?",
      answers: {
        a: "Joins all elements of the array into a single string",
        b: "Splits the array into subarrays",
        c: "Returns the first element of the array",
        d: "Returns a new array containing only unique elements",
      },
      correctAnswer: "a",
    },
    {
      question:
        "What is the purpose of the concat() method in JavaScript arrays?",
      answers: {
        a: "To concatenate two or more arrays and return a new array",
        b: "To reverse the order of the elements in the array",
        c: "To sort the elements of the array",
        d: "To remove the first element of the array",
      },
      correctAnswer: "a",
    },
    {
      question: "How do you access the last element of an array in JavaScript?",
      answers: {
        a: "Using the first index (0)",
        b: "Using the length property minus one",
        c: "Using the length property",
        d: "There is no way to directly access the last element",
      },
      correctAnswer: "b",
    },
    {
      question:
        "What does the indexOf() method return if the element is not found in the array?",
      answers: {
        a: "-1",
        b: "0",
        c: "null",
        d: "undefined",
      },
      correctAnswer: "a",
    },
    {
      question:
        "Which of the following methods does not modify the original array?",
      answers: {
        a: "splice()",
        b: "slice()",
        c: "push()",
        d: "pop()",
      },
      correctAnswer: "b",
    },
  ];

  // Function to load the quiz based on the assessment number
  function loadQuiz() {
    // Extract the HTML file name
    const fileName = window.location.pathname.split("/").pop().split(".")[0];
    const assessmentNumber = parseInt(fileName.slice(-1));

    // Use the assessmentNumber to determine the array
    if (assessmentNumber === 1) {
      currentQuiz = myQuestions1;
    } else if (assessmentNumber === 2) {
      currentQuiz = myQuestions2;
    } else if (assessmentNumber === 3) {
      currentQuiz = myQuestions3;
    } else if (assessmentNumber === 4) {
      currentQuiz = myQuestions4;
    } else if (assessmentNumber === 5) {
      currentQuiz = myQuestions5;
    } else if (assessmentNumber === 6) {
      currentQuiz = myQuestions6;
    } else if (assessmentNumber === 7) {
      currentQuiz = myQuestions7;
    } else if (assessmentNumber === 8) {
      currentQuiz = myQuestions8;
    } else if (assessmentNumber === 9) {
      currentQuiz = myQuestions9;
    } else {
      console.error("Array not found for assessment number", assessmentNumber);
      return;
    }

    console.log("Current quiz:", currentQuiz); // Debug statement

    // Check if quizContainer is available before calling buildQuiz
    if (quizContainer) {
      buildQuiz();
    } else {
      console.error("quizContainer not found");
    }
  }

  // Event listener for the submit button
  submitButton.addEventListener("click", showResults);

  // Call loadQuiz when the page loads
  window.addEventListener("load", loadQuiz);
})();

myQuestions1.forEach(async (questionData) => {
  const quizQuestion = new Quiz(questionData);
  try {
    await quizQuestion.save();
    console.log(`Question saved successfully: ${questionData.question}`);
  } catch (error) {
    console.error(`Error saving question: ${error.message}`);
  }
});
