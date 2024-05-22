import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  optionsContainer: {
    width: "100%",
    flex: 1,

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
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
  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  options: {
    backgroundColor: "red",
    width: "100%",
  },
});

export default styles;
