import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { colors } from "../../config/colors";

const ButtonComp = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;
