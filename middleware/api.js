export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "make/apiCall") {
      const BASE_URL = "https://fakedataapi.vercel.app";
      const { endpoint, onStart, onError, onSuccess } = action.payload;

      dispatch({ type: onStart });
      fetch(`${BASE_URL}/${endpoint}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          dispatch({ type: onSuccess, payload: data });
        })
        .catch((e) => {
          dispatch({ type: onError });
        });
      next(action);
    } else {
      next(action);
    }
  };

export const makeApiCall = (payload) => {
  return {
    type: "make/apiCall",
    payload: payload,
  };
};
