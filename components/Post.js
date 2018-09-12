import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const moment = require("moment");

export default class Post extends Component {
  render() {
    const data = this.props.item.data;
    const dateCreation = moment.unix(data.created_utc);
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: this.props.item.data.thumbnail }}
        />

        <Text style={styles.upper}>{`${moment(dateCreation).fromNow()}`}</Text>
        <Text>{`${data.title}`}</Text>
        <View style={styles.lower}>
          <Text>{`${data.author_fullname}`}</Text>
          <Text>{`${data.score} points`}</Text>
          <Text>{`${data.num_comments} comments`}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lower: {
    flex: 1
  },
  upper: {
    flex: 1
  }
});
