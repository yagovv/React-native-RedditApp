import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, WebView } from "react-native";

export class PostDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <WebView
        source={{uri: `https://www.reddit.com${this.props.navigation.state.params.data.permalink}`}}
      />
    )
  }
}

export default PostDetail
