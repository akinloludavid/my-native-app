import { StyleSheet } from "react-native";
import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 50,
    borderRadius: 25,
    color: colors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
  },
});
