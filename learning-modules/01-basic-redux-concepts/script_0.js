// let reduxState = {
//   post: 0,
//   name: "Alya Albora",
//   age: 30,
// };

import { createStore } from "redux";

// function reducer(state, action) {
//   if (action.type === "post/increment") {
//     return { ...state, post: state.post + 1 };
//   } else if (action.type === "post/decrement") {
//     return { ...state, post: state.post - 1 };
//   } else if (action.type === "post/incrementBy") {
//     return { ...state, post: state.post + action.payload };
//   }
//   return state;
// }

// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: "post/decrement" });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: "post/decrement" });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: "post/incrementBy", payload: 1000 });
// console.log(reduxState);

// ---------- By Redux ------------ //

const initialState = {
  post: 0,
  name: "Alya Albora",
  age: 30,
};

const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREMENT_BY = "post/incrementBy";
const DECREMENT_BY = "post/decrementBy";

// function reducer(state = initialState, action) {
//   if (action.type === INCREMENT) {
//     return { ...state, post: state.post + 1 };
//   } else if (action.type === DECREMENT) {
//     return { ...state, post: state.post - 1 };
//   } else if (action.type === INCREMENT_BY) {
//     return { ...state, post: state.post + action.payload };
//   } else if (action.type === DECREMENT_BY) {
//     return { ...state, post: state.post - action.payload };
//   }

//   return state;
// }

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, post: state.post + 1 };
    case DECREMENT:
      return { ...state, post: state.post - 1 };
    case INCREMENT_BY:
      return { ...state, post: state.post + action.payload };
    case DECREMENT_BY:
      return { ...state, post: state.post - action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

const postClass = document.querySelector("#post-count");
store.subscribe(() => {
  // console.log(store.getState());
  postClass.innerHTML = store.getState().post;
});

store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
// store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCREMENT_BY, payload: 20 });
// store.dispatch({ type: DECREMENT_BY, payload: 9 });

// store.subscribe()

postClass.addEventListener("click", () => {
  store.dispatch({ type: INCREMENT });
});
