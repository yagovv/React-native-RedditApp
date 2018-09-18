import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const moment = require("moment");

export default class Post extends Component {
  render() {
    const { data } = this.props.item;
    const dateCreation = moment.unix(data.created_utc);
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("postDetailRoute", {
            item
          })
        }
        style={{
          height: 200,
          backgroundColor: "steelblue",
          flex: 1,
          flexDirection: "column",
          justifyContent: "left",
          flexWrap: "wrap",
          alignItems: "flex-start"
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: this.props.item.data.thumbnail }}
        />

        <Text style={styles.upper}>{`${moment(dateCreation).fromNow()}`}</Text>
        <Text>{`${data.title}`}</Text>
        <View style={styles.lower}>
          <Text>{`${data.author_fullname}`}</Text>
          <Text>{`${data.score} points`}</Text>
          <Text>{`${data.num_comments} comments`}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: row,
  },
  lower: {
    flex: 1
  },
  upper: {
    flex: 1
  }
});
