import React from "react";
import { Button } from "react-native-paper";
import { styles } from "./styles";
const ButtonComponent = (props: { buttonTitle: string }) => {
  return (
    <Button
      mode="contained"
      style={styles.buttonStyle}
      onPress={() => console.log("Pressed")}
      labelStyle={styles.textStyle}
    >
      {props.buttonTitle}
    </Button>
  );
};

export default ButtonComponent;
