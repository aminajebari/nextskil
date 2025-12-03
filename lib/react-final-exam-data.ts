export interface ExamQuestion {
  question: string
  options: string[]
  correctAnswer: string
  category: string
  code?: string
}

export const finalExamQuestions: ExamQuestion[] = [
  // React Fundamentals (6 questions)
  {
    category: "React Fundamentals",
    question: "What is the primary benefit of React's component-based architecture?",
    options: [
      "Faster internet speeds",
      "Reusability and easier maintenance",
      "Reduced HTML file size",
      "Better database performance"
    ],
    correctAnswer: "Reusability and easier maintenance",
  },
  {
    category: "React Fundamentals",
    question: "In React, what does JSX compile to?",
    options: [
      "HTML",
      "CSS",
      "JavaScript function calls",
      "JSON objects"
    ],
    correctAnswer: "JavaScript function calls",
  },
  {
    category: "React Fundamentals",
    question: "What is the Virtual DOM?",
    options: [
      "A copy of the real DOM",
      "A lightweight JavaScript representation used for efficient updates",
      "A type of database",
      "A CSS framework"
    ],
    correctAnswer: "A lightweight JavaScript representation used for efficient updates",
  },
  {
    category: "React Fundamentals",
    question: "How do you pass data to a React component?",
    options: [
      "Through global variables",
      "Using props",
      "Using localStorage",
      "Through HTML attributes only"
    ],
    correctAnswer: "Using props",
  },
  {
    category: "React Fundamentals",
    question: "What must component names start with?",
    options: [
      "A number",
      "An underscore",
      "An uppercase letter",
      "A lowercase letter"
    ],
    correctAnswer: "An uppercase letter",
  },
  {
    category: "React Fundamentals",
    question: "What is the difference between props and state?",
    options: [
      "Props are mutable, state is immutable",
      "Props are passed down, state is local to component",
      "They are the same",
      "Props are for functions, state for classes"
    ],
    correctAnswer: "Props are passed down, state is local to component",
  },

  // React Hooks (8 questions)
  {
    category: "React Hooks",
    question: "What does useState return?",
    options: [
      "A state object",
      "An array with state and setter function",
      "The current state only",
      "A promise"
    ],
    correctAnswer: "An array with state and setter function",
  },
  {
    category: "React Hooks",
    question: "When does useEffect run by default?",
    options: [
      "Only once when component mounts",
      "After every render",
      "Only when dependencies change",
      "Never without explicit call"
    ],
    correctAnswer: "After every render",
  },
  {
    category: "React Hooks",
    question: "What does an empty dependency array [] in useEffect mean?",
    options: [
      "Run every render",
      "Never run",
      "Run only once after mount",
      "Run only when props change"
    ],
    correctAnswer: "Run only once after mount",
  },
  {
    category: "React Hooks",
    question: "What is the naming convention for custom hooks?",
    options: [
      "Start with lowercase",
      "Start with underscore",
      "Start with 'use'",
      "No specific convention"
    ],
    correctAnswer: "Start with 'use'",
  },
  {
    category: "React Hooks",
    question: "When should you use useReducer over useState?",
    options: [
      "Always",
      "Never",
      "For complex state logic with multiple related values",
      "Only for performance"
    ],
    correctAnswer: "For complex state logic with multiple related values",
  },
  {
    category: "React Hooks",
    question: "What does useMemo optimize?",
    options: [
      "Component rendering",
      "Expensive calculations",
      "CSS parsing",
      "Bundle size"
    ],
    correctAnswer: "Expensive calculations",
  },
  {
    category: "React Hooks",
    question: "What is useCallback used for?",
    options: [
      "Handling async operations",
      "Creating stable function references",
      "Managing form state",
      "Fetching data"
    ],
    correctAnswer: "Creating stable function references",
  },
  {
    category: "React Hooks",
    question: "How do you access context values in a component?",
    options: [
      "useContext hook",
      "Props only",
      "Global variable",
      "localStorage"
    ],
    correctAnswer: "useContext hook",
  },

  // Component Patterns (6 questions)
  {
    category: "Component Patterns",
    question: "What is composition in React?",
    options: [
      "Writing JSX",
      "Building complex UIs from simple reusable components",
      "Importing components",
      "Creating classes"
    ],
    correctAnswer: "Building complex UIs from simple reusable components",
  },
  {
    category: "Component Patterns",
    question: "What is React.memo used for?",
    options: [
      "Creating memory cache",
      "Preventing unnecessary re-renders",
      "Managing state",
      "Fetching data"
    ],
    correctAnswer: "Preventing unnecessary re-renders",
  },
  {
    category: "Component Patterns",
    question: "What is an Error Boundary?",
    options: [
      "A try-catch block",
      "A component that catches errors in child components",
      "A validation library",
      "A debugging tool"
    ],
    correctAnswer: "A component that catches errors in child components",
  },
  {
    category: "Component Patterns",
    question: "What is code splitting?",
    options: [
      "Dividing code into lines",
      "Loading only necessary code when needed",
      "Splitting large files",
      "Separating concerns"
    ],
    correctAnswer: "Loading only necessary code when needed",
  },
  {
    category: "Component Patterns",
    question: "What does the Suspense component do?",
    options: [
      "Suspends component updates",
      "Shows a fallback while loading",
      "Handles errors",
      "Manages state"
    ],
    correctAnswer: "Shows a fallback while loading",
  },
  {
    category: "Component Patterns",
    question: "What is a Higher-Order Component (HOC)?",
    options: [
      "A high-level component",
      "A function that takes a component and returns an enhanced version",
      "A component hierarchy",
      "A type of class component"
    ],
    correctAnswer: "A function that takes a component and returns an enhanced version",
  },

  // Routing (5 questions)
  {
    category: "Routing",
    question: "What is React Router used for?",
    options: [
      "API routing",
      "Navigation in single-page applications",
      "Database routing",
      "File system routing"
    ],
    correctAnswer: "Navigation in single-page applications",
  },
  {
    category: "Routing",
    question: "How do you extract URL parameters in React Router?",
    options: [
      "useSearchParams()",
      "useParams()",
      "getParams()",
      "queryParams()"
    ],
    correctAnswer: "useParams()",
  },
  {
    category: "Routing",
    question: "What component renders nested route elements?",
    options: [
      "Route",
      "Routes",
      "Outlet",
      "Navigate"
    ],
    correctAnswer: "Outlet",
  },
  {
    category: "Routing",
    question: "What hook is used for programmatic navigation?",
    options: [
      "useRouter()",
      "useNavigate()",
      "useLink()",
      "useRoute()"
    ],
    correctAnswer: "useNavigate()",
  },
  {
    category: "Routing",
    question: "What does a dynamic route path look like?",
    options: [
      "/user",
      "/user/:id",
      "/user/*",
      "/user?id"
    ],
    correctAnswer: "/user/:id",
  },

  // State Management (5 questions)
  {
    category: "State Management",
    question: "What does Context API help avoid?",
    options: [
      "Using hooks",
      "Prop drilling",
      "Component rendering",
      "State updates"
    ],
    correctAnswer: "Prop drilling",
  },
  {
    category: "State Management",
    question: "How do you create a context?",
    options: [
      "new Context()",
      "createContext()",
      "useState()",
      "useContext()"
    ],
    correctAnswer: "createContext()",
  },
  {
    category: "State Management",
    question: "What component makes context available to children?",
    options: [
      "Context",
      "useContext",
      "Provider",
      "Consumer"
    ],
    correctAnswer: "Provider",
  },
  {
    category: "State Management",
    question: "How do you prevent unnecessary re-renders with Context?",
    options: [
      "Use useState",
      "Use memo for children",
      "Wrap value in useMemo",
      "Never possible"
    ],
    correctAnswer: "Wrap value in useMemo",
  },
  {
    category: "State Management",
    question: "When should you use useReducer with Context?",
    options: [
      "Never",
      "Always",
      "For complex state logic shared across app",
      "Only for async operations"
    ],
    correctAnswer: "For complex state logic shared across app",
  },

  // Data Fetching (5 questions)
  {
    category: "Data Fetching",
    question: "Where should you fetch data in a component?",
    options: [
      "In render method",
      "In useEffect hook",
      "In constructor",
      "At module level"
    ],
    correctAnswer: "In useEffect hook",
  },
  {
    category: "Data Fetching",
    question: "What HTTP method creates new data?",
    options: [
      "GET",
      "DELETE",
      "POST",
      "PATCH"
    ],
    correctAnswer: "POST",
  },
  {
    category: "Data Fetching",
    question: "How do you handle errors with async/await fetch?",
    options: [
      ".then() only",
      ".catch() only",
      "try/catch block",
      "Ignore them"
    ],
    correctAnswer: "try/catch block",
  },
  {
    category: "Data Fetching",
    question: "What should a loading state prevent?",
    options: [
      "All renders",
      "Multiple simultaneous requests",
      "Component mounting",
      "Error handling"
    ],
    correctAnswer: "Multiple simultaneous requests",
  },
  {
    category: "Data Fetching",
    question: "Why create custom hooks for fetching?",
    options: [
      "Required by React",
      "Reduces code duplication",
      "Makes fetching faster",
      "Mandatory for production"
    ],
    correctAnswer: "Reduces code duplication",
  },

  // Performance & Testing (4 questions)
  {
    category: "Performance & Testing",
    question: "What does React.memo do?",
    options: [
      "Manages memory",
      "Prevents re-renders when props are same",
      "Creates memos",
      "Handles errors"
    ],
    correctAnswer: "Prevents re-renders when props are same",
  },
  {
    category: "Performance & Testing",
    question: "What library is recommended for testing React components?",
    options: [
      "Jasmine",
      "Mocha",
      "React Testing Library",
      "Jest only"
    ],
    correctAnswer: "React Testing Library",
  },
  {
    category: "Performance & Testing",
    question: "What should you test in components?",
    options: [
      "Implementation details",
      "Internal state",
      "User behavior and outcomes",
      "Private methods"
    ],
    correctAnswer: "User behavior and outcomes",
  },
  {
    category: "Performance & Testing",
    question: "What is lazy loading in React?",
    options: [
      "Slow rendering",
      "Loading components only when needed",
      "Delayed state updates",
      "Async functions"
    ],
    correctAnswer: "Loading components only when needed",
  },

  // TypeScript (4 questions)
  {
    category: "TypeScript",
    question: "Why use TypeScript with React?",
    options: [
      "Makes code faster",
      "Required for production",
      "Provides type safety and catches errors",
      "Reduces bundle size"
    ],
    correctAnswer: "Provides type safety and catches errors",
  },
  {
    category: "TypeScript",
    question: "How do you type Props in React?",
    options: [
      "const Props = {}",
      "interface Props {}",
      "Both interface and type",
      "Only with any"
    ],
    correctAnswer: "Both interface and type",
  },
  {
    category: "TypeScript",
    question: "How do you type useState with a number?",
    options: [
      "useState(0)",
      "useState<number>(0)",
      "useState: number",
      "type count = number"
    ],
    correctAnswer: "useState<number>(0)",
  },
  {
    category: "TypeScript",
    question: "What is a union type useful for?",
    options: [
      "Combining multiple types",
      "Restricting values to specific options",
      "Creating classes",
      "Managing state"
    ],
    correctAnswer: "Restricting values to specific options",
  },

  // Advanced React (2 questions)
  {
    category: "Advanced React",
    question: "What is the render props pattern?",
    options: [
      "Using props to render JSX",
      "A component accepting function as prop",
      "Rendering prop values",
      "Using render() method"
    ],
    correctAnswer: "A component accepting function as prop",
  },
  {
    category: "Advanced React",
    question: "What are compound components?",
    options: [
      "Complex components",
      "Components working together as a unit",
      "Nested components",
      "Multiple exported components"
    ],
    correctAnswer: "Components working together as a unit",
  }
]
