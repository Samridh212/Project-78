import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View,Image } from "react-native";

export default class BarterAnimation extends React.Component {
  render() {
    return (
     <View>
         <Image source={require('../assets/BarterSystem.png')} />
     </View>
    );
    }
  }