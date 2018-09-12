import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, WebView } from "react-native";

export class PostDetail extends Component {
  render() {
    console.log(this.props.navigation.state.params);
    return (

      <WebView
        source={{uri: this.props.navigation.state.params.item.data.url}}
        style={{marginTop:20}}
      />
    )
  }
}

export default PostDetail
