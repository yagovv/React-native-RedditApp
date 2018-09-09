import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }
  componentDidMount() {
    return fetch("https://api.reddit.com/r/pics/new.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataList: responseJson
        }).catch(error => {
          console.error(error);
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    if (!this.state.isLoading) {
      return this.state.dataList.data.children.map(item => (
        <Text>{item.data.author_fullname}</Text>
      ));
    } else {
      return <Text>Loading...</Text>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
