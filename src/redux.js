const API = "https://api.reddit.com/r/pics";

export const apiMiddleware = store => next => action => {
  next(action);
  switch (action.type) {
    case "GET_POSTS_DATA":
      console.log("new posts");
      store.dispatch({ type: "GET_POSTS_DATA_LOADING" });
      fetch(`${API}/new.json`)
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
    case "GET_HOT_POSTS_DATA":
      console.log("hot posts");
      store.dispatch({ type: "GET_POSTS_DATA_LOADING" });
      fetch(`${API}/hot.json`)
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
