import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View,Image } from "react-native";

export default class BarterImage extends React.Component {
  render() {
    return (
     <Image
        source={require("../assets/BarterSystem.png")}
        style={{ width: "90%", marginBottom: 5 }}
        autoPlay
        loop
      />
    );
  }
}