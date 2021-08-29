import { StyleSheet } from "react-native";
import { scaledValue } from "../../Utils/designUtils";
export const styles = StyleSheet.create({
  buttonStyle: {
    height: scaledValue(32),
    width: scaledValue(159),
    backgroundColor: "#2496FF",
    borderRadius: scaledValue(25),
  },
  textStyle: {
    fontSize: scaledValue(8),
  },
});
