# Redux Practice Project

A hands-on learning project to master Redux, React, and modern state management patterns. This project demonstrates core Redux concepts, custom implementations, and best practices.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Learning Outcomes](#learning-outcomes)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [How to Run](#how-to-run)

---

## Project Overview

This project is a comprehensive exploration of Redux and state management in React. It covers everything from basic reducers to advanced patterns like the DUCK pattern and custom Redux store implementations. The app simulates a simple e-commerce experience with product listing, cart, and wishlist functionality.

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
  - Connected Redux with React using `react-redux`'s `Provider`
  - Used React Router for page navigation
- **Best Practices:**
  - Feature-based folder structure
  - Clean, readable code and modular components

## Project Structure

```
redux-practice/
├── components/         # Reusable UI components (CartItem, Header, Products, WishListItem)
├── pages/              # Main app pages (Home, Cart, WishList)
├── store/              # Redux store, reducers, and product data
├── reduxLearning/      # Step-by-step learning modules:
│   ├── 1. Learn about redux/         # Basic Redux concepts
│   ├── 2. custom Redux/              # Custom Redux implementation
│   ├── 3. product cart wishlist redux/ # Cart & wishlist logic
│   ├── 4. combined Reducers/         # Using combineReducers
│   └── 5. DUCK Pattern/              # DUCK pattern structure
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

> _This project is a showcase of Redux mastery, custom state management, and clean React architecture_
