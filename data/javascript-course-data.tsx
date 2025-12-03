export const courseData = {
  modules: [
    {
      title: "JavaScript Fundamentals",
      videoUrl: "https://www.youtube.com/embed/xwKbtUP87Dk",
      videoDescription:
        "Introduction to JavaScript - Learn variables, data types, operators, and control flow structures that form the foundation of JavaScript programming.",
      lessons: [
        {
          title: "Introduction to JavaScript",
          description: "Understanding JavaScript, its history, and role in modern web development",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">What is JavaScript?</h2>
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 p-6 rounded-lg mb-4">
                  <p className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                    🚀 JavaScript is a versatile programming language that powers interactive web applications.
                  </p>
                </div>
                <p className="leading-relaxed mb-4">
                  JavaScript runs in web browsers and allows you to make web pages interactive. From form validation to
                  real-time updates, animations to complex applications - JavaScript makes it all possible. It's also
                  used on servers (Node.js), mobile apps, and desktop applications.
                </p>

                {/* Use case cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {[
                    { title: "Client-side scripting", desc: "in browsers" },
                    { title: "Server-side development", desc: "with Node.js" },
                    { title: "Mobile app development", desc: "with React Native" },
                    { title: "Desktop applications", desc: "with Electron" },
                  ].map((item, i) => (
                    <div key={i} className="bg-muted p-4 rounded-lg border">
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="inline-block w-1 h-6 bg-primary rounded-full"></span>
                  Setting Up Your Environment
                </h3>
                <p className="mb-4">To start coding JavaScript, you need:</p>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto border border-border">
                  <pre>
                    <code className="text-sm font-mono">{`// A text editor (VS Code, Sublime, etc.)
// A web browser (Chrome, Firefox, Safari, Edge)
// Console for testing (F12 or Ctrl+Shift+I)

console.log("Hello, JavaScript!");`}</code>
                  </pre>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-block bg-yellow-100 dark:bg-yellow-900/20 text-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-medium">
                    Download VS Code
                  </span>
                  <span className="inline-block bg-green-100 dark:bg-green-900/20 text-green-900 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium">
                    Browser Console
                  </span>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="inline-block w-1 h-6 bg-secondary rounded-full"></span>
                  Your First Program
                </h3>
                <p className="mb-4">Writing your first JavaScript program:</p>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto border border-border">
                  <pre>
                    <code className="text-sm font-mono">{`const greeting = "Hello, World!";
console.log(greeting);

// Output: Hello, World!`}</code>
                  </pre>
                </div>
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg">
                  <p className="text-sm text-green-900 dark:text-green-200">
                    <strong>✓ Success!</strong> You just wrote your first JavaScript program.
                  </p>
                </div>
              </section>
            </div>
          ),
        },
        {
          title: "Variables and Data Types",
          description: "Learn about var, let, const, and different data types",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Variables</h2>
                <p className="leading-relaxed mb-4">
                  Variables are containers for storing data values. JavaScript has three ways to declare variables:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// var - function scoped (avoid in modern code)
var name = "John";

// let - block scoped (preferred for variables)
let age = 25;

// const - block scoped, cannot be reassigned (preferred for constants)
const country = "USA";`}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Data Types</h3>
                <p className="mb-4">JavaScript has several primitive data types:</p>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// String
const message = "Hello";

// Number
const count = 42;
const price = 19.99;

// Boolean
const isActive = true;

// Null
let empty = null;

// Undefined
let notAssigned;

// Symbol
const id = Symbol("unique");

// BigInt
const largeNumber = 9007199254740991n;`}</code>
                  </pre>
                </div>
              </section>
            </div>
          ),
        },
        {
          title: "Operators and Expressions",
          description: "Master arithmetic, logical, and comparison operators",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Types of Operators</h2>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Arithmetic Operators
console.log(10 + 5);  // 15
console.log(10 - 5);  // 5
console.log(10 * 5);  // 50
console.log(10 / 5);  // 2
console.log(10 % 3);  // 1

// Comparison Operators
console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict equality)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// Logical Operators
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false`}</code>
                  </pre>
                </div>
              </section>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What does JavaScript primarily run on?",
          options: ["Web browsers", "Only servers", "Mobile devices only", "All of the above"],
          correct: 0,
        },
        {
          question: "Which keyword should be used for constants?",
          options: ["var", "let", "const", "static"],
          correct: 2,
        },
        {
          question: "What is the difference between == and ===?",
          options: ["No difference", "=== checks type", "== is faster", "=== is for strings only"],
          correct: 1,
        },
      ],
    },
    {
      title: "Functions and Scope",
      videoUrl: "https://www.youtube.com/embed/TkFN6e9ZDMw",
      videoDescription:
        "Deep dive into functions, arrow functions, closures, and JavaScript scope - essential concepts for writing clean, reusable code.",
      lessons: [
        {
          title: "Declaring Functions",
          description: "Learn function declaration, expression, and arrow functions",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Function Declaration</h2>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Traditional function declaration
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Alice")); // Hello, Alice`}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Function Expression</h3>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Function expression
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // 8`}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Arrow Functions</h3>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Arrow function (ES6+)
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20

// Single parameter
const square = x => x * x;

// No parameters
const random = () => Math.random();`}</code>
                  </pre>
                </div>
              </section>
            </div>
          ),
        },
        {
          title: "Scope and Closures",
          description: "Understanding local, global scope, and closures",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">JavaScript Scope</h2>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Global scope
const globalVar = "I'm global";

function test() {
  // Local scope
  const localVar = "I'm local";
  console.log(globalVar); // Can access global
  console.log(localVar);  // Can access local
}

console.log(globalVar);  // Works
console.log(localVar);   // Error: not defined`}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Closures</h3>
                <p className="mb-4">
                  A closure is a function that has access to variables from another function's scope:
                </p>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`function makeCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2`}</code>
                  </pre>
                </div>
              </section>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "Which function syntax is the most concise?",
          options: ["Function declaration", "Function expression", "Arrow function", "All are equal"],
          correct: 2,
        },
        {
          question: "What is a closure?",
          options: [
            "A function that closes",
            "A function accessing outer scope variables",
            "A loop terminator",
            "A JavaScript keyword",
          ],
          correct: 1,
        },
      ],
    },
    {
      title: "Objects and Arrays",
      videoUrl: "https://www.youtube.com/embed/uPSPCX7yxV8",
      videoDescription:
        "Master working with JavaScript objects and arrays - the most important data structures for organizing and manipulating data.",
      lessons: [
        {
          title: "Working with Objects",
          description: "Create, access, and manipulate objects",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Creating Objects</h2>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Object literal
const person = {
  name: "John",
  age: 30,
  city: "New York",
  greet: function() {
    return "Hello, " + this.name;
  }
};

console.log(person.name);        // John
console.log(person["age"]);      // 30
console.log(person.greet());     // Hello, John`}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Modifying Objects</h3>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Add property
person.email = "john@example.com";

// Modify property
person.age = 31;

// Delete property
delete person.city;

// Check if property exists
console.log("name" in person);  // true`}</code>
                  </pre>
                </div>
              </section>
            </div>
          ),
        },
        {
          title: "Working with Arrays",
          description: "Create and manipulate arrays with methods",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Array Basics</h2>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Creating arrays
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, null];

// Accessing elements
console.log(numbers[0]);    // 1
console.log(numbers.length); // 5

// Adding elements
numbers.push(6);            // Add at end
numbers.unshift(0);         // Add at start

// Removing elements
numbers.pop();              // Remove from end
numbers.shift();            // Remove from start`}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Array Methods</h3>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`const arr = [1, 2, 3, 4, 5];

// Map: transform each element
const doubled = arr.map(x => x * 2);

// Filter: keep elements that match
const evens = arr.filter(x => x % 2 === 0);

// Reduce: combine all elements
const sum = arr.reduce((total, x) => total + x, 0);

// Find: get first element that matches
const found = arr.find(x => x > 3);

// Includes: check if element exists
console.log(arr.includes(3)); // true`}</code>
                  </pre>
                </div>
              </section>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "How do you access an object property?",
          options: ["obj-name", "obj.name or obj['name']", "obj->name", "obj:name"],
          correct: 1,
        },
        {
          question: "Which array method returns a new array?",
          options: ["push", "map", "slice and map", "Both slice and map"],
          correct: 3,
        },
      ],
    },
    {
      title: "DOM Manipulation",
      videoUrl: "https://www.youtube.com/embed/NO5kUNxGIu0",
      videoDescription:
        "Learn how to interact with HTML elements using the DOM - selecting elements, modifying content, handling events, and creating dynamic web pages.",
      lessons: [
        {
          title: "Selecting DOM Elements",
          description: "Query and select HTML elements with JavaScript",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">DOM Selectors</h2>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Select by ID
const element = document.getElementById("myId");

// Select by class name
const elements = document.getElementsByClassName("myClass");

// Select by tag name
const divs = document.getElementsByTagName("div");

// Modern selectors (CSS selectors)
const first = document.querySelector(".myClass"); // First match
const all = document.querySelectorAll(".myClass"); // All matches`}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Modifying Content</h3>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`const element = document.getElementById("myElement");

// Change text content
element.textContent = "New text";

// Change HTML content
element.innerHTML = "<strong>Bold text</strong>";

// Change attributes
element.setAttribute("class", "new-class");
element.id = "newId";

// Change styles
element.style.color = "red";
element.style.fontSize = "20px";`}</code>
                  </pre>
                </div>
              </section>
            </div>
          ),
        },
        {
          title: "Event Handling",
          description: "Respond to user interactions with events",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Adding Event Listeners</h2>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`const button = document.getElementById("myButton");

// Click event
button.addEventListener("click", function() {
  console.log("Button clicked!");
});

// Alternative: Arrow function
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Other common events
element.addEventListener("input", handleInput);
element.addEventListener("change", handleChange);
element.addEventListener("mouseover", handleHover);
element.addEventListener("keypress", handleKeypress);`}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Event Object</h3>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`button.addEventListener("click", (event) => {
  console.log(event.target);      // Element clicked
  console.log(event.type);        // Event type
  console.log(event.timeStamp);   // When it happened
  
  // Prevent default behavior
  event.preventDefault();
  
  // Stop event propagation
  event.stopPropagation();
});`}</code>
                  </pre>
                </div>
              </section>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "Which method selects all elements matching a selector?",
          options: ["getElementById", "querySelector", "querySelectorAll", "getElementsByClass"],
          correct: 2,
        },
        {
          question: "How do you add an event listener?",
          options: [
            "on click='function()'",
            "addEventListener('click', function)",
            "listen('click')",
            "on('click', function)",
          ],
          correct: 1,
        },
      ],
    },
    {
      title: "Asynchronous JavaScript",
      videoUrl: "https://www.youtube.com/embed/qRW_n6tSccU",
      videoDescription:
        "Master async/await, promises, and callbacks - essential for handling asynchronous operations like API calls and timers.",
      lessons: [
        {
          title: "Callbacks and Promises",
          description: "Understand callbacks and promise-based asynchronous code",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Callbacks</h2>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Callback function
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData((data) => {
  console.log(data); // Data loaded (after 1 second)
});`}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Promises</h3>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Creating a promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

// Using a promise
promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Done"));`}</code>
                  </pre>
                </div>
              </section>
            </div>
          ),
        },
        {
          title: "Async/Await",
          description: "Write asynchronous code that looks synchronous",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Async/Await Syntax</h2>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Async function
async function getUser() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Calling async function
getUser();`}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Error Handling</h3>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`async function fetchAPI() {
  try {
    const response = await fetch('/api/data');
    
    if (!response.ok) {
      throw new Error('API error');
    }
    
    return await response.json();
  } catch (error) {
    console.error("Failed:", error.message);
  } finally {
    console.log("Request finished");
  }
}`}</code>
                  </pre>
                </div>
              </section>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What does a Promise represent?",
          options: [
            "A completed value",
            "An eventual result of async operation",
            "A function that runs later",
            "A callback function",
          ],
          correct: 1,
        },
        {
          question: "What keyword pauses async function execution?",
          options: ["pause", "wait", "await", "hold"],
          correct: 2,
        },
      ],
    },
    {
      title: "ES6+ Features",
      videoUrl: "https://www.youtube.com/embed/WZQc7RUAg18",
      videoDescription:
        "Modern JavaScript features - destructuring, template literals, classes, modules, and more advanced ES6+ concepts.",
      lessons: [
        {
          title: "Destructuring and Spread",
          description: "Extract values and spread elements with modern syntax",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Destructuring</h2>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Array destructuring
const [first, second] = [1, 2, 3];
console.log(first);  // 1
console.log(second); // 2

// Object destructuring
const { name, age } = { name: "John", age: 30 };
console.log(name); // John

// Renaming
const { name: personName } = person;

// Default values
const [a = 10] = [];
console.log(a); // 10`}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Spread Operator</h3>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Array spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// Function arguments
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10`}</code>
                  </pre>
                </div>
              </section>
            </div>
          ),
        },
        {
          title: "Classes and Modules",
          description: "Object-oriented programming with classes and organizing code",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">ES6 Classes</h2>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return "Hello, " + this.name;
  }
}

// Creating instances
const person1 = new Person("John", 30);
console.log(person1.greet()); // Hello, John`}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Inheritance</h3>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks");
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks`}</code>
                  </pre>
                </div>
              </section>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What does destructuring allow?",
          options: [
            "Breaking objects",
            "Extract values from arrays/objects",
            "Destroying variables",
            "Deleting properties",
          ],
          correct: 1,
        },
        {
          question: "What does the spread operator (...) do?",
          options: [
            "Spreads code over multiple lines",
            "Duplicates an array",
            "Unpacks elements into individual elements",
            "Joins arrays together",
          ],
          correct: 2,
        },
      ],
    },
    {
      title: "JavaScript Best Practices",
      videoUrl: "https://www.youtube.com/embed/8SbJzqF3Xyw",
      videoDescription:
        "Learn debugging techniques, performance optimization, testing strategies, and best practices for writing professional-grade JavaScript.",
      lessons: [
        {
          title: "Debugging and Testing",
          description: "Debug code effectively and write tests",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Debugging Techniques</h2>
                <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Console methods
console.log("Standard output");
console.error("Error message");
console.warn("Warning message");
console.table([{name: "John", age: 30}]);

// Browser debugger
debugger;  // Pauses execution here

// Try-catch for error handling
try {
  riskyFunction();
} catch (error) {
  console.error("Caught error:", error.message);
}`}</code>
                  </pre>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Performance Tips</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Cache DOM selections to avoid repeated queries</li>
                  <li>Use event delegation for multiple similar elements</li>
                  <li>Minimize reflows and repaints</li>
                  <li>Use requestAnimationFrame for animations</li>
                  <li>Avoid deep nesting of callbacks</li>
                  <li>Code split and lazy load modules</li>
                </ul>
              </section>
            </div>
          ),
        },
        {
          title: "Code Organization",
          description: "Write maintainable, organized JavaScript code",
          content: (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-primary">Best Practices</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  <li>Use meaningful variable and function names</li>
                  <li>Keep functions small and focused</li>
                  <li>Follow DRY (Don't Repeat Yourself) principle</li>
                  <li>Use const by default, let when needed</li>
                  <li>Avoid global variables</li>
                  <li>Write comments for complex logic</li>
                  <li>Use version control (Git)</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Code Example</h3>
                <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <pre>
                    <code className="text-sm font-mono">{`// Good: Clear structure
const calculateTotal = (items) => {
  return items.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0);
};

// Good: Descriptive naming
const getUserProfile = async (userId) => {
  const response = await fetch(\`/api/users/\${userId}\`);
  return await response.json();
};`}</code>
                  </pre>
                </div>
              </section>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "Which console method shows structured data?",
          options: ["console.log", "console.table", "console.display", "console.show"],
          correct: 1,
        },
        {
          question: "What should you prefer by default?",
          options: ["var", "let", "const", "All are equal"],
          correct: 2,
        },
      ],
    },
  ],
}
