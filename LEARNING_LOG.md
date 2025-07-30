# Frontend Development Learning Log

## JavaScript Fundamentals

### DOM Manipulation

#### QuerySelector vs Other Selectors

**querySelector()**

- Returns the first element that matches the CSS selector
- More flexible than getElementById
- Can use any CSS selector (class, id, attribute, etc.)
- Returns null if no match found

```javascript
// Examples
const element = document.querySelector(".my-class");
const elementById = document.querySelector("#my-id");
const elementByAttribute = document.querySelector('[data-testid="button"]');
```

**getElementById()**

- Only works with ID selectors
- Faster performance than querySelector
- Returns null if no match found
- Cannot use class names or other selectors

```javascript
const element = document.getElementById("my-id");
```

**getElementsByClassName()**

- Returns HTMLCollection of all elements with the class
- Live collection (updates automatically)
- Cannot use other selectors

```javascript
const elements = document.getElementsByClassName("my-class");
```

**getElementsByTagName()**

- Returns HTMLCollection of all elements with the tag
- Live collection
- Only works with tag names

```javascript
const divs = document.getElementsByTagName("div");
```

### Function Concepts

#### Curry Function

A function that takes multiple arguments and returns a function that takes the remaining arguments.

**Infinite Currying**: Currying that can accept unlimited arguments

```javascript
function multiplyFn(x) {
  return function (y) {
    if (y != null) {
      return multiplyFn(x * y);
    } else return x;
  };
}

console.log(multiplyFn(3)(2)(10)(2)()); // 120
```

**Partial Application**: Pre-filling some arguments of a function

```javascript
const multiply = (a, b) => a * b;
const multiplyBy5 = multiply.bind(null, 5);
console.log(multiplyBy5(6)); // 30
```

**Currying Use Cases**:

- **Customizable Logging**: `const log = level => message => console.log(\`[${level}] ${message}\`)`
- **Function Reuse**: `const double = multiply(2); double(5); // 10`
- **Flexible Configuration**: API request builders

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Curried function
function curryAdd(a) {
  return function (b) {
    return a + b;
  };
}

// Usage
const add5 = curryAdd(5);
console.log(add5(3)); // 8

// Modern arrow function curry
const modernCurry = (a) => (b) => a + b;
```

#### Call, Apply, and Bind

**call()**

- Invokes function with specified this context and arguments
- Arguments passed individually

```javascript
function greet(name) {
  return `Hello ${name}, I'm ${this.name}`;
}

const person = { name: "John" };
greet.call(person, "Alice"); // "Hello Alice, I'm John"
```

**apply()**

- Similar to call but arguments passed as array
- Useful when you have an array of arguments

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
sum.apply(null, numbers); // 6
```

**bind()**

- Returns a new function with fixed this context
- Arguments can be partially applied
- Function is not immediately executed

```javascript
function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(null, 2);
console.log(multiplyByTwo(5)); // 10
```

#### IIFE (Immediately Invoked Function Expression)

A function that runs as soon as it's defined.

```javascript
// Basic IIFE
(function () {
  console.log("I run immediately!");
})();

// IIFE with parameters
(function (name) {
  console.log(`Hello ${name}!`);
})("World");

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE");
})();

// IIFE with return value
const result = (function () {
  return "I return a value";
})();
```

## React Concepts

### Component Architecture

- **Functional Components**: Modern React approach using hooks
- **Class Components**: Legacy approach with lifecycle methods
- **Component Composition**: Building complex UIs from simple components

### State Management Comparison

#### Context API vs Redux

**Context API**

- Built into React, no additional dependencies
- Simpler setup for small to medium applications
- Good for theme, authentication, language preferences
- Less boilerplate code
- No built-in dev tools
- Can cause unnecessary re-renders if not optimized

```javascript
// Context API Example
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

**Redux Toolkit**

- More powerful for complex state management
- Built-in dev tools and time-travel debugging
- Predictable state updates with reducers
- Better for large applications with complex state
- More boilerplate but more structured
- Excellent for e-commerce, dashboards, complex UIs

```javascript
// Redux Toolkit Example
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
```

**When to Use Which:**

- **Context API**: Simple state, theme, auth, small apps
- **Redux**: Complex state, multiple reducers, large apps, need dev tools

### State Management

#### Redux Core Concepts

**Store**: The single source of truth for application state

```javascript
const store = createStore(reducer, initialState);
```

**Actions**: Plain objects describing what happened

```javascript
{ type: 'cart/addItem', payload: { id: 1, quantity: 1 } }
```

**Reducers**: Pure functions that take state and action, return new state

```javascript
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
```

**Dispatch**: Method to send actions to the store

```javascript
store.dispatch({ type: "INCREMENT" });
```

**Subscribe**: Method to listen for state changes

```javascript
store.subscribe(() => {
  console.log("State changed:", store.getState());
});
```

#### Redux Toolkit

- **createSlice**: Simplified reducer creation with immer
- **configureStore**: Enhanced store configuration
- **useSelector**: Hook to access state
- **useDispatch**: Hook to dispatch actions

````javascript
// Slice creation
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

#### Redux Patterns

**Action Creators**: Functions that create action objects
```javascript
export const addCartItem = (productId, quantity = 1) => ({
  type: 'cart/addItem',
  payload: { productId, quantity }
});
````

**Duck Pattern**: Co-locating actions, reducers, and selectors

```javascript
// cartSlice.js
const ADD_ITEM = "cart/addItem";
const REMOVE_ITEM = "cart/removeItem";

export const addItem = (productId) => ({ type: ADD_ITEM, payload: productId });
export const removeItem = (productId) => ({
  type: REMOVE_ITEM,
  payload: productId,
});

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
```

