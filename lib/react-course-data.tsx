"use client"

import type React from "react"

export interface Lesson {
  id: number
  title: string
  description: string
  content: React.ReactNode
  videoUrl?: string
}

export interface Module {
  id: number
  title: string
  description: string
  lessons: Lesson[]
  quiz: Array<{
    question: string
    options: string[]
    correct: number
  }>
  videoUrl?: string
  videoDescription?: string
}

export interface CourseData {
  title: string
  description: string
  modules: Module[]
}

export const reactCourseData: CourseData = {
  title: "React Fundamentals",
  description: "Master React from basics to advanced concepts",
  modules: [
    {
      id: 0,
      title: "React Fundamentals",
      description: "Learn the core concepts of React, understand components, JSX, and build your first interactive UI.",
      videoUrl: "https://www.youtube.com/embed/Rh3tobg7hEo",
      videoDescription: "Complete introduction to React fundamentals including components, JSX, and props",
      quiz: [
        {
          question: "What is React primarily used for?",
          options: [
            "Building databases",
            "Building user interfaces",
            "Building server applications",
            "Building mobile operating systems",
          ],
          correct: 1,
        },
        {
          question: "Which company created React?",
          options: ["Google", "Microsoft", "Facebook", "Apple"],
          correct: 2,
        },
        {
          question: "What does JSX stand for?",
          options: ["JavaScript XML", "JavaScript Extension", "Java Syntax Extension", "JSON XML"],
          correct: 0,
        },
        {
          question: "In JSX, which attribute is used instead of 'class'?",
          options: ["class", "className", "classList", "classType"],
          correct: 1,
        },
        {
          question: "What is the key principle of React components?",
          options: [
            "They must be class-based",
            "They should manage database connections",
            "They should be reusable and composable",
            "They must use jQuery",
          ],
          correct: 2,
        },
      ],
      lessons: [
        {
          id: 0,
          title: "Introduction to React",
          description: "Understand React's purpose and advantages in modern web development",
          content: (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">What is React?</h2>
                <p className="leading-relaxed text-gray-700">
                  React is a JavaScript library for building user interfaces. Created by Facebook in 2013, it
                  revolutionized how we build modern web applications with its component-based architecture.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-l-blue-500 dark:bg-blue-950/30">
                <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2 text-blue-600 dark:text-blue-400">Component-Based:</span>
                    <span>
                      Build encapsulated components that manage their own state and compose them into complex UIs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2 text-blue-600 dark:text-blue-400">Declarative:</span>
                    <span>Describe what your UI should look like for any given state, React handles the updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2 text-blue-600 dark:text-blue-400">
                      Learn Once, Write Anywhere:
                    </span>
                    <span>Use React for web, mobile (React Native), and even VR applications</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Your First React Component</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>
                    {`function Welcome() {
  return <h1>Hello, React!</h1>;
}

// Using the component
function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}`}
                  </code>
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg dark:bg-green-950/30">
                <p className="text-green-900 dark:text-green-100">
                  <strong>Why Learn React?</strong> High demand in job market, massive ecosystem, used by Facebook,
                  Netflix, Airbnb, and thousands of companies worldwide.
                </p>
              </div>
            </div>
          ),
          videoUrl: "https://www.youtube.com/embed/c_ehAS66Q_Q",
        },
        {
          id: 1,
          title: "JSX Syntax",
          description: "Learn JSX - the syntax extension that makes React powerful and readable",
          content: (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">JSX: JavaScript XML</h2>
              <p className="leading-relaxed">
                JSX is a syntax extension that lets you write HTML-like code in JavaScript.
              </p>

              <h3 className="text-xl font-semibold mb-3">Basic Rules:</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Return Single Parent Element</h4>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                      {`// Correct
function Component() {
  return (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  );
}`}
                    </code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Use className Instead of class</h4>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="header">Hello</div>`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. Self-Close Tags</h4>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                      {`<img src="image.jpg" alt="Description" />
<input type="text" />`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 2,
          title: "Components and Props",
          description: "Create functional components and learn to pass data with props",
          content: (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Components and Props</h2>
              <p className="leading-relaxed">
                Components are the building blocks of React applications. They can be functional or class-based, and
                props allow you to pass data between them.
              </p>

              <h3 className="text-xl font-semibold mb-3">Functional Components</h3>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                  {`// Simple component
function Welcome() {
  return <h1>Hello, React Learner!</h1>;
}

// Using the component
function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}`}
                </code>
              </pre>

              <h3 className="text-xl font-semibold mb-3">Props: Passing Data</h3>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                  {`// Component receiving props
function UserCard({ name, role }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

// Using the component with props
function App() {
  return (
    <div>
      <UserCard name="Sarah Johnson" role="Frontend Developer" />
    </div>
  );
}`}
                </code>
              </pre>

              <h3 className="text-xl font-semibold mb-3">Key Rules for Props:</h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1. Props are Read-Only:</span>
                  <span>Never modify props directly</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2. Props Flow Down:</span>
                  <span>From parent to child components</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3. Default Props:</span>
                  <span>Provide fallback values</span>
                </li>
              </ul>
            </div>
          ),
        },
        {
          id: 3,
          title: "Component Best Practices",
          description: "Learn naming conventions and component patterns",
          content: (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Component Best Practices</h2>
              <p className="leading-relaxed">
                Writing clean, maintainable components is crucial for the long-term success of your React application.
              </p>

              <h3 className="text-xl font-semibold mb-3">Naming Conventions</h3>

              <div className="space-y-4">
                <h4 className="font-semibold mb-2">Component Names</h4>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>
                    {`// PascalCase for components
function UserProfile() { }
const NavigationBar = () => { };`}
                  </code>
                </pre>

                <h4 className="font-semibold mb-2">File Names</h4>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>
                    {`// Match component name
UserProfile.jsx
NavigationBar.jsx`}
                  </code>
                </pre>
              </div>

              <h3 className="text-xl font-semibold mb-3">Component Structure</h3>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                  {`function UserCard({ user, onEdit }) {
  // Event handlers
  const handleClick = () => {
    onEdit(user.id);
  };
  
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <button onClick={handleClick}>Edit</button>
    </div>
  );
}`}
                </code>
              </pre>

              <h3 className="text-xl font-semibold mb-3">Single Responsibility</h3>

              <p className="leading-relaxed">
                Each component should have one clear purpose, making your code easier to understand and maintain.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      id: 1,
      title: "State Management with React Hooks",
      description: "Master useState, useEffect, and manage component state effectively",
      videoUrl: "https://www.youtube.com/embed/dCLhUialKPQ",
      videoDescription: "Deep dive into React Hooks including useState, useEffect, and custom hooks",
      quiz: [
        {
          question: "What does the useState hook return?",
          options: [
            "A single value",
            "An array with state value and setter function",
            "An object with state properties",
            "A promise",
          ],
          correct: 1,
        },
        {
          question: "When does useEffect run by default?",
          options: [
            "Only on component mount",
            "Only on component unmount",
            "After every render",
            "Never automatically",
          ],
          correct: 2,
        },
        {
          question: "What is the purpose of the dependency array in useEffect?",
          options: [
            "To list all components",
            "To control when the effect runs",
            "To import dependencies",
            "To define state variables",
          ],
          correct: 1,
        },
        {
          question: "What naming convention should custom hooks follow?",
          options: ["start with 'custom'", "start with 'use'", "start with 'hook'", "Any name is fine"],
          correct: 1,
        },
        {
          question: "What is useReducer best suited for?",
          options: [
            "Simple boolean states",
            "Complex state logic with multiple sub-values",
            "API calls only",
            "Styling components",
          ],
          correct: 1,
        },
      ],
      lessons: [
        {
          id: 0,
          title: "Understanding State with useState",
          description: "Learn how to add and manage state in functional components",
          content: (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Understanding State with useState</h2>
              <p className="leading-relaxed">
                State allows components to "remember" information and react to user interactions. The useState hook is
                essential for managing state in functional components.
              </p>

              <h3 className="text-xl font-semibold mb-3">useState Hook Basics</h3>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                  {`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
                </code>
              </pre>

              <h3 className="text-xl font-semibold mb-3">How useState Works:</h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1. Initialization:</span>
                  <span>\`useState(0)\` sets initial state to 0</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2. Destructuring:</span>
                  <span>\`[count, setCount]\` gives current value and setter</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3. Updates:</span>
                  <span>Calling \`setCount(newValue)\` triggers re-render</span>
                </li>
              </ul>
            </div>
          ),
          videoUrl: "https://www.youtube.com/embed/lw7IumbVH_A",
        },
        {
          id: 1,
          title: "Side Effects and useEffect",
          description: "Handle API calls, subscriptions, and other side effects",
          content: (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Side Effects and useEffect</h2>
              <p className="leading-relaxed">
                The useEffect hook lets you perform side effects in functional components, such as data fetching,
                subscriptions, or manually changing the DOM.
              </p>

              <h3 className="text-xl font-semibold mb-3">What are Side Effects?</h3>

              <ul className="space-y-3">
                <li>Data fetching from APIs</li>
                <li>Setting up subscriptions</li>
                <li>Manually changing the DOM</li>
                <li>Setting timers</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">useEffect Basic Syntax</h3>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                  {`import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUser(userId).then(userData => {
      setUser(userData);
      setLoading(false);
    });
  }, [userId]);
  
  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: 2,
          title: "Custom Hooks",
          description: "Create reusable logic with custom hooks",
          content: (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Custom Hooks</h2>
              <p className="leading-relaxed">
                Custom hooks let you extract component logic into reusable functions, making your code cleaner and more
                maintainable.
              </p>

              <h3 className="text-xl font-semibold mb-3">Basic Custom Hook</h3>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                  {`function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Using the custom hook
function Counter() {
  const { count, increment, decrement } = useCounter(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: 3,
          title: "Advanced State Patterns",
          description: "Manage complex state with useReducer and Context API",
          content: (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Advanced State Patterns</h2>
              <p className="leading-relaxed">
                For complex state logic, use useReducer and Context API to manage state more effectively.
              </p>

              <h3 className="text-xl font-semibold mb-3">useReducer</h3>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                  {`import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}`}
                </code>
              </pre>
            </div>
          ),
        },
      ],
    },
    {
      id: 2,
      title: "Component Patterns & Performance",
      description: "Learn advanced component patterns and optimization techniques",
      videoUrl: "https://www.youtube.com/embed/MfIoAG3e7p4",
      videoDescription: "Advanced patterns, performance optimization, and best practices",
      quiz: [
        {
          question: "What does React.memo do?",
          options: [
            "Saves data to memory",
            "Prevents unnecessary re-renders of components",
            "Creates memos for developers",
            "Manages application state",
          ],
          correct: 1,
        },
        {
          question: "What is the purpose of useMemo?",
          options: [
            "To memoize component rendering",
            "To memoize expensive calculations",
            "To save user preferences",
            "To create memory leaks",
          ],
          correct: 1,
        },
        {
          question: "What does React.lazy enable?",
          options: ["Lazy loading of components", "Slow rendering", "Delayed state updates", "Automatic caching"],
          correct: 0,
        },
        {
          question: "What must wrap lazy-loaded components?",
          options: ["div", "Fragment", "Suspense", "ErrorBoundary"],
          correct: 2,
        },
        {
          question: "What are Error Boundaries used for?",
          options: [
            "Preventing errors from occurring",
            "Catching and handling JavaScript errors in components",
            "Setting component boundaries",
            "Managing error state",
          ],
          correct: 1,
        },
      ],
      lessons: [
        {
          id: 0,
          title: "Component Composition",
          description: "Build flexible UIs with component composition",
          content: (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Component Composition</h2>
              <p className="leading-relaxed">
                Composition is building complex UIs from simple components. This approach promotes reusability and
                maintainability.
              </p>

              <h3 className="text-xl font-semibold mb-3">Children Prop</h3>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                  {`function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card title="Welcome">
        <p>This is the card content</p>
        <button>Click me</button>
      </Card>
    </div>
  );
}`}
                </code>
              </pre>
            </div>
          ),
          videoUrl: "https://www.youtube.com/embed/MfIoAG3e7p4",
        },
        {
          id: 1,
          title: "Performance Optimization",
          description: "Optimize React applications with memoization and code splitting",
          content: (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Performance Optimization</h2>
              <p className="leading-relaxed">
                React provides several tools to optimize application performance, such as memoization and code
                splitting.
              </p>

              <h3 className="text-xl font-semibold mb-3">React.memo</h3>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                  {`import { memo } from 'react';

const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  // Expensive rendering logic
  return <div>{/* ... */}</div>;
});`}
                </code>
              </pre>

              <h3 className="text-xl font-semibold mb-3">useMemo</h3>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                  {`function ExpensiveCalculation({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((acc, item) => {
      return acc + item.value;
    }, 0);
  }, [items]);
  
  return <div>Total: {expensiveValue}</div>;
}`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: 2,
          title: "Code Splitting",
          description: "Improve load times with lazy loading and code splitting",
          content: (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Code Splitting</h2>
              <p className="leading-relaxed">
                Code splitting helps reduce the initial bundle size by splitting your application into smaller bundles
                that can be loaded on demand.
              </p>

              <h3 className="text-xl font-semibold mb-3">React.lazy and Suspense</h3>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                  {`import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: 3,
          title: "Error Boundaries",
          description: "Handle errors gracefully in React applications",
          content: (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Error Boundaries</h2>
              <p className="leading-relaxed">
                Error boundaries catch JavaScript errors anywhere in their child component tree and display a fallback
                UI.
              </p>

              <h3 className="text-xl font-semibold mb-3">Creating Error Boundaries</h3>

              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>
                  {`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    
    return this.props.children;
  }
}`}
                </code>
              </pre>
            </div>
          ),
        },
      ],
    },
  ],
}
