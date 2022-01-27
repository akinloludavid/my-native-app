import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  View,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import ViewImage from "./app/screens/ViewImage";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ButtonComp from "./app/components/Button";

export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
