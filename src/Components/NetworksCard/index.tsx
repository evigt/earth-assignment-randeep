import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import { scaledValue } from "../../Utils/designUtils";
import networkCardImage from "../../../assets/cryptoIcons.png";
import { styles } from "./styles";
const NetworkCard = (props: { isLast?: boolean }) => (
  <View
    style={
      props.isLast ? styles.networkCardViewNoBorder : styles.networkCardView
    }
  >
    <Avatar.Image size={scaledValue(36)} source={networkCardImage} />
    <View style={styles.cardTextView}>
      <View style={styles.titleAndAssetsView}>
        <Text style={styles.cardTitleText}>Internet Computer</Text>
        <Text style={styles.assetsText}>5 Assets</Text>
      </View>
      <View style={styles.currencyPriceView}>
        <Text style={styles.currencyText}>$39,092.22 USD</Text>
        <Text style={styles.currencyStatistics}>+0.34%</Text>
      </View>
    </View>
  </View>
);
export default NetworkCard;
