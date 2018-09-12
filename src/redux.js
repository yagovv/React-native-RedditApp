const API = "https://api.reddit.com/r/pics/new.json";

export const apiMiddleware = store => next => action => {
  next(action);
  switch (action.type) {
    case "GET_POSTS_DATA":
      store.dispatch({ type: "GET_POSTS_DATA_LOADING" });
      fetch(`${API}`)
        .then(response => response.json())
        .then(data => {
          next({
            type: "GET_POSTS_DATA_RECEIVED",
            data
          });
        })
        .catch(error =>
          next({
            type: "GET_POSTS_DATA_ERROR",
            error
          })
        );
      break;
    default:
      break;
  }
};

export const reducer = (state = { posts: [], loading: true }, action) => {
  switch (action.type) {
    case "GET_POSTS_DATA_LOADING":
      return {
        ...state,
        loading: true
      };
    case "GET_POSTS_DATA_RECEIVED":
      return {
        loading: false,
        posts: action.data.data.children
      };
    case "GET_POSTS_DATA_ERROR":
      return state;
    default:
      return state;
  }
};
