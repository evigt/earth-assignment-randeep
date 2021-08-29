import { StyleSheet } from "react-native";
import { scaledValue } from "../../Utils/designUtils";
export const styles = StyleSheet.create({
  networkCardView: {
    height: scaledValue(60),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scaledValue(10),
    borderBottomWidth: 1,
    borderBottomColor: "#404961",
  },

  networkCardViewNoBorder: {
    height: scaledValue(60),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scaledValue(10),
    borderBottomWidth: 0,
    borderBottomColor: "#404961",
  },

  cardTitleText: {
    color: "#fff",
    fontSize: scaledValue(14),
  },
  titleAndAssetsView: {
    marginLeft: scaledValue(12),
  },
  assetsText: {
    color: "gray",
    fontSize: scaledValue(12),
  },
  currencyText: {
    color: "#fff",
    fontSize: scaledValue(12),
  },
  currencyStatistics: {
    color: "#55D171",
    textAlign: "right",
    fontSize:scaledValue(12)
  },
  currencyPriceView: {},
  cardTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: scaledValue(265),
  },
});
