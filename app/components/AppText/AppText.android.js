import { Text, StyleSheet } from "react-native";
import React from "react";

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "blue",
    fontFamily: "Roboto",
  },
});
export default AppText;
