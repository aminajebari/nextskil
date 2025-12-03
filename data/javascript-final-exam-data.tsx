export const finalExamQuestions = [
  // Module 1: Fundamentals (8 questions)
  {
    question: "What does JavaScript stand for?",
    options: ["Java Syntax", "Just Scripting", "JavaScript is a language", "None of the above"],
    correct: 2,
  },
  {
    question: "Which keyword creates a constant variable?",
    options: ["var", "let", "const", "static"],
    correct: 2,
  },
  {
    question: "What will console.log(typeof null) return?",
    options: ["null", "undefined", "object", "NullType"],
    correct: 2,
  },
  {
    question: "Which comparison checks both value and type?",
    options: ["==", "===", "!=", "~="],
    correct: 1,
  },
  {
    question: "What is the result of '5' + 3?",
    options: ["8", "2", "'53'", "undefined"],
    correct: 2,
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["add", "push", "insert", "append"],
    correct: 1,
  },
  {
    question: "What does the filter() method return?",
    options: [
      "A modified original array",
      "A new array with filtered elements",
      "A boolean value",
      "The filtered element",
    ],
    correct: 1,
  },
  {
    question: "How do you declare an arrow function?",
    options: ["function arrow() {}", "const arrow = () => {}", "arrow => {}", "const => arrow()"],
    correct: 1,
  },

  // Module 2: Functions & Scope (9 questions)
  {
    question: "What is hoisting?",
    options: [
      "Moving elements up",
      "Functions/variables moved to top before execution",
      "A CSS property",
      "An error type",
    ],
    correct: 1,
  },
  {
    question: "What does 'this' refer to in an arrow function?",
    options: ["The arrow function itself", "The window object", "The enclosing scope context", "undefined"],
    correct: 2,
  },
  {
    question: "How do you call a function with default parameters?",
    options: ["function test(a=5) {}", "function test(a: 5) {}", "function test(a[5]) {}", "function test(a~5) {}"],
    correct: 0,
  },
  {
    question: "What is a rest parameter?",
    options: [
      "Parameters that rest the function",
      "Extra parameters captured as an array (...args)",
      "Parameters that pause execution",
      "Optional parameters",
    ],
    correct: 1,
  },
  {
    question: "Can arrow functions be used as constructors?",
    options: ["Yes", "No", "Only with 'new' keyword", "Sometimes"],
    correct: 1,
  },
  {
    question: "What does the spread operator do in function calls?",
    options: [
      "Spreads code over lines",
      "Unpacks array elements as arguments",
      "Creates multiple functions",
      "Duplicates arguments",
    ],
    correct: 1,
  },
  {
    question: "What is callback hell?",
    options: [
      "Functions that fail",
      "Deeply nested callbacks causing readability issues",
      "An error in callbacks",
      "Returning callbacks",
    ],
    correct: 1,
  },
  {
    question: "How do you return multiple values from a function?",
    options: ["Use multiple return statements", "Return an array or object", "Use separate functions", "Not possible"],
    correct: 1,
  },
  {
    question: "What is a closure?",
    options: [
      "A function that closes the application",
      "A function accessing outer scope variables",
      "A loop that ends",
      "A type of error",
    ],
    correct: 1,
  },

  // Module 3: Objects & Arrays (10 questions)
  {
    question: "How do you create an object?",
    options: ["const obj = []", "const obj = {}", "const obj = ()", "const obj = <>"],
    correct: 1,
  },
  {
    question: "What is the difference between array and object?",
    options: [
      "No difference",
      "Arrays use indices, objects use keys",
      "Objects are faster",
      "Arrays can't hold objects",
    ],
    correct: 1,
  },
  {
    question: "How do you check if a property exists in an object?",
    options: ["'key' in obj", "obj.hasOwnProperty('key')", "Both are valid", "obj['key'] !== undefined"],
    correct: 2,
  },
  {
    question: "What does Object.keys() return?",
    options: ["An object with keys", "An array of the object's keys", "The values of an object", "A new object"],
    correct: 1,
  },
  {
    question: "What is array destructuring used for?",
    options: [
      "Destroying arrays",
      "Extracting values from arrays into variables",
      "Breaking arrays into pieces",
      "Organizing array elements",
    ],
    correct: 1,
  },
  {
    question: "What does map() do?",
    options: [
      "Creates a visual map",
      "Transforms each element and returns new array",
      "Finds elements",
      "Filters elements",
    ],
    correct: 1,
  },
  {
    question: "What does reduce() return?",
    options: ["A smaller array", "A single accumulated value", "The reduced element", "An object"],
    correct: 1,
  },
  {
    question: "How do you clone an object?",
    options: ["const clone = obj", "const clone = {...obj}", "const clone = Object.clone(obj)", "Not possible"],
    correct: 1,
  },
  {
    question: "What is the difference between slice and splice?",
    options: [
      "No difference",
      "slice returns new array, splice modifies original",
      "splice is faster",
      "Both modify the original",
    ],
    correct: 1,
  },
  {
    question: "How do you merge two arrays?",
    options: ["arr1.add(arr2)", "arr1.concat(arr2) or [...arr1, ...arr2]", "merge(arr1, arr2)", "arr1 + arr2"],
    correct: 1,
  },

  // Module 4: DOM (8 questions)
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Markup", "Display Object Mode", "Dynamic Object Manipulation"],
    correct: 0,
  },
  {
    question: "How do you select an element by ID?",
    options: [
      "document.selectID('id')",
      "document.getElementById('id')",
      "document.select('#id')",
      "document.find('id')",
    ],
    correct: 1,
  },
  {
    question: "What does querySelector return?",
    options: ["An array of elements", "The first matching element", "All matching elements", "A query object"],
    correct: 1,
  },
  {
    question: "What is the difference between textContent and innerHTML?",
    options: [
      "No difference",
      "textContent ignores HTML, innerHTML parses it",
      "innerHTML is safer",
      "textContent is faster always",
    ],
    correct: 1,
  },
  {
    question: "How do you add an event listener?",
    options: [
      "element.listen('event', callback)",
      "element.addEventListener('event', callback)",
      "element.on('event', callback)",
      "element.event = callback",
    ],
    correct: 1,
  },
  {
    question: "What does event.preventDefault() do?",
    options: ["Stops the event from firing", "Prevents default behavior", "Removes the event", "Clones the event"],
    correct: 1,
  },
  {
    question: "How do you create a new element?",
    options: ["new Element()", "document.createElement('tag')", "document.create('tag')", "Element('tag')"],
    correct: 1,
  },
  {
    question: "What is event delegation?",
    options: [
      "Delegating events to other functions",
      "Adding listeners to parent for child events",
      "Removing events from children",
      "Creating event copies",
    ],
    correct: 1,
  },

  // Module 5: Async (9 questions)
  {
    question: "What is a Promise?",
    options: [
      "A guaranteed return value",
      "An eventual result of async operation",
      "A pending function",
      "A callback holder",
    ],
    correct: 1,
  },
  {
    question: "What are the three states of a Promise?",
    options: ["true, false, null", "pending, resolved, rejected", "wait, done, error", "start, middle, end"],
    correct: 1,
  },
  {
    question: "How do you handle promise rejection?",
    options: [".then(reject) only", ".catch() method", ".error() handler", ".fail()"],
    correct: 1,
  },
  {
    question: "What does async/await do?",
    options: [
      "Makes code run asynchronously",
      "Allows synchronous-style async code",
      "Waits for all promises",
      "Async functions only",
    ],
    correct: 1,
  },
  {
    question: "Can you use await outside async function?",
    options: ["Yes", "No", "Only in modules", "Depends on browser"],
    correct: 1,
  },
  {
    question: "What does Promise.all() do?",
    options: [
      "Runs promises in sequence",
      "Waits for all promises to resolve",
      "Runs first promise only",
      "Combines promise values",
    ],
    correct: 1,
  },
  {
    question: "What is the difference between then and await?",
    options: ["No difference", "await is syntax sugar for then", "then is better", "await doesn't work with promises"],
    correct: 1,
  },
  {
    question: "How do you handle errors with async/await?",
    options: [".catch() only", "try/catch blocks", ".error() handlers", "Not possible"],
    correct: 1,
  },
  {
    question: "What does fetch() return?",
    options: ["Data directly", "A Promise that resolves to Response", "A callback function", "An array"],
    correct: 1,
  },

  // Module 6: ES6+ & Best Practices (8 questions)
  {
    question: "What is destructuring?",
    options: ["Breaking objects apart", "Extracting values from arrays/objects", "Destroying data", "Rearranging code"],
    correct: 1,
  },
  {
    question: "What does the spread operator do?",
    options: ["Spreads code visually", "Unpacks elements", "Copies arrays", "Joins values"],
    correct: 1,
  },
  {
    question: "What is a template literal?",
    options: [
      "A template for literals",
      "String using backticks with ${} for variables",
      "A literal template",
      "A type of array",
    ],
    correct: 1,
  },
  {
    question: "What advantage do classes provide?",
    options: ["Better performance", "Cleaner OOP syntax and inheritance", "Smaller file size", "No real advantage"],
    correct: 1,
  },
  {
    question: "What does 'use strict' do?",
    options: ["Makes code faster", "Enforces stricter parsing and error handling", "Requires strict types", "Nothing"],
    correct: 1,
  },
  {
    question: "What is a module in JavaScript?",
    options: ["A type of variable", "Reusable file exporting/importing code", "A framework", "A library"],
    correct: 1,
  },
  {
    question: "What is debouncing?",
    options: ["Removing bugs", "Delaying function execution after events stop", "Bouncing elements", "Debugging code"],
    correct: 1,
  },
  {
    question: "What is memoization?",
    options: ["Remembering things", "Caching function results", "Memory optimization", "Function naming"],
    correct: 1,
  },
]
