export const javascriptCourseData = {
  modules: [
    {
      title: "JavaScript Fundamentals",
      videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
      videoDescription: "Learn JavaScript basics including syntax, variables, and data types.",
      lessons: [
        {
          title: "Introduction to JavaScript",
          description: "Understanding what JavaScript is and its role in web development",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/javascript-programming-language-web-development.jpg"
                  alt="JavaScript Programming Language"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">What is JavaScript?</h2>
                <p className="leading-relaxed">
                  JavaScript is a high-level, interpreted programming language that makes web pages interactive. It's
                  one of the core technologies of the web, alongside HTML and CSS.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Why Learn JavaScript?</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Runs in all web browsers without plugins</li>
                  <li>Can be used for both frontend and backend (Node.js)</li>
                  <li>Huge ecosystem of libraries and frameworks</li>
                  <li>High demand in the job market</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">First JavaScript Program</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Display a message in the console
console.log("Hello, World!");

// Display an alert
alert("Welcome to JavaScript!");`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "Variables and Data Types",
          description: "Learn about JavaScript variables and primitive data types",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/javascript-variables-let-const-var-datatypes.jpg"
                  alt="JavaScript Variables and Data Types"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Variables in JavaScript</h2>
                <p className="leading-relaxed">
                  Variables are containers for storing data values. JavaScript has three ways to declare variables: var,
                  let, and const.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Variable Declaration</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// let - for variables that can change
let age = 25;
age = 26; // Can be reassigned

// const - for variables that shouldn't change
const name = "John";
// name = "Jane"; // Error! Cannot reassign

// var - old way (not recommended)
var city = "New York";`}</code>
                </pre>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Data Types</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>String:</strong> Text values - "Hello" or 'Hello'
                  </li>
                  <li>
                    <strong>Number:</strong> Integers and decimals - 42, 3.14
                  </li>
                  <li>
                    <strong>Boolean:</strong> true or false
                  </li>
                  <li>
                    <strong>Undefined:</strong> Variable declared but not assigned
                  </li>
                  <li>
                    <strong>Null:</strong> Intentionally empty value
                  </li>
                  <li>
                    <strong>Object:</strong> Collections of key-value pairs
                  </li>
                  <li>
                    <strong>Array:</strong> Ordered lists of values
                  </li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          title: "Operators and Expressions",
          description: "Working with JavaScript operators",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/javascript-operators-arithmetic-comparison.jpg"
                  alt="JavaScript Operators"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">JavaScript Operators</h2>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Arithmetic operators
let sum = 10 + 5;        // 15
let difference = 10 - 5; // 5
let product = 10 * 5;    // 50
let quotient = 10 / 5;   // 2
let remainder = 10 % 3;  // 1

// Comparison operators
10 === 10  // true (strict equality)
10 == "10" // true (loose equality)
10 !== 5   // true (not equal)
10 > 5     // true
10 < 5     // false

// Logical operators
true && false  // false (AND)
true || false  // true (OR)
!true          // false (NOT)`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "Which keyword declares a constant variable?",
          options: ["var", "let", "const", "constant"],
          correctAnswer: 2,
        },
        {
          question: "What is the result of: '5' + 5 in JavaScript?",
          options: ["10", "'55'", "55", "Error"],
          correctAnswer: 2,
        },
        {
          question: "Which operator checks for strict equality?",
          options: ["==", "===", "=", "!="],
          correctAnswer: 1,
        },
      ],
    },
    {
      title: "Functions and Control Flow",
      videoUrl: "https://www.youtube.com/embed/N8ap4k_1QEQ",
      videoDescription: "Master functions, conditionals, and loops in JavaScript.",
      lessons: [
        {
          title: "Functions",
          description: "Creating and using functions",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/javascript-functions-arrow-syntax.jpg"
                  alt="JavaScript Functions"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">JavaScript Functions</h2>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function (ES6)
const multiply = (a, b) => a * b;

// Calling functions
console.log(greet("John"));  // Hello, John!
console.log(add(5, 3));      // 8
console.log(multiply(4, 2)); // 8`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "Conditional Statements",
          description: "If-else and switch statements",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/javascript-conditional-if-else-switch.jpg"
                  alt="JavaScript Conditionals"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Conditionals</h2>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// If-else statement
let age = 18;

if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}

// Ternary operator
let status = age >= 18 ? "Adult" : "Minor";

// Switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
}`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "Loops",
          description: "For, while, and forEach loops",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/javascript-loops-for-while-iteration.jpg"
                  alt="JavaScript Loops"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">JavaScript Loops</h2>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// For...of loop (arrays)
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach method
fruits.forEach(fruit => {
    console.log(fruit);
});`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What is the modern way to write a function in JavaScript?",
          options: ["function myFunc()", "const myFunc = () =>", "Both A and B", "def myFunc()"],
          correctAnswer: 2,
        },
        {
          question: "Which loop executes at least once?",
          options: ["for", "while", "do-while", "forEach"],
          correctAnswer: 2,
        },
      ],
    },
    {
      title: "Arrays and Objects",
      videoUrl: "https://www.youtube.com/embed/R8rmfD9Y5-c",
      videoDescription: "Working with JavaScript arrays and objects.",
      lessons: [
        {
          title: "Arrays",
          description: "Working with JavaScript arrays",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/javascript-arrays-methods-map-filter.jpg"
                  alt="JavaScript Arrays"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">JavaScript Arrays</h2>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Creating arrays
let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 4, 5];

// Accessing elements
console.log(fruits[0]); // apple

// Array methods
fruits.push("orange");    // Add to end
fruits.pop();             // Remove from end
fruits.unshift("mango");  // Add to start
fruits.shift();           // Remove from start

// Array iteration
fruits.forEach(fruit => console.log(fruit));

// Array methods
let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);
let sum = numbers.reduce((acc, n) => acc + n, 0);`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "Objects",
          description: "Working with JavaScript objects",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/javascript-objects-key-value-properties.jpg"
                  alt="JavaScript Objects"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">JavaScript Objects</h2>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Creating objects
const person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

// Accessing properties
console.log(person.name);     // John
console.log(person["age"]);   // 30

// Adding properties
person.email = "john@example.com";

// Methods
person.greet(); // Hello, John

// Object destructuring
const { name, age } = person;
console.log(name); // John`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "Which method adds an element to the end of an array?",
          options: ["add()", "push()", "append()", "insert()"],
          correctAnswer: 1,
        },
        {
          question: "How do you access an object property?",
          options: ["object->property", "object.property", "object::property", "object[property]"],
          correctAnswer: 1,
        },
      ],
    },
  ],
}
