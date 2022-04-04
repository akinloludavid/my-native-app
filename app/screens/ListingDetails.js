import { View, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import { colors } from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetails = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{"Parlour chair"}</AppText>
        <AppText style={styles.subtitle}>{"$500"}</AppText>

        <ListItem title="AKAY" subtitle={"5 Listings"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
    textAlign: "left",
  },
  title: { fontSize: 24, fontWeight: "500" },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default ListingDetails;
