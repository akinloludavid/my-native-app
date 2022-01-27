import React from "react";
import {
  View,
  ImageBackground,
  Button,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import ButtonComp from "../components/Button";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      style={welcomeStyles.background}
    >
      <View style={welcomeStyles.logoContainer}>
        <Image
          style={welcomeStyles.logoStyles}
          source={require("../assets/logo-red.png")}
        />
        <Text style={welcomeStyles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={welcomeStyles.buttonContainer}>
        <ButtonComp title="Login" />
        <ButtonComp title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
};

const welcomeStyles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 10,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logoStyles: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