**Combined Reducers**: Splitting state logic into multiple reducers

```javascript
const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  products: productsReducer,
});
```

````

#### State Patterns

- **Local State**: Component-level state with useState
- **Global State**: Application-wide state with Redux
- **Derived State**: Computed values from existing state

### Hooks Deep Dive

#### useState

```javascript
const [state, setState] = useState(initialValue);
const [count, setCount] = useState(0);
```

#### Custom React-Redux Connector

**Provider Pattern**: Creating a context provider for Redux
```javascript
const StoreContext = createContext();

export function Provider({ store, children }) {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch: store.dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
```

**Custom Hooks**: Creating useSelector and useDispatch
```javascript
export const useDispatch = () => {
  const store = useContext(StoreContext);
  return store.dispatch;
};

export const useSelector = (selectorFn) => {
  const store = useContext(StoreContext);
  const state = store.state;
  return selectorFn(state);
};
````

#### useEffect

```javascript
// ComponentDidMount equivalent
useEffect(() => {
  // Side effect
}, []);

// ComponentDidUpdate equivalent
useEffect(() => {
  // Side effect
}, [dependency]);

// ComponentWillUnmount equivalent
useEffect(() => {
  return () => {
    // Cleanup
  };
}, []);
```

#### useReducer

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

## State Immutability

#### Immer Library

**Without Immer**: Manual immutable updates

```javascript
// Complex nested state update
const newState = {
  ...state,
  cartItems: state.cartItems.map((item) =>
    item.id === action.payload.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  ),
};
```

**With Immer**: Simplified immutable updates

```javascript
import { produce } from "immer";

const newState = produce(state, (draft) => {
  const item = draft.cartItems.find((item) => item.id === action.payload.id);
  if (item) {
    item.quantity += 1;
  }
});
```

**Benefits of Immer**:

- Write mutable code, get immutable updates
- Reduces boilerplate code
- Prevents accidental mutations
- Better performance with large state trees

### Responsive Design

- **Viewport Units**: vw, vh, vmin, vmax

## Development Tools

### Build Tools

- **Vite**: Fast build tool and dev server
- **Webpack**: Module bundler
- **Babel**: JavaScript compiler

### Redux DevTools

**Browser Extension**: Time-travel debugging and state inspection

```javascript
// Enable Redux DevTools
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
```

**Features**:

- State inspection
- Action history
- Time-travel debugging
- State diffs
- Performance monitoring

### Package Management

- **npm**: Node package manager
- **yarn**: Alternative package manager
- **pnpm**: Fast, disk space efficient package manager

## Best Practices

### Code Organization

- **Separation of Concerns**: UI, logic, and data management
- **Component Composition**: Reusable, composable components
- **File Structure**: Logical organization of code

### Performance

- **Memoization**: React.memo, useMemo, useCallback
- **Code Splitting**: Lazy loading of components
- **Bundle Optimization**: Tree shaking, minification

### Testing

- **Unit Testing**: Testing individual functions/components
- **Integration Testing**: Testing component interactions
- **E2E Testing**: Testing complete user workflows

## Advanced Concepts

### Asynchronous JavaScript

- **Promises**: Handle async operations
- **async/await**: Syntactic sugar for promises
- **Event Loop**: JavaScript execution model

#### Fetch API

**Basic Fetch**: Making HTTP requests

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

**Async/Await with Fetch**:

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
```

**Function Borrowing**: Using call/apply to borrow methods

```javascript
const user1 = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const user2 = {
  firstName: "Jane",
  lastName: "Smith",
};

// Borrow the method
user1.getFullName.call(user2); // "Jane Smith"
```

### Modern JavaScript Features

- **Destructuring**: Extract values from objects/arrays
- **Spread/Rest Operators**: Copy and combine data
- **Template Literals**: String interpolation
- **Arrow Functions**: Concise function syntax

#### Array Methods

**map()**: Transform each element in an array

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2); // [2, 4, 6, 8, 10]
```

**filter()**: Create new array with elements that pass test

```javascript
const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 22 },
];
const adults = students.filter((student) => student.age >= 18);
```

**reduce()**: Reduce array to single value

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15

// Without initial value (uses first element)
const sum2 = numbers.reduce((acc, curr) => acc + curr); // 15
```

**find()**: Find first element that passes test

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const user = users.find((user) => user.id === 2); // { id: 2, name: "Bob" }
```

### Design Patterns

- **Observer Pattern**: Event handling
- **Factory Pattern**: Object creation
- **Singleton Pattern**: Single instance
- **Module Pattern**: Encapsulation

#### Memoization Pattern

**Basic Memoization**: Caching function results

```javascript
function memoizedCalculation() {
  const cache = {};
  return function doHeavyCalculation(x) {
    if (cache[x]) return cache[x];

    // Expensive calculation
    const result = Math.sqrt(x);
    cache[x] = result;
    return result;
  };
}

const memoizedCalc = memoizedCalculation();
console.log(memoizedCalc(4)); // Calculates
console.log(memoizedCalc(4)); // Returns from cache
```

**Closure for Privacy**: Using closures to create private variables

```javascript
function createCounter() {
  let count = 0; // Private variable
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.getCount()); // 2
```

#### Custom Redux Store Implementation

**Store Creation**: Understanding Redux internals

```javascript
function myCreateStore(reducer) {
  let state;
  const listeners = [];

  const store = {
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    getState() {
      return state;
    },
    subscribe(listener) {
      listeners.push(listener);
      return () => {
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    },
  };

  state = reducer(state, { type: "@@INIT" });
  return store;
}
```

---

_This learning log is a living document. It will get updated as we learn new concepts and techniques!_
