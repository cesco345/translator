import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    //border
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 10,

    //size
    width: "48%",
    height: "48%",

    //spacing inside container
    padding: 10,

    alignItems: "center",
  },
  selectedContainer: {
    borderColor: "#81D5FE",
    backgroundColor: "#DDF4FE",
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  selectedText: {
    color: "#40BEF7",
    fontWeight: "bold",
  },
});

export default styles;
