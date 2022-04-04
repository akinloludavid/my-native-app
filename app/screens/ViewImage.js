import React from "react";
import { Image, StyleSheet, Button, View, Platform } from "react-native";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ViewImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <View style={styles.closeButton}>
          <MaterialCommunityIcons name="close" color={"#ffffff"} size={35} />
        </View>
        <View style={styles.deleteButton}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color={"#ffffff"}
            size={35}
          />
        </View>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

export default ViewImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteButton: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
