export interface ExamQuestion {
  question: string
  options: string[]
  correctAnswer: string
  category: string
  code?: string
}

export const exampleExamQuestions: ExamQuestion[] = [
  // Fundamentals (8 questions)
  {
    category: "Fundamentals",
    question: "What does the 'let' keyword do?",
    options: [
      "Declares a global variable",
      "Declares a block-scoped variable",
      "Creates a constant",
      "Allows function declaration",
    ],
    correctAnswer: "Declares a block-scoped variable",
  },
  {
    category: "Fundamentals",
    question: "What is the result of typeof undefined?",
    options: ["'null'", "'undefined'", "'unknown'", "undefined"],
    correctAnswer: "'undefined'",
  },
  {
    category: "Fundamentals",
    question: "What will '0 == false' return?",
    options: ["true", "false", "undefined", "error"],
    correctAnswer: "true",
  },
  {
    category: "Fundamentals",
    question: "What will '0 === false' return?",
    options: ["true", "false", "undefined", "error"],
    correctAnswer: "false",
  },
  {
    category: "Fundamentals",
    question: "What is the difference between var and let?",
    options: ["No difference", "var is function-scoped, let is block-scoped", "let is older", "var is better"],
    correctAnswer: "var is function-scoped, let is block-scoped",
  },
  {
    category: "Fundamentals",
    question: "What does const prevent?",
    options: ["Variable declaration", "Reassignment of the variable", "Function calls", "Object access"],
    correctAnswer: "Reassignment of the variable",
  },
  {
    category: "Fundamentals",
    question: "What is the typeof an empty array?",
    options: ["'array'", "'object'", "'null'", "'undefined'"],
    correctAnswer: "'object'",
  },
  {
    category: "Fundamentals",
    question: "What will 'typeof NaN' return?",
    options: ["'NaN'", "'null'", "'number'", "'undefined'"],
    correctAnswer: "'number'",
  },

  // String Methods (6 questions)
  {
    category: "String Methods",
    question: "What does 'hello'.toUpperCase() return?",
    options: ["'hello'", "'HELLO'", "'Hello'", "error"],
    correctAnswer: "'HELLO'",
  },
  {
    category: "String Methods",
    question: "What does 'HELLO'.toLowerCase() return?",
    options: ["'hello'", "'HELLO'", "'Hello'", "undefined"],
    correctAnswer: "'hello'",
  },
  {
    category: "String Methods",
    question: "What does 'javascript'.length return?",
    options: ["9", "10", "javascript", "undefined"],
    correctAnswer: "10",
  },
  {
    category: "String Methods",
    question: "What does 'hello'.indexOf('l') return?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2",
  },
  {
    category: "String Methods",
    question: "What does 'hello world'.split(' ') return?",
    options: ["['hello world']", "['hello', 'world']", "'hello world'", "undefined"],
    correctAnswer: "['hello', 'world']",
  },
  {
    category: "String Methods",
    question: "What does 'hello'.includes('ell') return?",
    options: ["true", "false", "1", "'ell'"],
    correctAnswer: "true",
  },

  // Array Methods (8 questions)
  {
    category: "Array Methods",
    question: "What does [1,2,3].includes(2) return?",
    options: ["true", "false", "1", "2"],
    correctAnswer: "true",
  },
  {
    category: "Array Methods",
    question: "What does [1,2,3].indexOf(2) return?",
    options: ["0", "1", "2", "-1"],
    correctAnswer: "1",
  },
  {
    category: "Array Methods",
    question: "What does [1,2,3].join('-') return?",
    options: ["'1-2-3'", "[1,2,3]", "1-2-3", "undefined"],
    correctAnswer: "'1-2-3'",
  },
  {
    category: "Array Methods",
    question: "What does [1,[2,3]].flat() return?",
    options: ["[1,2,3]", "[[1,[2,3]]]", "[1,[2,3]]", "error"],
    correctAnswer: "[1,2,3]",
  },
  {
    category: "Array Methods",
    question: "What does [1,2,3].reverse() do?",
    options: ["Returns new reversed array", "Reverses original array", "Returns a copy", "Creates a backup"],
    correctAnswer: "Reverses original array",
  },
  {
    category: "Array Methods",
    question: "What does [1,2,3].slice(1, 2) return?",
    options: ["[1]", "[2]", "[3]", "[1,2]"],
    correctAnswer: "[2]",
  },
  {
    category: "Array Methods",
    question: "What does [1,2,3].forEach() do?",
    options: ["Creates new array", "Executes function for each element", "Filters array", "Returns single value"],
    correctAnswer: "Executes function for each element",
  },
  {
    category: "Array Methods",
    question: "What does [1,2,3].some(x => x > 2) return?",
    options: ["true", "false", "[3]", "3"],
    correctAnswer: "true",
  },

  // Objects (6 questions)
  {
    category: "Objects",
    question: "How do you access nested object properties?",
    options: ["obj.prop1.prop2", "obj['prop1']['prop2']", "Both methods work", "obj->prop1->prop2"],
    correctAnswer: "Both methods work",
  },
  {
    category: "Objects",
    question: "What does Object.keys({a:1, b:2}) return?",
    options: ["[1, 2]", "['a', 'b']", "{'a', 'b'}", "undefined"],
    correctAnswer: "['a', 'b']",
  },
  {
    category: "Objects",
    question: "What does Object.values({a:1, b:2}) return?",
    options: ["['a', 'b']", "[1, 2]", "{1, 2}", "undefined"],
    correctAnswer: "[1, 2]",
  },
  {
    category: "Objects",
    question: "What does Object.entries({a:1, b:2}) return?",
    options: ["[['a',1], ['b',2]]", "['a', 'b']", "[1, 2]", "undefined"],
    correctAnswer: "[['a',1], ['b',2]]",
  },
  {
    category: "Objects",
    question: "What does 'name' in {name: 'John'} return?",
    options: ["'John'", "true", "false", "error"],
    correctAnswer: "true",
  },
  {
    category: "Objects",
    question: "How do you clone an object?",
    options: ["const clone = obj", "const clone = {...obj}", "const clone = Object.clone(obj)", "Not possible"],
    correctAnswer: "const clone = {...obj}",
  },

  // Functions (8 questions)
  {
    category: "Functions",
    question: "What is the output of this code?",
    code: "const add = (a, b) => a + b;\nconsole.log(add(2, 3));",
    options: ["'2 + 3'", "5", "'5'", "error"],
    correctAnswer: "5",
  },
  {
    category: "Functions",
    question: "What does a default parameter do?",
    options: [
      "Makes parameter optional",
      "Sets default value if not provided",
      "Makes function optional",
      "Prevents errors",
    ],
    correctAnswer: "Sets default value if not provided",
  },
  {
    category: "Functions",
    question: "What does the rest parameter (...args) do?",
    options: [
      "Allows function to rest",
      "Collects arguments into an array",
      "Prevents extra arguments",
      "Creates optional parameters",
    ],
    correctAnswer: "Collects arguments into an array",
  },
  {
    category: "Functions",
    question: "Can arrow functions be used as constructors?",
    options: ["Yes, always", "No", "Only with 'new' keyword", "Sometimes"],
    correctAnswer: "No",
  },
  {
    category: "Functions",
    question: "What is a pure function?",
    options: [
      "A function that cleans data",
      "Function with no side effects, same input = same output",
      "A function that returns pure values",
      "A first-class function",
    ],
    correctAnswer: "Function with no side effects, same input = same output",
  },
  {
    category: "Functions",
    question: "What does the spread operator do in function calls?",
    options: [
      "Spreads code over lines",
      "Unpacks array elements as arguments",
      "Creates multiple functions",
      "Duplicates arguments",
    ],
    correctAnswer: "Unpacks array elements as arguments",
  },
  {
    category: "Functions",
    question: "What is a higher-order function?",
    options: [
      "A function that runs first",
      "Takes functions as arguments or returns functions",
      "A function with high complexity",
      "A function that returns numbers",
    ],
    correctAnswer: "Takes functions as arguments or returns functions",
  },
  {
    category: "Functions",
    question: "What is function composition?",
    options: [
      "Combining functions to create new functions",
      "Writing multiple functions",
      "Composing code manually",
      "Organizing functions",
    ],
    correctAnswer: "Combining functions to create new functions",
  },

  // Scope (4 questions)
  {
    category: "Scope",
    question: "What will this output?",
    code: "let x = 5;\nif (true) { let x = 10; }\nconsole.log(x);",
    options: ["5", "10", "undefined", "error"],
    correctAnswer: "5",
  },
  {
    category: "Scope",
    question: "What is a closure?",
    options: [
      "A function that closes the application",
      "A function accessing outer scope variables",
      "A loop that ends",
      "A type of error",
    ],
    correctAnswer: "A function accessing outer scope variables",
  },
  {
    category: "Scope",
    question: "What is hoisting?",
    options: [
      "Moving elements up",
      "Functions/variables moved to top before execution",
      "A CSS property",
      "An error type",
    ],
    correctAnswer: "Functions/variables moved to top before execution",
  },
  {
    category: "Scope",
    question: "What does 'this' refer to in a regular function?",
    options: ["The function itself", "The global object or calling object", "The parent object", "undefined"],
    correctAnswer: "The global object or calling object",
  },

  // Callbacks & Promises (4 questions)
  {
    category: "Callbacks",
    question: "What is a callback function?",
    options: [
      "A function that calls another function",
      "A function passed to another function to be called later",
      "A function that returns a value",
      "A function that has no parameters",
    ],
    correctAnswer: "A function passed to another function to be called later",
  },
  {
    category: "Promises",
    question: "What state indicates a promise is completed?",
    options: ["pending", "fulfilled", "rejected", "finished"],
    correctAnswer: "fulfilled",
  },
  {
    category: "Promises",
    question: "What does Promise.all() do?",
    options: [
      "Runs promises in sequence",
      "Waits for all promises to resolve",
      "Runs first promise only",
      "Combines promise values",
    ],
    correctAnswer: "Waits for all promises to resolve",
  },
  {
    category: "Promises",
    question: "What is callback hell?",
    options: [
      "Functions that fail",
      "Deeply nested callbacks causing readability issues",
      "An error in callbacks",
      "Returning callbacks",
    ],
    correctAnswer: "Deeply nested callbacks causing readability issues",
  },

  // Async/Await (3 questions)
  {
    category: "Async/Await",
    question: "What does await do?",
    options: [
      "Waits for user input",
      "Pauses execution until promise settles",
      "Delays execution",
      "Cancels execution",
    ],
    correctAnswer: "Pauses execution until promise settles",
  },
  {
    category: "Async/Await",
    question: "Can you use await outside an async function?",
    options: ["Yes, always", "No", "Only in modules", "Depends on context"],
    correctAnswer: "No",
  },
  {
    category: "Async/Await",
    question: "How do you handle errors with async/await?",
    options: [".catch() only", "try/catch blocks", ".error() handlers", "Not possible"],
    correctAnswer: "try/catch blocks",
  },

  // DOM (3 questions)
  {
    category: "DOM",
    question: "Which method selects an element by class?",
    options: ["getElementById", "getElementByClass", "querySelector", "selectByClass"],
    correctAnswer: "querySelector",
  },
  {
    category: "Events",
    question: "How do you prevent default link behavior?",
    options: ["return false;", "event.preventDefault();", "stopEvent();", "Both return false and preventDefault"],
    correctAnswer: "event.preventDefault();",
  },
  {
    category: "DOM",
    question: "What does textContent do?",
    options: ["Gets all text", "Sets HTML content", "Gets/sets plain text without parsing HTML", "Removes text"],
    correctAnswer: "Gets/sets plain text without parsing HTML",
  },

  // ES6+ (3 questions)
  {
    category: "Classes",
    question: "What does 'new' keyword do with classes?",
    options: [
      "Creates a new class",
      "Creates a new instance of a class",
      "Declares a new variable",
      "Creates a new method",
    ],
    correctAnswer: "Creates a new instance of a class",
  },
  {
    category: "ES6+",
    question: "What is template literals?",
    options: [
      "A template for literals",
      "String using backticks with ${} for variables",
      "A type of array",
      "A template engine",
    ],
    correctAnswer: "String using backticks with ${} for variables",
  },
  {
    category: "ES6+",
    question: "What does the spread operator (...) unpack?",
    options: ["Strings only", "Arrays and objects", "Functions only", "Nothing"],
    correctAnswer: "Arrays and objects",
  },
]
