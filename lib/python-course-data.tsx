export const pythonCourseData = {
  modules: [
    {
      title: "Python Fundamentals",
      videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
      videoDescription: "Learn Python basics including syntax, variables, data types, and basic operators.",
      lessons: [
        {
          title: "Introduction to Python",
          description: "Get started with Python programming language",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/python-programming-language-logo-code.jpg"
                  alt="Python Programming Language"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">What is Python?</h3>
                <p className="leading-relaxed">
                  Python is a high-level, interpreted programming language known for its simplicity and readability.
                  It's widely used in web development, data science, artificial intelligence, and automation.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Why Learn Python?</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Easy to learn and read</li>
                  <li>Versatile and powerful</li>
                  <li>Large community and extensive libraries</li>
                  <li>High demand in job market</li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          title: "Variables and Data Types",
          description: "Understanding Python variables and basic data types",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/python-variables-data-types-syntax.jpg"
                  alt="Python Variables and Data Types"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Variables in Python</h3>
                <p className="leading-relaxed mb-4">
                  Variables are containers for storing data values. Python has no command for declaring a variable.
                </p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`# Creating variables
name = "John"
age = 25
height = 5.9
is_student = True`}</code>
                </pre>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Basic Data Types</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>str</strong> - String (text)
                  </li>
                  <li>
                    <strong>int</strong> - Integer (whole numbers)
                  </li>
                  <li>
                    <strong>float</strong> - Floating point number (decimals)
                  </li>
                  <li>
                    <strong>bool</strong> - Boolean (True/False)
                  </li>
                </ul>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What type of language is Python?",
          options: ["Compiled", "Interpreted", "Assembly", "Machine"],
          correct: 1,
        },
        {
          question: "Which keyword is NOT used in Python?",
          options: ["def", "class", "var", "import"],
          correct: 2,
        },
      ],
    },
    {
      title: "Control Flow and Operators",
      videoUrl: "https://www.youtube.com/embed/PqFKRqpHrjw",
      videoDescription: "Master conditional statements, loops, and operators in Python.",
      lessons: [
        {
          title: "Conditional Statements",
          description: "Learn if, elif, and else statements",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/python-conditional-statements-if-else-flow.jpg"
                  alt="Python Conditional Statements"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">If Statements</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`age = 18

if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "Loops in Python",
          description: "Understanding for and while loops",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/python-loops-iteration-for-while.jpg"
                  alt="Python Loops and Iteration"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">For Loops</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`for i in range(5):
    print(i)  # Prints 0 to 4

fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "Which loop iterates over a sequence?",
          options: ["while", "for", "do-while", "repeat"],
          correct: 1,
        },
        {
          question: "What does 'break' do in a loop?",
          options: ["Pauses the loop", "Exits the loop", "Continues to next iteration", "Restarts the loop"],
          correct: 1,
        },
      ],
    },
    {
      title: "Data Structures",
      videoUrl: "https://www.youtube.com/embed/W8KRzm-HUcc",
      videoDescription: "Explore Python lists, dictionaries, tuples, and sets.",
      lessons: [
        {
          title: "Lists and Tuples",
          description: "Working with ordered collections",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/python-lists-arrays-data-structures.jpg"
                  alt="Python Lists and Data Structures"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Python Lists</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`# Creating lists
fruits = ["apple", "banana", "cherry"]

# Accessing elements
print(fruits[0])  # apple

# Adding elements
fruits.append("orange")

# List methods
fruits.pop()  # Removes last item
fruits.sort()  # Sorts the list`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "Dictionaries",
          description: "Key-value pair data structures",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/python-dictionaries-key-value-pairs.jpg"
                  alt="Python Dictionaries"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Python Dictionaries</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`# Creating dictionaries
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Accessing values
print(person["name"])  # John

# Adding new key-value pairs
person["email"] = "john@example.com"

# Dictionary methods
person.keys()    # Get all keys
person.values()  # Get all values`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What method adds an item to the end of a list?",
          options: ["add()", "append()", "insert()", "push()"],
          correct: 1,
        },
        {
          question: "How do you access a value in a dictionary?",
          options: ["dict.key", "dict[key]", "dict->key", "dict::key"],
          correct: 1,
        },
      ],
    },
    {
      title: "Functions and Modules",
      videoUrl: "https://www.youtube.com/embed/9Os0o3wzS_I",
      videoDescription: "Learn how to create and use functions, and work with Python modules.",
      lessons: [
        {
          title: "Defining Functions",
          description: "Create reusable code blocks",
          content: (
            <div className="space-y-6">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <img
                  src="/python-functions-def-parameters-return.jpg"
                  alt="Python Functions"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Function Basics</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`# Basic function
def greet(name):
    return f"Hello, {name}!"

# Function with default parameters
def power(base, exponent=2):
    return base ** exponent

# Calling functions
message = greet("Alice")
result = power(5)  # 25
result2 = power(5, 3)  # 125`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What keyword defines a function in Python?",
          options: ["function", "def", "func", "define"],
          correct: 1,
        },
        {
          question: "What does 'return' do in a function?",
          options: ["Exits function", "Returns value", "Both A and B", "None"],
          correct: 2,
        },
      ],
    },
  ],
}
