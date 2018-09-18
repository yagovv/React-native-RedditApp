import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, WebView } from "react-native";

export class PostDetail extends Component {
  render() {
    return (
      <WebView
        source={{uri: `https://www.reddit.com${this.props.navigation.state.params.item.data.permalink}`}}
        style={{marginTop:20}}
      />
    )
  }
}

export default PostDetail
