export const javaCourseData = {
  modules: [
    {
      id: 0,
      title: "Java Fundamentals",
      videoUrl: "https://www.youtube.com/embed/eIrMbAQSU34",
      videoDescription: "Learn Java basics including syntax, variables, data types, and basic operators.",
      lessons: [
        {
          id: 0,
          title: "Introduction to Java",
          description: "Get started with Java programming language",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">What is Java?</h3>
                <p className="leading-relaxed">
                  Java is a high-level, class-based, object-oriented programming language designed to have as few
                  implementation dependencies as possible. It's widely used in enterprise applications, Android
                  development, and web services.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Why Learn Java?</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Platform independent (Write Once, Run Anywhere)</li>
                  <li>Object-oriented programming</li>
                  <li>Strong memory management</li>
                  <li>Rich API and vast ecosystem</li>
                  <li>High demand in enterprise market</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Java Architecture</h4>
                <p className="leading-relaxed">
                  Java programs are compiled into bytecode which runs on the Java Virtual Machine (JVM), making Java
                  platform-independent.
                </p>
              </div>
            </div>
          ),
        },
        {
          id: 1,
          title: "Variables and Data Types",
          description: "Understanding Java variables and primitive data types",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Variables in Java</h3>
                <p className="leading-relaxed mb-4">
                  Variables are containers for storing data values. In Java, variables must be declared with a data
                  type.
                </p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Declaring and initializing variables
String name = "John";
int age = 25;
double height = 5.9;
boolean isStudent = true;
char grade = 'A';`}</code>
                </pre>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Primitive Data Types</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>byte</strong> - 8-bit integer (-128 to 127)
                  </li>
                  <li>
                    <strong>short</strong> - 16-bit integer
                  </li>
                  <li>
                    <strong>int</strong> - 32-bit integer
                  </li>
                  <li>
                    <strong>long</strong> - 64-bit integer
                  </li>
                  <li>
                    <strong>float</strong> - 32-bit floating point
                  </li>
                  <li>
                    <strong>double</strong> - 64-bit floating point
                  </li>
                  <li>
                    <strong>boolean</strong> - true or false
                  </li>
                  <li>
                    <strong>char</strong> - 16-bit Unicode character
                  </li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          id: 2,
          title: "Operators in Java",
          description: "Learn about various operators in Java",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Java Operators</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Arithmetic Operators
int sum = 10 + 5;        // Addition
int difference = 10 - 5; // Subtraction
int product = 10 * 5;    // Multiplication
int quotient = 10 / 5;   // Division
int remainder = 10 % 3;  // Modulus

// Comparison Operators
boolean isEqual = (5 == 5);        // Equal to
boolean isNotEqual = (5 != 3);     // Not equal to
boolean isGreater = (10 > 5);      // Greater than
boolean isLess = (5 < 10);         // Less than

// Logical Operators
boolean and = true && false;  // AND
boolean or = true || false;   // OR
boolean not = !true;          // NOT`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What does JVM stand for?",
          options: ["Java Virtual Machine", "Java Variable Method", "Java Version Manager", "Java Visual Mode"],
          correct: 0,
        },
        {
          question: "Which of these is NOT a primitive data type in Java?",
          options: ["int", "boolean", "String", "double"],
          correct: 2,
        },
        {
          question: "What is the size of an int in Java?",
          options: ["8 bits", "16 bits", "32 bits", "64 bits"],
          correct: 2,
        },
      ],
    },
    {
      id: 1,
      title: "Control Flow",
      videoUrl: "https://www.youtube.com/embed/ldYLYRNaucM",
      videoDescription: "Master conditional statements and loops in Java.",
      lessons: [
        {
          id: 0,
          title: "If-Else Statements",
          description: "Learn conditional branching in Java",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Conditional Statements</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`int age = 18;

if (age >= 18) {
    System.out.println("You are an adult");
} else if (age >= 13) {
    System.out.println("You are a teenager");
} else {
    System.out.println("You are a child");
}

// Ternary operator
String status = (age >= 18) ? "Adult" : "Minor";`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          id: 1,
          title: "Switch Statements",
          description: "Using switch for multiple conditions",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Switch Statement</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`int day = 3;
String dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Invalid day";
}`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          id: 2,
          title: "Loops in Java",
          description: "Master for, while, and do-while loops",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Java Loops</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// For loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// While loop
int count = 0;
while (count < 5) {
    System.out.println(count);
    count++;
}

// Do-while loop
int num = 0;
do {
    System.out.println(num);
    num++;
} while (num < 5);

// Enhanced for loop (for-each)
int[] numbers = {1, 2, 3, 4, 5};
for (int number : numbers) {
    System.out.println(number);
}`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What happens if you forget the 'break' statement in a switch case?",
          options: ["Compilation error", "Runtime error", "Fall-through to next case", "Nothing"],
          correct: 2,
        },
        {
          question: "Which loop guarantees at least one execution?",
          options: ["for loop", "while loop", "do-while loop", "enhanced for loop"],
          correct: 2,
        },
      ],
    },
    {
      id: 2,
      title: "Object-Oriented Programming",
      videoUrl: "https://www.youtube.com/embed/6T_HgnjoYwM",
      videoDescription: "Learn OOP concepts: classes, objects, inheritance, and polymorphism.",
      lessons: [
        {
          id: 0,
          title: "Classes and Objects",
          description: "Understanding the basics of OOP",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Classes and Objects</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Defining a class
public class Person {
    // Fields (attributes)
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Methods
    public void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age + " years old");
    }
    
    // Getters and Setters
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}

// Creating objects
Person person1 = new Person("John", 25);
person1.introduce();`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          id: 1,
          title: "Inheritance",
          description: "Learn about class inheritance and the 'extends' keyword",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Inheritance in Java</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Parent class
public class Animal {
    protected String name;
    
    public void eat() {
        System.out.println(name + " is eating");
    }
}

// Child class
public class Dog extends Animal {
    public Dog(String name) {
        this.name = name;
    }
    
    public void bark() {
        System.out.println(name + " is barking");
    }
}

// Usage
Dog myDog = new Dog("Buddy");
myDog.eat();   // Inherited method
myDog.bark();  // Own method`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          id: 2,
          title: "Polymorphism",
          description: "Understanding method overriding and overloading",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Polymorphism</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Method Overloading (Compile-time polymorphism)
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}

// Method Overriding (Runtime polymorphism)
public class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow");
    }
}`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What keyword is used to inherit from a class in Java?",
          options: ["inherits", "extends", "implements", "super"],
          correct: 1,
        },
        {
          question: "Which type of polymorphism is method overloading?",
          options: ["Runtime", "Compile-time", "Dynamic", "Static binding"],
          correct: 1,
        },
      ],
    },
    {
      id: 3,
      title: "Collections Framework",
      videoUrl: "https://www.youtube.com/embed/GdAon80-0KA",
      videoDescription: "Master ArrayList, HashMap, HashSet and other Java collections.",
      lessons: [
        {
          id: 0,
          title: "ArrayList",
          description: "Working with dynamic arrays",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">ArrayList in Java</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`import java.util.ArrayList;

// Creating an ArrayList
ArrayList<String> fruits = new ArrayList<>();

// Adding elements
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Accessing elements
String firstFruit = fruits.get(0);

// Updating elements
fruits.set(1, "Mango");

// Removing elements
fruits.remove("Orange");
fruits.remove(0);

// Iterating
for (String fruit : fruits) {
    System.out.println(fruit);
}

// Size
int size = fruits.size();`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          id: 1,
          title: "HashMap",
          description: "Key-value pair data structure",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">HashMap in Java</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`import java.util.HashMap;

// Creating a HashMap
HashMap<String, Integer> ages = new HashMap<>();

// Adding key-value pairs
ages.put("John", 25);
ages.put("Sarah", 30);
ages.put("Mike", 28);

// Getting values
int johnAge = ages.get("John");

// Checking if key exists
if (ages.containsKey("Sarah")) {
    System.out.println("Sarah is in the map");
}

// Iterating
for (String name : ages.keySet()) {
    System.out.println(name + " is " + ages.get(name) + " years old");
}

// Removing entries
ages.remove("Mike");`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          id: 2,
          title: "HashSet",
          description: "Understanding sets and unique elements",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">HashSet in Java</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`import java.util.HashSet;

// Creating a HashSet
HashSet<String> set = new HashSet<>();

// Adding elements (duplicates ignored)
set.add("Apple");
set.add("Banana");
set.add("Apple"); // Won't be added

// Checking if element exists
boolean hasApple = set.contains("Apple");

// Removing elements
set.remove("Banana");

// Iterating
for (String item : set) {
    System.out.println(item);
}`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "Which collection allows duplicate elements?",
          options: ["HashSet", "ArrayList", "HashMap keys", "TreeSet"],
          correct: 1,
        },
        {
          question: "What is the time complexity of get() operation in HashMap?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
          correct: 0,
        },
      ],
    },
    {
      id: 4,
      title: "Exception Handling",
      videoUrl: "https://www.youtube.com/embed/1XAfapkBQjk",
      videoDescription: "Learn to handle errors and exceptions gracefully in Java.",
      lessons: [
        {
          id: 0,
          title: "Try-Catch Blocks",
          description: "Handling exceptions with try-catch",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Exception Handling</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`try {
    int result = 10 / 0; // This will throw ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
} finally {
    System.out.println("This always executes");
}

// Multiple catch blocks
try {
    String str = null;
    str.length(); // NullPointerException
} catch (NullPointerException e) {
    System.out.println("Null pointer exception");
} catch (Exception e) {
    System.out.println("General exception");
}`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          id: 1,
          title: "Throwing Exceptions",
          description: "Creating and throwing custom exceptions",
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Throwing Exceptions</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Throwing an exception
public void checkAge(int age) throws IllegalArgumentException {
    if (age < 18) {
        throw new IllegalArgumentException("Age must be 18 or above");
    }
}

// Custom exception
public class InvalidEmailException extends Exception {
    public InvalidEmailException(String message) {
        super(message);
    }
}

// Using custom exception
public void validateEmail(String email) throws InvalidEmailException {
    if (!email.contains("@")) {
        throw new InvalidEmailException("Invalid email format");
    }
}`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "Which block always executes regardless of exception?",
          options: ["try", "catch", "finally", "throw"],
          correct: 2,
        },
        {
          question: "What is the parent class of all exceptions in Java?",
          options: ["Error", "Exception", "Throwable", "RuntimeException"],
          correct: 2,
        },
      ],
    },
  ],
  finalExam: {
    questions: [
      {
        question: "What is the file extension for Java source files?",
        options: [".java", ".class", ".jar", ".jvm"],
        correct: 0,
      },
      {
        question: "Which of these is a valid Java identifier?",
        options: ["2variable", "variable-name", "_variable", "class"],
        correct: 2,
      },
      {
        question: "What is encapsulation in OOP?",
        options: [
          "Hiding implementation details",
          "Inheriting from parent class",
          "Creating multiple methods with same name",
          "Running code in parallel",
        ],
        correct: 0,
      },
      {
        question: "Which keyword is used to prevent method overriding?",
        options: ["static", "final", "abstract", "private"],
        correct: 1,
      },
      {
        question: "What is the default value of an int variable in Java?",
        options: ["null", "0", "undefined", "1"],
        correct: 1,
      },
      {
        question: "Which interface must be implemented for a class to be used in enhanced for loop?",
        options: ["Comparable", "Iterable", "Serializable", "Cloneable"],
        correct: 1,
      },
      {
        question: "What does the 'static' keyword mean?",
        options: [
          "Variable cannot be changed",
          "Belongs to class rather than instance",
          "Method cannot be overridden",
          "Class cannot be inherited",
        ],
        correct: 1,
      },
      {
        question: "Which collection maintains insertion order?",
        options: ["HashSet", "TreeSet", "LinkedHashSet", "Set"],
        correct: 2,
      },
      {
        question: 'What is the output of: System.out.println(10 + 20 + "30")?',
        options: ["102030", "3030", "60", "Error"],
        correct: 1,
      },
      {
        question: "Which access modifier is most restrictive?",
        options: ["public", "protected", "private", "default"],
        correct: 2,
      },
    ],
  },
}
