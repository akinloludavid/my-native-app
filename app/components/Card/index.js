import { Text, View, StyleSheet, Image } from "react-native";
import React, { Component } from "react";
import { colors } from "../../config/colors";
import AppText from "../AppText";

export default function Card({ title, subtitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={require("../../assets/chair.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
    textAlign: "left",
  },
  title: { marginBottom: 7 },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
