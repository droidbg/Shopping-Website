/**
 * This File is for Practice of Immer library ( it is used to create a new state object without mutating the original state object )
 */
import { produce } from "immer";

const state = [
  {
    name: "Alya Albora",
    age: 25,
  },
  {
    name: "Cihan Albora",
    age: 30,
  },
];

const nextState = produce(state, (draftState) => {
  draftState.push({ name: "Deniz Albora", age: 5 });
  draftState[1].age = 28;
});

// console.log(state);
// console.log(nextState);
