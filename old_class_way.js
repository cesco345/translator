import React from "react";
import { Text, View } from "react-native";

class OldWay extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hello World, the old way!</Text>
      </View>
    );
  }
}

export default OldWay;
