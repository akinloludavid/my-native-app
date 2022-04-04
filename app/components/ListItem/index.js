import { StyleSheet, Image, View } from "react-native";
import React from "react";
import AppText from "../AppText";
import { colors } from "../../config/colors";

const ListItem = ({ image, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/icon.png")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    borderRadius: 35,
    width: 70,
    height: 70,
    marginRight: 10,
  },
  detailsContainer: {
    paddingVertical: 5,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
  },
});
