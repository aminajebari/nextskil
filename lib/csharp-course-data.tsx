export const csharpCourseData = {
  modules: [
    {
      title: "C# Fundamentals",
      videoUrl: "https://www.youtube.com/embed/GhQdlIFylQ8",
      videoDescription: "Learn C# basics including syntax, variables, and data types.",
      lessons: [
        {
          title: "Introduction to C#",
          description: "Get started with C# programming language",
          content: (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">What is C#?</h2>
                <p className="leading-relaxed">
                  C# (C-Sharp) is a modern, object-oriented programming language developed by Microsoft. It's widely
                  used for building Windows applications, web applications with ASP.NET, games with Unity, and mobile
                  apps with Xamarin.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Why Learn C#?</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Type-safe and object-oriented</li>
                  <li>Part of the .NET ecosystem</li>
                  <li>Excellent for game development (Unity)</li>
                  <li>Great for enterprise applications</li>
                  <li>Strong Microsoft support and documentation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">First C# Program</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "Variables and Data Types",
          description: "Understanding C# variables and data types",
          content: (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Variables in C#</h2>
                <p className="leading-relaxed">
                  Variables in C# must be declared with a specific data type. C# is strongly typed, which helps catch
                  errors at compile time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Common Data Types</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Integer types
int age = 25;
long bigNumber = 1000000L;

// Floating-point types
float price = 19.99f;
double precise = 3.14159;

// Other types
string name = "John";
char grade = 'A';
bool isActive = true;

// var keyword (type inference)
var city = "New York"; // Compiler infers string`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "Operators",
          description: "Working with C# operators",
          content: (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">C# Operators</h2>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// Arithmetic
int sum = 10 + 5;
int difference = 10 - 5;
int product = 10 * 5;
int quotient = 10 / 5;
int remainder = 10 % 3;

// Comparison
bool isEqual = (5 == 5);
bool isNotEqual = (5 != 3);
bool isGreater = (10 > 5);

// Logical
bool and = true && false;
bool or = true || false;
bool not = !true;

// Null-coalescing
string result = null ?? "default";`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What does C# stand for?",
          options: ["C-Sharp", "C-String", "C-Super", "C-Special"],
          correctAnswer: 0,
        },
        {
          question: "Which keyword allows the compiler to infer the type?",
          options: ["auto", "var", "let", "type"],
          correctAnswer: 1,
        },
        {
          question: "What is the correct way to declare a string?",
          options: ["String name;", "string name;", "Both A and B", "str name;"],
          correctAnswer: 2,
        },
      ],
    },
    {
      title: "Control Flow",
      videoUrl: "https://www.youtube.com/embed/M9aRPISfNiU",
      videoDescription: "Master conditional statements and loops in C#.",
      lessons: [
        {
          title: "If-Else Statements",
          description: "Conditional branching in C#",
          content: (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Conditional Statements</h2>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`int age = 18;

if (age >= 18)
{
    Console.WriteLine("Adult");
}
else if (age >= 13)
{
    Console.WriteLine("Teenager");
}
else
{
    Console.WriteLine("Child");
}

// Ternary operator
string status = age >= 18 ? "Adult" : "Minor";`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "Loops",
          description: "For, while, and foreach loops",
          content: (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">C# Loops</h2>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`// For loop
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}

// While loop
int count = 0;
while (count < 5)
{
    Console.WriteLine(count);
    count++;
}

// Foreach loop
string[] fruits = { "apple", "banana", "cherry" };
foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "Which loop is best for iterating over collections?",
          options: ["for", "while", "foreach", "do-while"],
          correctAnswer: 2,
        },
        {
          question: "What symbol encloses code blocks in C#?",
          options: ["()", "[]", "{}", "begin/end"],
          correctAnswer: 2,
        },
      ],
    },
    {
      title: "Object-Oriented Programming",
      videoUrl: "https://www.youtube.com/embed/m_MQYyJpIjg",
      videoDescription: "Learn OOP concepts in C#: classes, objects, and inheritance.",
      lessons: [
        {
          title: "Classes and Objects",
          description: "Creating classes and instantiating objects",
          content: (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Classes and Objects in C#</h2>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`public class Person
{
    // Properties
    public string Name { get; set; }
    public int Age { get; set; }
    
    // Constructor
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
    
    // Method
    public void Introduce()
    {
        Console.WriteLine($"Hi, I'm {Name} and I'm {Age} years old");
    }
}

// Creating objects
Person person1 = new Person("John", 25);
person1.Introduce();`}</code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          title: "Inheritance",
          description: "Class inheritance and polymorphism",
          content: (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Inheritance in C#</h2>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`public class Animal
{
    public string Name { get; set; }
    
    public virtual void MakeSound()
    {
        Console.WriteLine("Animal makes a sound");
    }
}

public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
}

Dog myDog = new Dog { Name = "Buddy" };
myDog.MakeSound(); // Woof!`}</code>
                </pre>
              </div>
            </div>
          ),
        },
      ],
      quiz: [
        {
          question: "What symbol is used for inheritance in C#?",
          options: ["extends", ":", "->", "inherits"],
          correctAnswer: 1,
        },
        {
          question: "Which keyword overrides a method from the base class?",
          options: ["override", "overload", "virtual", "new"],
          correctAnswer: 0,
        },
      ],
    },
  ],
}
