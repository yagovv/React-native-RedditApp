import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { apiMiddleware, reducer } from "./src/redux";
import Navigator from "./src/navigation/Navigator";

const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));
store.dispatch({ type: "GET_POSTS_DATA" });

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "Reddit-App" };
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
