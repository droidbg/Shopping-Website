import { myCreateStore } from "./customReduxStore";

const initialState = {
  post: 0,
  name: "Alya Albora",
  age: 30,
};

const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREMENT_BY = "post/incrementBy";
const DECREMENT_BY = "post/decrementBy";

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

const myStore = myCreateStore(reducer);
const postClass = document.querySelector("#post-count");
const unsubscribe = myStore.subscribe(() => {
  console.log(myStore.getState());
  postClass.innerHTML = myStore.getState().post;
});

const unsubscribe2 = myStore.subscribe(() => {
  console.log("Subscribe2");
});
const unsubscribe3 = myStore.subscribe(() => {
  console.log("Subscribe3");
});

myStore.dispatch({ type: INCREMENT });
unsubscribe3();
myStore.dispatch({ type: INCREMENT });
unsubscribe2();

myStore.dispatch({ type: INCREMENT_BY, payload: 30 });
