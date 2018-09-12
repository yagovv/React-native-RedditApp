import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import Posts from "../components/Posts";
import PostDetail from "../components/PostDetail";

export const Navigator = createStackNavigator(
  {
    postsRoute: { screen: Posts },
    postDetailRoute: { screen: PostDetail }
  },
  {
    initialRouteName: "postsRoute"
  }
);

class Nav extends Component {
  render() {
    return (
    <Navigator />
    )
  }
}

export default Nav;
