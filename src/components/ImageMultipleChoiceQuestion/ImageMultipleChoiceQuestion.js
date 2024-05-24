import React from "react";
import { Text, View, Alert } from "react-native";
import ImageOption from "../ImageOption";
import Button from "../Button";
import PropTypes from "prop-types";
import { useState } from "react";
import questions from "../../../assets/data/imageMultipleChoiceQuestions";

import styles from "./styles";

const ImageMultipleChoiceQuestion = ({ question, onCorrect, onIncorrect }) => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    if (selected.correct) {
      Alert.alert("Correct");
      // Move to the next question

      onCorrect();

      setSelected(null);
    } else {
      onIncorrect();
    }
  };

  return (
    <>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

ImageMultipleChoiceQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        text: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};

export default ImageMultipleChoiceQuestion;
