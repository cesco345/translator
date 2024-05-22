import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./App_styles";

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the glass?</Text>
      <View style={styles.optionsContainer}>
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
        <View style={styles.optionContainer}>
          <Image
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
            }}
            resizeMode="contain"
            style={styles.optionImage}
            onLoad={() => console.log("Cup image loaded successfully")}
            onError={(error) => console.log("Error loading cup image", error)}
          />
          <Text style={styles.optionText}>Glass</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
            }}
            resizeMode="contain"
            style={styles.optionImage}
            onLoad={() => console.log("Plate image loaded successfully")}
            onError={(error) => console.log("Error loading plate image", error)}
          />
          <Text style={styles.optionText}>Plate</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
            }}
            resizeMode="contain"
            style={styles.optionImage}
            onLoad={() => console.log("Bowl image loaded successfully")}
            onError={(error) => console.log("Error loading bowl image", error)}
          />
          <Text style={styles.optionText}>Bowl</Text>
        </View>
      </View>
    </View>
  );
};

export default App;
