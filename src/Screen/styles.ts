import { StyleSheet } from "react-native";
import { scaledValue } from "../Utils/designUtils";
export const styles = StyleSheet.create({
  earthScreenView: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  earthCard: {
    width: scaledValue(327),
    borderRadius: scaledValue(14),
    alignItems: "center",
    backgroundColor: "#3C5367",
    paddingTop: scaledValue(29),
    paddingBottom:scaledValue(2.2)
  },
  networksCardView: {
    backgroundColor: "#282D3F",
    width: scaledValue(323),
    borderRadius: scaledValue(12),
    paddingBottom: scaledValue(17),
  },
  currencyRateText: {
    fontSize: scaledValue(32),
    marginTop: scaledValue(15.86),
    color: "#fff",
    marginBottom: scaledValue(7),
  },
  currencyStatistics: {
    color: "#55D171",
    fontSize: scaledValue(13),
    marginBottom: scaledValue(20.14),
  },
  networkCardText: {
    color: "#fff",
    fontSize: scaledValue(16),
  },
  networkTextView: {
    height: scaledValue(53),
    paddingHorizontal: scaledValue(12),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatarImage: {
    backgroundColor: "#80858F",
  },
  dotsIcon:{
    position:'absolute',
    right:scaledValue(16),
    top:scaledValue(6)
  }
});
