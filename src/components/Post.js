import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const moment = require("moment");

export default class Post extends Component {
  render() {
    const { data } = this.props.item;
    const dateCreation = moment.unix(data.created_utc);
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(this);
          this.props.navigation.navigate("postDetailRoute", this.props.item);
        }}
        style={styles.container}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: this.props.item.data.thumbnail }}
        />
        <View style={styles.containerRight}>
          <Text style={styles.upper}>{`${moment(
            dateCreation
          ).fromNow()}`}</Text>
          <Text style={styles.title}>{`${data.title}`}</Text>
          <View style={styles.lower}>
            <Text>{`${data.author_fullname}`}</Text>
            <Text>{`${data.score} points`}</Text>
            <Text>{`${data.num_comments} comments`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "wrap",
    borderColor: "black"
  },
  containerRight: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "wrap"
  },
  lower: {
    alignSelf: "flex-end",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "wrap",
    width: 200
  },
  upper: {
    width: "100%",
    textAlign: "right"
  },
  title: {
    fontWeight: 'bold',
  }
});
