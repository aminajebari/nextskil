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
          content: `
            <h2>What is C++?</h2>
            <p>C++ is a powerful general-purpose programming language that supports object-oriented, procedural, and generic programming.</p>
            
            <h3>Key Features:</h3>
            <ul>
              <li>Object-Oriented Programming (OOP)</li>
              <li>Low-level memory manipulation</li>
              <li>High performance and efficiency</li>
              <li>Rich standard library (STL)</li>
            </ul>
            
            <h3>First C++ Program:</h3>
            <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Hello, World!" &lt;&lt; endl;
    return 0;
}</code></pre>
          `,
        },
        {
          title: "Variables and Data Types",
          description: "Learn about C++ variables and primitive data types",
          content: `
            <h2>Variables and Data Types</h2>
            <p>Variables store data that can be used and manipulated in your program.</p>
            
            <h3>Primitive Data Types:</h3>
            <ul>
              <li><strong>int</strong> - Integer numbers</li>
              <li><strong>float/double</strong> - Floating-point numbers</li>
              <li><strong>char</strong> - Single characters</li>
              <li><strong>bool</strong> - Boolean (true/false)</li>
            </ul>
            
            <h3>Example:</h3>
            <pre><code>int age = 25;
double price = 19.99;
char grade = 'A';
bool isActive = true;</code></pre>
          `,
        },
        {
          title: "Operators and Expressions",
          description: "Working with arithmetic, logical, and comparison operators",
          content: `
            <h2>C++ Operators</h2>
            <p>Operators perform operations on variables and values.</p>
            
            <h3>Types of Operators:</h3>
            <ul>
              <li>Arithmetic: +, -, *, /, %</li>
              <li>Comparison: ==, !=, &lt;, &gt;, &lt;=, &gt;=</li>
              <li>Logical: &&, ||, !</li>
              <li>Assignment: =, +=, -=, *=, /=</li>
            </ul>
          `,
        },
      ],
      quiz: [
        {
          question: "Which header file is needed for input/output operations?",
          options: ["&lt;stdio.h&gt;", "&lt;iostream&gt;", "&lt;fstream&gt;", "&lt;conio.h&gt;"],
          correctAnswer: 1,
        },
        {
          question: "What is the correct way to declare an integer variable?",
          options: ["integer x;", "int x;", "var x;", "number x;"],
          correctAnswer: 1,
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
