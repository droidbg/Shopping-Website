# Redux Practice Project

A hands-on learning project to master Redux, React, and modern state management patterns. This project demonstrates core Redux concepts, custom implementations, and best practices.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Learning Outcomes](#learning-outcomes)
- [Learning Modules Breakdown](#learning-modules-breakdown)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [How to Run](#how-to-run)

---

## Project Overview

This project is a comprehensive exploration of Redux and state management in React. It covers everything from basic reducers to advanced patterns like the DUCK pattern, custom Redux store implementations, and even a custom React-Redux connector. The app simulates a simple e-commerce experience with product listing, cart, and wishlist functionality, and is structured to facilitate learning and experimentation.

## About the Website

This website is a demo e-commerce platform that showcases a variety of products. Users can:

- Browse a list of products with detailed information
- Add products to their cart or wishlist
- Remove products from the cart or wishlist
- Adjust product quantities in the cart

All these features are powered by Redux for robust and predictable state management, ensuring a seamless and responsive user experience.

## Features

- Product listing with detailed information
- Add/remove products to cart and wishlist
- Adjust product quantities in cart
- Persistent state management using Redux
- Modular React components for UI
- Navigation using React Router
- Clean, scalable code structure
- Step-by-step learning modules for Redux concepts
- Custom Redux store and React-Redux connector implementations

## Learning Outcomes

While building this project, the following concepts and skills were learned and applied:

- **Array Methods:**
  - `map`, `filter`, `reduce` for transforming and aggregating data (e.g., updating cart/wishlist, calculating totals)
- **Redux Fundamentals:**
  - Actions, reducers, and the Redux store
  - Dispatching actions and subscribing to state changes
  - Using `combineReducers` for modular state management
- **Custom Redux Implementation:**
  - Built a Redux-like store from scratch to understand its internals
- **DUCK Pattern:**
  - Organized Redux logic using the DUCK pattern for better maintainability
- **React Integration:**
  - Connected Redux with React using `react-redux`'s `Provider` and a custom connector
  - Used React Router for page navigation
- **Best Practices:**
  - Feature-based folder structure
  - Clean, readable code and modular components
- **Immer Usage:**
  - Explored reducers with and without Immer for immutable state updates

## Learning Modules Breakdown

This project is organized into a series of learning modules, each focusing on a specific Redux or state management concept:

### 1. Basic Redux Concepts (`01-basic-redux-concepts`)

- Introduction to reducers, actions, and the Redux store
- Manual state updates and action dispatching
- Subscribing to state changes and updating the UI

### 2. Custom Redux Store Implementation (`02-custom-redux-store`)

- Building a Redux-like store from scratch (`myCreateStore`)
- Implementing `dispatch`, `getState`, and `subscribe` methods
- Understanding the internal mechanics of Redux

### 3. E-commerce Redux Example (`03-ecommerce-redux-example`)

- Applying Redux to a real-world scenario (cart, wishlist, products)
- Managing complex state with actions and reducers
- Handling product addition/removal and quantity adjustments

### 4. Combined Reducers (`04-combined-reducers`)

- Using `combineReducers` to modularize state management
- Splitting logic into separate reducers for products, cart, and wishlist
- Dispatching actions to different slices of state

### 5. DUCK Pattern (`05-duck-pattern`)

- Organizing Redux logic using the DUCK pattern (actions, action creators, and reducers in one file)
- Cleaner, more maintainable Redux code
- Using action creators for dispatching

### 6. Reducers Without Immer (`06-reducers-without-immer`)

- Writing reducers with manual immutable updates
- Understanding the challenges of immutability in Redux

### 7. Reducers With Immer (`07-reducers-with-immer`)

- Leveraging Immer to simplify immutable state updates in reducers
- Cleaner and more readable reducer logic

### 8. Custom React-Redux Connector (`08-custom-react-redux-connector`)

- Building a custom `Provider`, `useDispatch`, and `useSelector` hooks
- Connecting React components to a Redux-like store without `react-redux`
- Deepening understanding of React context and hooks

## Project Structure

```
redux-practice/
├── components/         # Reusable UI components (CartItem, Header, Products, WishListItem)
├── pages/              # Main app pages (Home, Cart, WishList)
├── store/              # Redux store, reducers, and product data
├── learning-modules/   # Step-by-step learning modules:
│   ├── 01-basic-redux-concepts/         # Basic Redux concepts
│   ├── 02-custom-redux-store/           # Custom Redux implementation
│   ├── 03-ecommerce-redux-example/      # Cart & wishlist logic
│   ├── 04-combined-reducers/            # Using combineReducers
│   ├── 05-duck-pattern/                 # DUCK pattern structure
│   ├── 06-reducers-without-immer/       # Reducers without Immer
│   ├── 07-reducers-with-immer/          # Reducers with Immer
│   └── 08-custom-react-redux-connector/ # Custom React-Redux connector
├── assets/             # Static assets (icons, images)
├── App.js, main.js     # App entry and setup
├── index.html          # HTML entry point
└── package.json        # Project dependencies
```

## Tech Stack

- **React** (v19+)
- **Redux** (v5+)
- **React Redux** (v9+)
- **React Router DOM** (v6+)
- **Parcel** (for bundling)

## How to Run

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd redux-practice
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:1234](http://localhost:1234) in your browser.

---

> _This project is a showcase of Redux mastery, custom state management, and clean React architecture. Each module is designed to be a reference for learning and best practices in Redux and React state management._
