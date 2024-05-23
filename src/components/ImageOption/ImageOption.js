import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./styles";

const ImageOption = ({ image, text }) => {
  return (
    <View style={styles.optionContainer}>
      <Image
        source={{
          uri: image,
        }}
        resizeMode="contain"
        style={styles.optionImage}
        onLoad={() => console.log("Glass image loaded successfully")}
        onError={(error) => console.log("Error loading glass image", error)}
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
};

export default ImageOption;
