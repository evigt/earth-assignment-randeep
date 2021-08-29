import React from "react";
import { Text, ImageBackground, View } from "react-native";
import backgroundImg from "../../assets/backgroundImg.png";
import Button from "../Components/Button";
import { Avatar } from "react-native-paper";
import { scaledValue } from "../Utils/designUtils";
import addButtonImage from "../../assets/addButtonIcon.png";
import NetworkCard from "../Components/NetworksCard";
import dotsImage from "../../assets/threeDots.png";
import { IconButton } from "react-native-paper";
import { styles } from "./styles";
const EarthScreen = () => (
  <View style={styles.earthScreenView}>
    <ImageBackground
      source={backgroundImg}
      resizeMode="stretch"
      style={styles.backgroundImg}
    >
      <View style={styles.earthCard}>
        <IconButton
        style={styles.dotsIcon}
          icon={dotsImage}
          color='#fff'
          size={20}
          onPress={() => console.log("Pressed")}
        />
        <Button buttonTitle="Earth Association" />
        <Text style={styles.currencyRateText}>$209,092.22</Text>
        <Text style={styles.currencyStatistics}>+12.34%</Text>
        <View style={styles.networksCardView}>
          <View style={styles.networkTextView}>
            <Text style={styles.networkCardText}>Networks</Text>
            <Avatar.Image
              size={scaledValue(20)}
              style={styles.avatarImage}
              source={addButtonImage}
            />
          </View>
          <NetworkCard />
          <NetworkCard />
          <NetworkCard isLast />
        </View>
      </View>
    </ImageBackground>
  </View>
);

export default EarthScreen;
