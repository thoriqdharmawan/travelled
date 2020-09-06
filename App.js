// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  RefreshControl,
  Switch,
  TouchableHighlight,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/250/250" }}
          fadeDuration={1000}
        />
        <Text style={styles.text}>Cuttie Toys Collection</Text>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => console.log("Pressed!")}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>{">"}</Text>
          </View>
        </TouchableHighlight>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </ScrollView>
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
  image: {
    width: 250,
    height: 250,
    borderRadius: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 28,
    marginTop: 62,
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    marginTop: 70,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    margin: 0,
    fontWeight: "600",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
