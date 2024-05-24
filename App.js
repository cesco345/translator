import React, { useEffect, useState } from "react";
import { Text, View, Alert } from "react-native";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import styles from "./App_styles";
import questions from "./assets/data/imageMultipleChoiceQuestions";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You have won!");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1); // Increment the index by 1
  };

  const onIncorrect = () => {
    Alert.alert("Incorrect");
  };

  return (
    <View style={styles.root}>
      <ImageMultipleChoiceQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onIncorrect={onIncorrect}
      />
    </View>
  );
};

export default App;
