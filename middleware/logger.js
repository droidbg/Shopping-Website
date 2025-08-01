// Using curring in middleware
export const logger = (store) => (next) => (action) => {
  console.log(store);
  console.log(next);
  console.log(action);

  next(action);
};
