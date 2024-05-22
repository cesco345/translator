import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";
const ImageOption = () => {
  return (
    <View style={styles.optionContainer}>
      <Image
        source={{
          uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        }}
        resizeMode="contain"
        style={styles.optionImage}
        onLoad={() => console.log("Glass image loaded successfully")}
        onError={(error) => console.log("Error loading glass image", error)}
      />
      <Text style={styles.optionText}>Cup</Text>
    </View>
  );
};

export default ImageOption;
