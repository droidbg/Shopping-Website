/**
 * * This is custom react-redux file that we can use to connect react to redux, instead of react-redux package
 */
import { createContext, useContext, useEffect, useState } from "react";

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

export const useDispatch = () => {
  const store = useContext(StoreContext);
  return store.dispatch;
};

export const useSelector = (selectorFn) => {
  const store = useContext(StoreContext);
  const state = store.state;
  return selectorFn(state);
};
