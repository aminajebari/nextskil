export interface Lesson {
  id: number
  title: string
  description: string
  content: string
  videoUrl?: string
}

export interface Module {
  id: number
  title: string
  description: string
  lessons: Lesson[]
  quiz?: {
    questions: Array<{
      question: string
      options: string[]
      correctAnswer: number
      explanation: string
    }>
  }
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
      lessons: [
        {
          id: 0,
          title: "Introduction to React",
          description: "Understand React's purpose and advantages in modern web development",
          content: `# What is React?

React is a JavaScript library for building user interfaces. It was created by Facebook and is now maintained by a large community of developers.

## Key Features:

### Component-Based Architecture
- Build encapsulated components that manage their own state
- Compose complex UIs from simple, reusable pieces
- Each component is like a Lego block that you can reuse

### Declarative Approach
- Describe WHAT your UI should look like for any given state
- React handles HOW to update the DOM efficiently
- More predictable and easier to debug

### Virtual DOM
- React creates a virtual representation of the DOM
- Compares changes and updates only what's necessary
- Results in better performance

## Why Learn React?
- High demand in job market
- Large community and ecosystem
- Used by major companies (Facebook, Netflix, Airbnb)
- Excellent documentation and learning resources`,
          videoUrl: "https://www.youtube.com/embed/c_ehAS66Q_Q"
        },
        {
          id: 1,
          title: "JSX Syntax",
          description: "Learn JSX - the syntax extension that makes React powerful and readable",
          content: `# JSX: JavaScript XML

JSX is a syntax extension that lets you write HTML-like code in JavaScript.

## Basic Rules:

### 1. Return Single Parent Element
\`\`\`jsx
// Correct
function Component() {
  return (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  );
}
\`\`\`

### 2. Use className Instead of class
\`\`\`jsx
// Correct
<div className="header">Hello</div>
\`\`\`

### 3. Self-Close Tags
\`\`\`jsx
// Correct
<img src="image.jpg" alt="Description" />
<input type="text" />
\`\`\`

### 4. JavaScript in JSX
\`\`\`jsx
function Welcome({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old</p>
    </div>
  );
}
\`\`\``
        },
        {
          id: 2,
          title: "Components and Props",
          description: "Create functional components and learn to pass data with props",
          content: `# Components and Props

Components are the building blocks of React applications.

## Functional Components

\`\`\`jsx
// Simple component
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
}
\`\`\`

## Props: Passing Data

\`\`\`jsx
// Component receiving props
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
}
\`\`\`

## Key Rules for Props:

1. **Props are Read-Only**: Never modify props directly
2. **Props Flow Down**: From parent to child components
3. **Default Props**: Provide fallback values`
        },
        {
          id: 3,
          title: "Component Best Practices",
          description: "Learn naming conventions and component patterns",
          content: `# Component Best Practices

Writing clean, maintainable components is crucial.

## Naming Conventions

### Component Names
\`\`\`jsx
// PascalCase for components
function UserProfile() { }
const NavigationBar = () => { };
\`\`\`

### File Names
\`\`\`jsx
// Match component name
UserProfile.jsx
NavigationBar.jsx
\`\`\`

## Component Structure

\`\`\`jsx
function UserCard({ user, onEdit }) {
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
}
\`\`\`

## Single Responsibility

Each component should have one clear purpose.`
        }
      ]
    },
    {
      id: 1,
      title: "State Management with React Hooks",
      description: "Master useState, useEffect, and manage component state effectively",
      lessons: [
        {
          id: 0,
          title: "Understanding State with useState",
          description: "Learn how to add and manage state in functional components",
          content: `# State Management with useState

State allows components to "remember" information and react to user interactions.

## useState Hook Basics

\`\`\`jsx
import { useState } from 'react';

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
}
\`\`\`

## How useState Works:

1. **Initialization**: \`useState(0)\` sets initial state to 0
2. **Destructuring**: \`[count, setCount]\` gives current value and setter
3. **Updates**: Calling \`setCount(newValue)\` triggers re-render`,
          videoUrl: "https://www.youtube.com/embed/lw7IumbVH_A"
        },
        {
          id: 1,
          title: "Side Effects and useEffect",
          description: "Handle API calls, subscriptions, and other side effects",
          content: `# Side Effects with useEffect

The useEffect hook lets you perform side effects in functional components.

## What are Side Effects?

- Data fetching from APIs
- Setting up subscriptions
- Manually changing the DOM
- Setting timers

## useEffect Basic Syntax

\`\`\`jsx
import { useState, useEffect } from 'react';

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
}
\`\`\``
        },
        {
          id: 2,
          title: "Custom Hooks",
          description: "Create reusable logic with custom hooks",
          content: `# Custom Hooks

Custom hooks let you extract component logic into reusable functions.

## Basic Custom Hook

\`\`\`jsx
function useCounter(initialValue = 0) {
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
}
\`\`\``
        },
        {
          id: 3,
          title: "Advanced State Patterns",
          description: "Manage complex state with useReducer and Context API",
          content: `# Advanced State Management

For complex state logic, use useReducer and Context API.

## useReducer

\`\`\`jsx
import { useReducer } from 'react';

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
}
\`\`\``
        }
      ]
    },
    {
      id: 2,
      title: "Component Patterns & Performance",
      description: "Learn advanced component patterns and optimization techniques",
      lessons: [
        {
          id: 0,
          title: "Component Composition",
          description: "Build flexible UIs with component composition",
          content: `# Component Composition

Composition is building complex UIs from simple components.

## Children Prop

\`\`\`jsx
function Card({ title, children }) {
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
    <Card title="Welcome">
      <p>This is the card content</p>
      <button>Click me</button>
    </Card>
  );
}
\`\`\``,
          videoUrl: "https://www.youtube.com/embed/MfIoAG3e7p4"
        },
        {
          id: 1,
          title: "Performance Optimization",
          description: "Optimize React applications with memoization and code splitting",
          content: `# Performance Optimization

React provides several tools to optimize application performance.

## React.memo

\`\`\`jsx
import { memo } from 'react';

const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  // Expensive rendering logic
  return <div>{/* ... */}</div>;
});
\`\`\`

## useMemo

\`\`\`jsx
function ExpensiveCalculation({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((acc, item) => {
      return acc + item.value;
    }, 0);
  }, [items]);
  
  return <div>Total: {expensiveValue}</div>;
}
\`\`\``
        },
        {
          id: 2,
          title: "Code Splitting",
          description: "Improve load times with lazy loading and code splitting",
          content: `# Code Splitting

Code splitting helps reduce the initial bundle size.

## React.lazy and Suspense

\`\`\`jsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
\`\`\``
        },
        {
          id: 3,
          title: "Error Boundaries",
          description: "Handle errors gracefully in React applications",
          content: `# Error Boundaries

Error boundaries catch JavaScript errors anywhere in their child component tree.

## Creating Error Boundaries

\`\`\`jsx
class ErrorBoundary extends React.Component {
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
}
\`\`\``
        }
      ]
    }
  ]
}
