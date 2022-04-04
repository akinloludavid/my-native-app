import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/icons.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/icons.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/icons.png"),
  },
];
const MessagesScreen = (props) => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subtitle={item.styles}
          image={item.image}
        />
      )}
    />
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
