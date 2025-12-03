export interface ExamQuestion {
  question: string
  options: string[]
  correctAnswer: string
  category: string
  code?: string
}

export const exampleExamQuestions: ExamQuestion[] = [
  // Fundamentals (10 questions)
  {
    category: "React Fundamentals",
    question: "What does React stand for?",
    options: [
      "Real Easy Application Transform",
      "A JavaScript library for building UIs",
      "Responsive Ecosystem Application Tool",
      "Real Equipment Analysis Code"
    ],
    correctAnswer: "A JavaScript library for building UIs",
  },
  {
    category: "React Fundamentals",
    question: "What is the main difference between props and state?",
    options: [
      "No difference",
      "Props are immutable, passed from parent; state is mutable, local",
      "State is immutable, props are mutable",
      "Props are for classes, state for functions"
    ],
    correctAnswer: "Props are immutable, passed from parent; state is mutable, local",
  },
  {
    category: "React Fundamentals",
    question: "What does useState return?",
    options: [
      "An object with state",
      "An array with [value, setValue]",
      "A promise",
      "A single value"
    ],
    correctAnswer: "An array with [value, setValue]",
  },
  {
    category: "React Fundamentals",
    question: "What does ReactDOM.render do?",
    options: [
      "Creates a React component",
      "Renders a React component to the DOM",
      "Compiles JSX",
      "Manages state"
    ],
    correctAnswer: "Renders a React component to the DOM",
  },
  {
    category: "React Fundamentals",
    question: "What is JSX?",
    options: [
      "JavaScript JSON",
      "A syntax extension for JavaScript that looks like HTML",
      "A React framework",
      "A CSS library"
    ],
    correctAnswer: "A syntax extension for JavaScript that looks like HTML",
  },
  {
    category: "React Fundamentals",
    question: "How do you render conditional content in React?",
    options: [
      "Using if statements",
      "Using ternary operators or logical &&",
      "Using switch statements",
      "It's not possible"
    ],
    correctAnswer: "Using ternary operators or logical &&",
  },
  {
    category: "React Fundamentals",
    question: "What is the purpose of the key prop in lists?",
    options: [
      "To identify unique elements",
      "To improve performance of list rendering",
      "To sort items",
      "To add styling"
    ],
    correctAnswer: "To identify unique elements",
  },
  {
    category: "React Fundamentals",
    question: "What happens if you don't use keys in a list?",
    options: [
      "Nothing, keys are optional",
      "React can't identify changes properly",
      "Performance improves",
      "Items get sorted"
    ],
    correctAnswer: "React can't identify changes properly",
  },
  {
    category: "React Fundamentals",
    question: "How do you handle click events in React?",
    options: [
      "onclick='handler()'",
      "onClick={handler}",
      "on-click={handler}",
      "click={handler}"
    ],
    correctAnswer: "onClick={handler}",
  },
  {
    category: "React Fundamentals",
    question: "What is the recommended way to create a React component?",
    options: [
      "Class components only",
      "Functional components with hooks",
      "Only function declarations",
      "Using React.createClass()"
    ],
    correctAnswer: "Functional components with hooks",
  },

  // Hooks Deep Dive (8 questions)
  {
    category: "React Hooks",
    question: "When does useEffect run?",
    options: [
      "Only once",
      "Never",
      "After every render by default",
      "Before render"
    ],
    correctAnswer: "After every render by default",
  },
  {
    category: "React Hooks",
    question: "What does dependencies array [] mean in useEffect?",
    options: [
      "No dependencies",
      "Run every render",
      "Run only on mount and unmount",
      "Don't run"
    ],
    correctAnswer: "Run only on mount and unmount",
  },
  {
    category: "React Hooks",
    question: "How do you clean up after useEffect?",
    options: [
      "Return a function that cleans up",
      "Use a finally block",
      "Call cleanup separately",
      "It's automatic"
    ],
    correctAnswer: "Return a function that cleans up",
  },
  {
    category: "React Hooks",
    question: "What is the purpose of useContext?",
    options: [
      "To create context",
      "To access context values without prop drilling",
      "To manage routing",
      "To fetch data"
    ],
    correctAnswer: "To access context values without prop drilling",
  },
  {
    category: "React Hooks",
    question: "When should you use useReducer?",
    options: [
      "For simple counters",
      "For complex state with multiple values",
      "Always instead of useState",
      "Never, use Redux instead"
    ],
    correctAnswer: "For complex state with multiple values",
  },
  {
    category: "React Hooks",
    question: "What does useRef return?",
    options: [
      "Current value only",
      "An object with .current property",
      "An array",
      "A promise"
    ],
    correctAnswer: "An object with .current property",
  },
  {
    category: "React Hooks",
    question: "What is the purpose of useMemo?",
    options: [
      "Manage memory automatically",
      "Memoize expensive computations",
      "Render components faster",
      "Store values in cache"
    ],
    correctAnswer: "Memoize expensive computations",
  },
  {
    category: "React Hooks",
    question: "Can you use hooks outside of components?",
    options: [
      "Yes, anywhere",
      "No, only at top level of components",
      "Only in classes",
      "Only in services"
    ],
    correctAnswer: "No, only at top level of components",
  },

  // Components & Rendering (10 questions)
  {
    category: "Components & Rendering",
    question: "What is the Virtual DOM?",
    options: [
      "A copy of the real DOM",
      "React's in-memory representation",
      "A browser feature",
      "A state management tool"
    ],
    correctAnswer: "React's in-memory representation",
  },
  {
    category: "Components & Rendering",
    question: "How does React optimize rendering?",
    options: [
      "It doesn't",
      "Reconciliation - comparing Virtual DOM with real DOM",
      "By removing CSS",
      "By caching everything"
    ],
    correctAnswer: "Reconciliation - comparing Virtual DOM with real DOM",
  },
  {
    category: "Components & Rendering",
    question: "What is a controlled component?",
    options: [
      "A component with a controller",
      "A component whose value is controlled by React state",
      "A component with event handlers",
      "A component in a div"
    ],
    correctAnswer: "A component whose value is controlled by React state",
  },
  {
    category: "Components & Rendering",
    question: "What is an uncontrolled component?",
    options: [
      "A component without props",
      "A component that manages its own DOM",
      "A broken component",
      "A component without hooks"
    ],
    correctAnswer: "A component that manages its own DOM",
  },
  {
    category: "Components & Rendering",
    question: "How do you prevent a component from rendering?",
    options: [
      "Return null from render",
      "Return false",
      "Don't mount it",
      "All of the above"
    ],
    correctAnswer: "Return null from render",
  },
  {
    category: "Components & Rendering",
    question: "What does React.memo do?",
    options: [
      "Creates memos",
      "Prevents re-renders for same props",
      "Manages memory",
      "Renders components slowly"
    ],
    correctAnswer: "Prevents re-renders for same props",
  },
  {
    category: "Components & Rendering",
    question: "When does React unmount a component?",
    options: [
      "Never",
      "When component is removed from tree",
      "When state changes",
      "When props change"
    ],
    correctAnswer: "When component is removed from tree",
  },
  {
    category: "Components & Rendering",
    question: "What is a pure component?",
    options: [
      "A component with only pure functions",
      "A component that returns same output for same props",
      "A functional component",
      "A component without side effects"
    ],
    correctAnswer: "A component that returns same output for same props",
  },
  {
    category: "Components & Rendering",
    question: "How do you render lists in React?",
    options: [
      "Using for loops",
      "Using .map() with key prop",
      "Using forEach",
      "Repeating JSX"
    ],
    correctAnswer: "Using .map() with key prop",
  },
  {
    category: "Components & Rendering",
    question: "What happens if you use index as key in lists?",
    options: [
      "Nothing, it's fine",
      "Performance issues and bugs with reordering",
      "Code gets faster",
      "It's required"
    ],
    correctAnswer: "Performance issues and bugs with reordering",
  },

  // Routing (6 questions)
  {
    category: "Routing",
    question: "What library is used for routing in React?",
    options: [
      "Next.js only",
      "React Router",
      "Built into React",
      "Routing is not possible"
    ],
    correctAnswer: "React Router",
  },
  {
    category: "Routing",
    question: "What does the Route component do?",
    options: [
      "Handles HTTP requests",
      "Renders component for a path",
      "Manages navigation",
      "Defines URLs"
    ],
    correctAnswer: "Renders component for a path",
  },
  {
    category: "Routing",
    question: "What is the Link component?",
    options: [
      "HTML anchor tag",
      "A component for internal navigation without page reload",
      "A hook for routing",
      "External links only"
    ],
    correctAnswer: "A component for internal navigation without page reload",
  },
  {
    category: "Routing",
    question: "How do you get current route parameters?",
    options: [
      "window.location",
      "useParams() hook",
      "props.match",
      "route parameter"
    ],
    correctAnswer: "useParams() hook",
  },
  {
    category: "Routing",
    question: "What is nested routing?",
    options: [
      "Routes inside routes",
      "Router inside router",
      "URL parameters",
      "Routing with depth"
    ],
    correctAnswer: "Routes inside routes",
  },
  {
    category: "Routing",
    question: "What does the Outlet component do?",
    options: [
      "Exits the router",
      "Renders child route elements",
      "Handles errors",
      "Provides context"
    ],
    correctAnswer: "Renders child route elements",
  },

  // State Management (6 questions)
  {
    category: "State Management",
    question: "What is the Context API used for?",
    options: [
      "API calls",
      "Sharing state without prop drilling",
      "Managing routing",
      "Server communication"
    ],
    correctAnswer: "Sharing state without prop drilling",
  },
  {
    category: "State Management",
    question: "What is prop drilling?",
    options: [
      "Passing props through many levels",
      "Debugging props",
      "Props object",
      "Property drilling"
    ],
    correctAnswer: "Passing props through many levels",
  },
  {
    category: "State Management",
    question: "What is the Provider component?",
    options: [
      "A data provider",
      "Makes context available to children",
      "An API provider",
      "A service provider"
    ],
    correctAnswer: "Makes context available to children",
  },
  {
    category: "State Management",
    question: "Can you use multiple contexts in one app?",
    options: [
      "No, only one",
      "Yes, multiple contexts can be used",
      "Only with Redux",
      "Not recommended"
    ],
    correctAnswer: "Yes, multiple contexts can be used",
  },
  {
    category: "State Management",
    question: "What is the difference between Context and Redux?",
    options: [
      "No difference",
      "Context is simpler, Redux is for complex state",
      "Redux is built-in",
      "Context uses provider, Redux doesn't"
    ],
    correctAnswer: "Context is simpler, Redux is for complex state",
  },
  {
    category: "State Management",
    question: "How do you avoid unnecessary re-renders with Context?",
    options: [
      "Can't avoid",
      "Use React.memo",
      "Split contexts, use useMemo",
      "Never update"
    ],
    correctAnswer: "Split contexts, use useMemo",
  },

  // Performance (4 questions)
  {
    category: "Performance",
    question: "What is code splitting?",
    options: [
      "Splitting code into files",
      "Lazy loading components",
      "Dividing code logically",
      "Minifying code"
    ],
    correctAnswer: "Lazy loading components",
  },
  {
    category: "Performance",
    question: "What does lazy() and Suspense do?",
    options: [
      "Nothing useful",
      "Load components on demand and show fallback",
      "Makes components lazy",
      "Delays rendering"
    ],
    correctAnswer: "Load components on demand and show fallback",
  },
  {
    category: "Performance",
    question: "What is an Error Boundary?",
    options: [
      "A boundary line",
      "Catches errors in child components",
      "A type of route",
      "An error handler"
    ],
    correctAnswer: "Catches errors in child components",
  },
  {
    category: "Performance",
    question: "What is the key metric for React performance?",
    options: [
      "File size only",
      "Render time and updates",
      "Bundle size only",
      "Number of components"
    ],
    correctAnswer: "Render time and updates",
  },

  // Data Fetching (5 questions)
  {
    category: "Data Fetching",
    question: "Where should you fetch data in React?",
    options: [
      "In render()",
      "In useEffect()",
      "In constructor()",
      "In props"
    ],
    correctAnswer: "In useEffect()",
  },
  {
    category: "Data Fetching",
    question: "How do you handle loading state?",
    options: [
      "Ignore it",
      "Show loading indicator while fetching",
      "It's automatic",
      "Use spinner package"
    ],
    correctAnswer: "Show loading indicator while fetching",
  },
  {
    category: "Data Fetching",
    question: "What is the proper way to fetch data?",
    options: [
      "XMLHttpRequest",
      "fetch() API or axios",
      "jQuery AJAX",
      "Reload page"
    ],
    correctAnswer: "fetch() API or axios",
  },
  {
    category: "Data Fetching",
    question: "How do you prevent race conditions?",
    options: [
      "Ignore them",
      "Use AbortController or cleanup",
      "Never fetch twice",
      "Disable fetching"
    ],
    correctAnswer: "Use AbortController or cleanup",
  },
  {
    category: "Data Fetching",
    question: "What should you do with fetched data?",
    options: [
      "Log to console",
      "Store in state with error handling",
      "Save to localStorage",
      "Return from component"
    ],
    correctAnswer: "Store in state with error handling",
  }
]
