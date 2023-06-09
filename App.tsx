import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/Home";
import { Provider } from "react-redux";
import store from "./src/store";

const Styles = StyleSheet.create({
  statusBarContainer: {
    width: "100%",
    height: 20,
    backgroundColor: "black",
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={Styles.statusBarContainer}>
        <StatusBar barStyle="light-content" />
      </View>
      <HomeScreen />
    </Provider>
  );
}
