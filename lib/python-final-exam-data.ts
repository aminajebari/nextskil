export const pythonFinalExamQuestions = [
  // Module 1: Python Fundamentals (10 questions)
  {
    question: "What is the correct way to create a variable in Python?",
    options: ["var name = 'John'", "name = 'John'", "name: String = 'John'", "let name = 'John'"],
    correct: 1,
  },
  {
    question: "Which of the following is NOT a valid Python data type?",
    options: ["string", "integer", "float", "character"],
    correct: 3,
  },
  {
    question: "What will be the output of print(10 / 3)?",
    options: ["3", "3.3333333333333335", "3.33", "Error"],
    correct: 1,
  },
  {
    question: "What does the // operator do in Python?",
    options: ["Comments", "Floor division", "Integer division", "Both B and C"],
    correct: 1,
  },
  {
    question: "How do you convert a string to an integer in Python?",
    options: ["toInt('123')", "int('123')", "Integer('123')", "convert('123')"],
    correct: 1,
  },
  {
    question: "What is the correct syntax for a single-line comment in Python?",
    options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "-- This is a comment"],
    correct: 1,
  },
  {
    question: "Which operator is used for exponentiation in Python?",
    options: ["^", "**", "pow", "exp"],
    correct: 1,
  },
  {
    question: "What is the output of bool(0)?",
    options: ["True", "False", "0", "None"],
    correct: 1,
  },
  {
    question: "How do you concatenate two strings in Python?",
    options: ["string1 . string2", "string1 + string2", "concat(string1, string2)", "string1 & string2"],
    correct: 1,
  },
  {
    question: "What is the result of len('Python')?",
    options: ["5", "6", "7", "Error"],
    correct: 1,
  },

  // Module 2: Control Flow (10 questions)
  {
    question: "What is the correct syntax for an if statement in Python?",
    options: ["if (x > 5)", "if x > 5:", "if x > 5 then:", "if (x > 5):"],
    correct: 1,
  },
  {
    question: "Which keyword is used for an 'else if' statement in Python?",
    options: ["else if", "elif", "elseif", "else:if"],
    correct: 1,
  },
  {
    question: "How many times will this code print 'Hello'? for i in range(5): print('Hello')",
    options: ["4 times", "5 times", "6 times", "Error"],
    correct: 1,
  },
  {
    question: "What does the break statement do in a loop?",
    options: ["Stops the program", "Skips to next iteration", "Exits the loop", "Pauses the loop"],
    correct: 2,
  },
  {
    question: "What does the continue statement do in a loop?",
    options: ["Exits the loop", "Skips current iteration and continues", "Restarts the loop", "Pauses execution"],
    correct: 1,
  },
  {
    question: "What will print(list(range(1, 5))) output?",
    options: ["[0, 1, 2, 3, 4]", "[1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3]"],
    correct: 1,
  },
  {
    question: "How do you create a loop that runs while a condition is true?",
    options: ["for while x < 10:", "while x < 10:", "loop while x < 10:", "iterate while x < 10:"],
    correct: 1,
  },
  {
    question: "What is the output of range(5)?",
    options: ["[0, 1, 2, 3, 4]", "range(0, 5)", "0 to 5", "(0, 1, 2, 3, 4)"],
    correct: 1,
  },
  {
    question: "Can you use 'and' and 'or' operators in Python conditionals?",
    options: ["Only 'and'", "Only 'or'", "Yes, both", "No, neither"],
    correct: 2,
  },
  {
    question: "What does 'if x in list:' check?",
    options: ["If x is a list", "If x is contained in list", "If x is a valid variable", "Syntax error"],
    correct: 1,
  },

  // Module 3: Data Structures (10 questions)
  {
    question: "How do you create a list in Python?",
    options: ["{1, 2, 3}", "(1, 2, 3)", "[1, 2, 3]", "<1, 2, 3>"],
    correct: 2,
  },
  {
    question: "What is the index of the first element in a Python list?",
    options: ["1", "0", "-1", "undefined"],
    correct: 1,
  },
  {
    question: "How do you access the last element of a list?",
    options: ["list[0]", "list[-1]", "list[last]", "list.last()"],
    correct: 1,
  },
  {
    question: "What method adds an item to the end of a list?",
    options: ["add()", "insert()", "append()", "push()"],
    correct: 2,
  },
  {
    question: "How do you create a dictionary in Python?",
    options: ["[key, value]", "{key: value}", "(key, value)", "<key, value>"],
    correct: 1,
  },
  {
    question: "How do you access a value in a dictionary?",
    options: ["dict.key", "dict[key]", "dict->key", "dict::key"],
    correct: 1,
  },
  {
    question: "What is the difference between a list and a tuple in Python?",
    options: ["Lists are mutable, tuples are immutable", "Lists are immutable, tuples are mutable", "They are the same", "No significant difference"],
    correct: 0,
  },
  {
    question: "How do you create a set in Python?",
    options: ["{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)", "set(1, 2, 3)"],
    correct: 0,
  },
  {
    question: "What method removes an item from a list by value?",
    options: ["pop()", "delete()", "remove()", "discard()"],
    correct: 2,
  },
  {
    question: "How do you get all keys from a dictionary?",
    options: ["dict.keys()", "dict.getKeys()", "keys(dict)", "dict->keys"],
    correct: 0,
  },

  // Module 4: Functions (10 questions)
  {
    question: "How do you define a function in Python?",
    options: ["function myFunc() {}", "def myFunc():", "func myFunc():", "function myFunc():"],
    correct: 1,
  },
  {
    question: "How do you return a value from a function?",
    options: ["return value;", "return value", "send value", "output value"],
    correct: 1,
  },
  {
    question: "What happens if a function doesn't have a return statement?",
    options: ["Error", "Returns 0", "Returns None", "Returns empty string"],
    correct: 2,
  },
  {
    question: "How do you define default parameters in Python?",
    options: ["def func(x = 5):", "def func(x: default = 5):", "def func(x ~ 5):", "def func(default x = 5):"],
    correct: 0,
  },
  {
    question: "Can you define a function inside another function?",
    options: ["No", "Yes", "Only in certain cases", "Not recommended"],
    correct: 1,
  },
  {
    question: "What is a lambda function in Python?",
    options: ["A named function", "An anonymous small function", "A built-in function", "A class method"],
    correct: 1,
  },
  {
    question: "What is the correct syntax for a lambda function?",
    options: ["lambda x, y: x + y", "lambda (x, y): x + y", "lambda x, y -> x + y", "lambda x, y => x + y"],
    correct: 0,
  },
  {
    question: "Can a function accept multiple arguments in Python?",
    options: ["No, only one", "Yes", "Only with *args", "Syntax error"],
    correct: 1,
  },
  {
    question: "What is *args used for in Python?",
    options: ["Regular arguments", "Variable number of arguments", "Keyword arguments", "Default arguments"],
    correct: 1,
  },
  {
    question: "What is **kwargs used for in Python?",
    options: ["Multiple arguments", "Variable keyword arguments", "Required arguments", "Optional single argument"],
    correct: 1,
  },

  // Additional Questions (10 questions)
  {
    question: "What does isinstance(x, int) check?",
    options: ["If x is an instance of int", "If x equals int", "If int exists", "If x is defined"],
    correct: 0,
  },
  {
    question: "How do you import a module in Python?",
    options: ["include module", "import module", "use module", "load module"],
    correct: 1,
  },
  {
    question: "What is the correct way to handle exceptions in Python?",
    options: ["catch Exception:", "except Exception:", "try-except", "handle Exception:"],
    correct: 2,
  },
  {
    question: "What does enumerate() do?",
    options: ["Lists items", "Counts items", "Returns index and value pairs", "Sorts items"],
    correct: 2,
  },
  {
    question: "How do you create a string with multiple lines in Python?",
    options: ['Use \\n character', 'Use triple quotes """', 'Use + operator', 'Not possible'],
    correct: 1,
  },
  {
    question: "What is the result of [1, 2, 3] + [4, 5]?",
    options: ["[5, 7]", "[1, 2, 3, 4, 5]", "Error", "[1, 2, 3, [4, 5]]"],
    correct: 1,
  },
  {
    question: "What does zip() do in Python?",
    options: ["Compresses files", "Pairs elements from multiple iterables", "Sorts items", "Creates a list"],
    correct: 1,
  },
  {
    question: "How do you check if a key exists in a dictionary?",
    options: ["if dict.has_key(x):", "if x in dict:", "if dict[x]:", "if exists(dict, x):"],
    correct: 1,
  },
  {
    question: "What is the output of sorted([3, 1, 4, 1, 5])?",
    options: ["[1, 1, 3, 4, 5]", "[3, 1, 4, 1, 5]", "[5, 4, 3, 1, 1]", "Error"],
    correct: 0,
  },
  {
    question: "How do you remove duplicate items from a list?",
    options: ["list.unique()", "set(list)", "list.remove_duplicates()", "duplicate_remove(list)"],
    correct: 1,
  },
];
