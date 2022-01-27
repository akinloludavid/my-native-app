import { Text, StyleSheet } from "react-native";
import React from "react";

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "green",
    fontFamily: "Avenir",
  },
});

export default AppText;
