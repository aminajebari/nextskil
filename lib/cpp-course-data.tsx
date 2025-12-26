export const cppCourseData = {
  modules: [
    {
      title: "C++ Fundamentals",
      videoUrl: "https://www.youtube.com/embed/vLnPwxZdW4Y",
      videoDescription: "Introduction to C++ programming, syntax, and basic concepts.",
      lessons: [
        {
          title: "Introduction to C++",
          description: "Understanding C++ and its applications",
          content: (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">What is C++?</h2>
                <p className="leading-relaxed">
                  C++ is a powerful general-purpose programming language that supports object-oriented, procedural, and
                  generic programming paradigms. It's known for high performance and is widely used in system software,
                  game development, and applications requiring direct hardware access.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Object-Oriented Programming (OOP):</strong> Classes, inheritance, polymorphism
                  </li>
                  <li>
                    <strong>Low-level memory manipulation:</strong> Pointers and direct memory access
                  </li>
                  <li>
                    <strong>High performance:</strong> Compiled to machine code for maximum efficiency
                  </li>
                  <li>
                    <strong>Rich standard library (STL):</strong> Ready-to-use data structures and algorithms
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">First C++ Program</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "Variables and Data Types",
          description: "Learn about C++ variables and primitive data types",
          content: (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Variables and Data Types</h2>
                <p className="leading-relaxed">
                  Variables store data that can be used and manipulated throughout your program. In C++, every variable
                  must be declared with a specific data type.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Primitive Data Types</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>int:</strong> Integer numbers (whole numbers)
                  </li>
                  <li>
                    <strong>float/double:</strong> Floating-point numbers (decimals)
                  </li>
                  <li>
                    <strong>char:</strong> Single characters
                  </li>
                  <li>
                    <strong>bool:</strong> Boolean values (true/false)
                  </li>
                  <li>
                    <strong>string:</strong> Sequence of characters (requires #include {`<string>`})
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Example</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`int age = 25;
double price = 19.99;
char grade = 'A';
bool isActive = true;
string name = "John";

// Display values
cout << "Name: " << name << endl;
cout << "Age: " << age << endl;`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "Operators and Expressions",
          description: "Working with arithmetic, logical, and comparison operators",
          content: (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">C++ Operators</h2>
                <p className="leading-relaxed">
                  Operators perform operations on variables and values. C++ provides a rich set of operators for
                  different purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Types of Operators</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Arithmetic:</strong> + (add), - (subtract), * (multiply), / (divide), % (modulus)
                  </li>
                  <li>
                    <strong>Comparison:</strong> == (equal), != (not equal), {`<`} (less than), {`>`} (greater than)
                  </li>
                  <li>
                    <strong>Logical:</strong> && (AND), || (OR), ! (NOT)
                  </li>
                  <li>
                    <strong>Assignment:</strong> = (assign), += (add and assign), -= (subtract and assign)
                  </li>
                  <li>
                    <strong>Increment/Decrement:</strong> ++ (increment), -- (decrement)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Examples</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`int a = 10, b = 5;

// Arithmetic
int sum = a + b;      // 15
int product = a * b;  // 50

// Comparison
bool isEqual = (a == b);     // false
bool isGreater = (a > b);    // true

// Logical
bool result = (a > 5) && (b < 10);  // true`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "Which header file is needed for input/output operations in C++?",
          options: ["<stdio.h>", "<iostream>", "<fstream>", "<conio.h>"],
          correctAnswer: 1,
        },
        {
          question: "What is the correct way to declare an integer variable?",
          options: ["integer x;", "int x;", "var x;", "number x;"],
          correctAnswer: 1,
        },
        {
          question: "Which data type stores decimal numbers?",
          options: ["int", "char", "double", "bool"],
          correctAnswer: 2,
        },
      ],
    },
    {
      title: "Control Flow",
      videoUrl: "https://www.youtube.com/embed/m9I7qBO9QrY",
      videoDescription: "Master conditional statements and loops in C++.",
      lessons: [
        {
          title: "If-Else Statements",
          description: "Making decisions with conditional statements",
          content: `
            <h2>Conditional Statements</h2>
            <p>Control the flow of your program based on conditions.</p>
            
            <h3>If-Else Syntax:</h3>
            <pre><code>if (condition) {
    // code if true
} else if (another_condition) {
    // code if second condition true
} else {
    // code if all false
}</code></pre>
          `,
        },
        {
          title: "Loops",
          description: "Repeating code with for, while, and do-while loops",
          content: `
            <h2>Loops in C++</h2>
            <p>Loops execute code repeatedly until a condition is met.</p>
            
            <h3>For Loop:</h3>
            <pre><code>for (int i = 0; i &lt; 10; i++) {
    cout &lt;&lt; i &lt;&lt; endl;
}</code></pre>
            
            <h3>While Loop:</h3>
            <pre><code>while (condition) {
    // code to repeat
}</code></pre>
          `,
        },
      ],
      quiz: [
        {
          question: "Which loop checks the condition before executing?",
          options: ["do-while", "while", "for", "Both while and for"],
          correctAnswer: 3,
        },
      ],
    },
    {
      title: "Functions and Scope",
      videoUrl: "https://www.youtube.com/embed/ZfJuOqFmYhY",
      videoDescription: "Understanding functions, parameters, and variable scope.",
      lessons: [
        {
          title: "Defining Functions",
          description: "Create reusable code with functions",
          content: `
            <h2>Functions in C++</h2>
            <p>Functions are reusable blocks of code that perform specific tasks.</p>
            
            <h3>Function Syntax:</h3>
            <pre><code>return_type function_name(parameters) {
    // function body
    return value;
}</code></pre>
            
            <h3>Example:</h3>
            <pre><code>int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    cout &lt;&lt; result; // Output: 8
}</code></pre>
          `,
        },
      ],
      quiz: [
        {
          question: "What is the return type of a function that doesn't return a value?",
          options: ["int", "void", "null", "empty"],
          correctAnswer: 1,
        },
      ],
    },
  ],
}
