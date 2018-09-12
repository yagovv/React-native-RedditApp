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
    refresh: () => dispatch({ type: "GET_POSTS_DATA" })
  })
)
export default class Posts extends Component {
  render() {
    const { posts, loading, refresh } = this.props;
    return (
      <View style={styles.container}>
        {posts ? (
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={refresh} />
            }
          >
            <FlatList
              data={posts}
              renderItem={({ item }) => (
                <View>
                  <Post item={item} />
                  <Button
                    title="See more"
                    onPress={() =>
                      this.props.navigation.navigate("postDetailRoute", {
                        item: item
                      })
                    }
                  />
                </View>
              )}
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
