export const cppFinalExamQuestions = [
  // C++ Fundamentals (10 questions)
  {
    question: "What is the correct way to declare a variable in C++?",
    options: ["int x;", "x: int;", "declare x as int", "int: x;"],
    correct: 0,
  },
  {
    question: "Which of the following is NOT a primitive data type?",
    options: ["int", "float", "bool", "string"],
    correct: 3,
  },
  {
    question: "What does the 'auto' keyword do in modern C++?",
    options: ["Declares automatic variables", "Enables automatic type deduction", "Makes variables global", "Disables optimization"],
    correct: 1,
  },
  {
    question: "Which operator has the highest precedence?",
    options: ["*", "^", "()", "!"],
    correct: 2,
  },
  {
    question: "What is the size of a pointer on a 64-bit system?",
    options: ["4 bytes", "8 bytes", "16 bytes", "Depends on architecture"],
    correct: 1,
  },
  {
    question: "How do you define a constant in C++?",
    options: ["#define PI 3.14", "const float PI = 3.14;", "Both A and B", "constexpr float PI = 3.14;"],
    correct: 2,
  },
  {
    question: "What is the output of 5 / 2 in C++?",
    options: ["2.5", "2", "3", "Compilation error"],
    correct: 1,
  },
  {
    question: "Which header should you include for input/output?",
    options: ["<input>", "<iostream>", "<io>", "<stdio>"],
    correct: 1,
  },
  {
    question: "What is namespace std?",
    options: ["Standard standard", "Standard library namespace", "Static definition", "Standard structure"],
    correct: 1,
  },
  {
    question: "How do you access the std namespace without std::",
    options: ["import std", "using namespace std;", "include <std>", "activate std"],
    correct: 1,
  },

  // OOP (10 questions)
  {
    question: "What is the purpose of a constructor?",
    options: ["Construct objects and initialize members", "Create new objects", "Call parent methods", "Define static members"],
    correct: 0,
  },
  {
    question: "Which access specifier is most restrictive?",
    options: ["public", "protected", "private", "internal"],
    correct: 2,
  },
  {
    question: "What is the difference between struct and class in C++?",
    options: ["No difference", "struct is for data, class is for functions", "Different default access specifiers", "struct is deprecated"],
    correct: 2,
  },
  {
    question: "What keyword indicates a method cannot be overridden?",
    options: ["sealed", "final", "static", "const"],
    correct: 1,
  },
  {
    question: "What is a virtual destructor used for?",
    options: ["Delete virtual objects", "Proper cleanup in inheritance hierarchies", "Optimize code", "Mark abstract classes"],
    correct: 1,
  },
  {
    question: "Can you override a private method?",
    options: ["Yes", "No", "Only in derived classes", "Only with templates"],
    correct: 1,
  },
  {
    question: "What is method overloading?",
    options: ["Using same method multiple times", "Same method name, different parameters", "Calling parent method", "Virtual methods"],
    correct: 1,
  },
  {
    question: "Which operator is overloaded to enable a[i] syntax?",
    options: ["[]", "operator[]", "Both A and B", "index"],
    correct: 2,
  },
  {
    question: "What is the this pointer?",
    options: ["Pointer to current class", "Pointer to current object", "Pointer to base class", "Null pointer"],
    correct: 1,
  },
  {
    question: "What is the purpose of an abstract class?",
    options: ["Define interface without implementation", "Speed up code", "Reduce memory usage", "Prevent instantiation"],
    correct: 0,
  },

  // Memory (10 questions)
  {
    question: "What does the & operator do in pointer context?",
    options: ["Bitwise AND", "Address-of operator", "Reference", "Dereference"],
    correct: 1,
  },
  {
    question: "What does the * operator do with pointers?",
    options: ["Multiplication", "Declare pointer", "Dereference pointer", "Both B and C"],
    correct: 3,
  },
  {
    question: "What is NULL in C++?",
    options: ["Variable name", "Zero pointer constant", "Undefined", "Memory address 0"],
    correct: 1,
  },
  {
    question: "What is nullptr in modern C++?",
    options: ["Same as NULL", "Newer way to represent null pointers", "Null string", "Not standard"],
    correct: 1,
  },
  {
    question: "What is a memory leak?",
    options: ["Memory that overflows", "Allocated memory never freed", "Reading past array bounds", "Buffer overflow"],
    correct: 1,
  },
  {
    question: "Which is safer - raw pointers or smart pointers?",
    options: ["Raw pointers", "Smart pointers", "Same safety level", "Depends on usage"],
    correct: 1,
  },
  {
    question: "What does std::unique_ptr do?",
    options: ["Prevents copies", "Auto-deletes when out of scope", "Prevents null pointers", "Both A and B"],
    correct: 3,
  },
  {
    question: "What is double deletion?",
    options: ["Deleting twice", "Deleting same memory twice", "Invalid operation", "Memory error"],
    correct: 1,
  },
  {
    question: "Which performs better - std::unique_ptr or std::shared_ptr?",
    options: ["std::unique_ptr", "std::shared_ptr", "Same performance", "Depends on compiler"],
    correct: 0,
  },
  {
    question: "What is RAII?",
    options: ["Resource Acquisition Is Implementation", "Resource Allocation In Initialization", "Resource Access Is Isolated", "Resource As Is Immediately"],
    correct: 1,
  },

  // STL (10 questions)
  {
    question: "What does std::vector provide?",
    options: ["Dynamic array", "Matrix", "3D coordinates", "Mathematical vector"],
    correct: 0,
  },
  {
    question: "What is the time complexity of push_back on vector?",
    options: ["O(1) amortized", "O(n)", "O(log n)", "O(n log n)"],
    correct: 0,
  },
  {
    question: "What does std::map use internally?",
    options: ["Hash table", "Binary search tree", "Array", "Linked list"],
    correct: 1,
  },
  {
    question: "What is std::unordered_map?",
    options: ["Sorted map", "Hash-based map", "Linked map", "Tree map"],
    correct: 1,
  },
  {
    question: "What is the advantage of std::set over std::vector?",
    options: ["No duplicates, sorted", "Faster insertion", "Less memory", "Better for random access"],
    correct: 0,
  },
  {
    question: "What does std::find return if element not found?",
    options: ["null", "Throws exception", "Iterator to end()", "-1"],
    correct: 2,
  },
  {
    question: "What is std::sort's average time complexity?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correct: 1,
  },
  {
    question: "What is std::reverse used for?",
    options: ["Undo operation", "Reverse container order", "Opposite of sort", "Backward iteration"],
    correct: 1,
  },
  {
    question: "What is range-based for loop?",
    options: ["For loop with range", "for (auto x : container)", "Both A and B", "Legacy loop"],
    correct: 2,
  },
  {
    question: "What does std::algorithm header contain?",
    options: ["Data structures", "Common algorithms", "Memory management", "String utilities"],
    correct: 1,
  },

  // Advanced (10 questions)
  {
    question: "What are templates in C++?",
    options: ["HTML templates", "Generic programming", "Code templates", "Template files"],
    correct: 1,
  },
  {
    question: "What is template specialization?",
    options: ["Specialized template", "Custom implementation for specific type", "Template inheritance", "Advanced template"],
    correct: 1,
  },
  {
    question: "Which header provides exception handling?",
    options: ["<error>", "<exception>", "<try>", "<catch>"],
    correct: 1,
  },
  {
    question: "What is std::exception?",
    options: ["Exception type", "Base class for exceptions", "Exception function", "Error handling"],
    correct: 1,
  },
  {
    question: "How do you create threads in modern C++?",
    options: ["pthread_create", "CreateThread", "std::thread", "All of above"],
    correct: 2,
  },
  {
    question: "What is a mutex?",
    options: ["Music software", "Mutual exclusion lock", "Multi-purpose tool", "Matrix utility"],
    correct: 1,
  },
  {
    question: "Which header for file operations?",
    options: ["<file>", "<fstream>", "<io>", "<stream>"],
    correct: 1,
  },
  {
    question: "What does constexpr do?",
    options: ["Express constants", "Constant expression evaluable at compile time", "Const pointer", "Express constraints"],
    correct: 1,
  },
  {
    question: "What is move semantics?",
    options: ["Moving objects", "Avoiding copies with rvalue references", "Pointer movement", "Memory movement"],
    correct: 1,
  },
  {
    question: "What is an rvalue reference?",
    options: ["Right value reference", "Reference to temporary", "Forward reference", "Both B and C"],
    correct: 3,
  },
];
