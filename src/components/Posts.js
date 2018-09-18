import React, { Component } from "react";
import { StyleSheet, View, FlatList, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import { ActivityIndicator, RefreshControl } from "react-native";
import Post from "./Post";

@connect(
  state => ({
    posts: state.posts,
    loading: state.loading
  }),
  dispatch => ({
    refresh: category => {
      if (category === "hot") {
        return dispatch({ type: "GET_HOT_POSTS_DATA" });
      } else {
        return dispatch({ type: "GET_POSTS_DATA" });
      }
    }
  })
)
export default class Posts extends Component {
  state = {
    category: "latest"
  };
  render() {
    refreshPerCategory = () => {
      refresh(this.state.category);
    };
    const { posts, loading, refresh } = this.props;
    return (
      <View style={styles.container}>
        <Button
          title="hot"
          onPress={() => {
            this.setState({
              category: "hot"
            });
            refresh("hot");
          }}
        />
        <Button
          title="latest"
          onPress={() => {
            this.setState({
              category: "latest"
            });
            refresh("latest");
          }}
        />
        {posts ? (
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={refreshPerCategory}
              />
            }
          >
            <FlatList
              data={posts}
              renderItem={({ item }) => <Post item={item} />}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        ) : (
          <ActivityIndicator
            animating={loading}
            style={styles.loader}
            size="large"
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
