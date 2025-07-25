export function myCreateStore(reducer) {
  let state;
  const listeners = [];
  const store = {
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((registeredListener) => {
        registeredListener();
      });
    },
    getState() {
      return state;
    },
    subscribe(listener) {
      listeners.push(listener);
      return function () {
        const listenerIndex = listeners.findIndex(
          (listn) => listn === listener
        );
        listeners.splice(listenerIndex, 1);
      };
    },
  };
  state = reducer(state, { type: "@@INT" });
  return store;
}
