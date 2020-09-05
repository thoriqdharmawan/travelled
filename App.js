// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View, Alert, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="click"
        onPress={() =>
          Alert.prompt("my Titylasd", "my massage", (text) => console.log(text))
        }
        color="orange"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
