import { Button, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";

import Footer from "../components/Footer";
import GameScreen from "./GameScreen";
import Header from "../components/Header";
import ResultScreen from "./ResultScreen";
import StartGameScreen from "./StartGameScreen";

import React from 'react'
import Card from "../components/Card";

export default function GameHome({navigation}) {
  const [loaded] = useFonts({
    ExtraBoldItalic: require("../assets/fonts/OpenSans-ExtraBoldItalic.ttf"),
  });

  const [userAction, setUserAction] = useState();
  const [winOrLose, setWinOrLose] = useState(false);
  const [result, setResult] = useState("");

  const handleStartGame = (selectedAction) => {
    setUserAction(selectedAction);
  };

  const handleFinishGame = (selection) => {
    setResult(selection);
    setWinOrLose(true);
  };

  const restarGame = () =>{
    setWinOrLose(false)
    setResult("")
    setUserAction()
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userAction && winOrLose === true) {
    content = <ResultScreen result={result} reini={restarGame}/>
  } else if (userAction){
    content = <GameScreen handleResult={handleFinishGame} action={userAction}/>;
  }

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header
        title={"VERDAD O RETO"}
        newStyles={{ fontFamily: "ExtraBoldItalic" }}
      />
      {content}
      <View style={styles.container2}>
        <Card newStyles={styles.buttonContainer}>
          <Button
            title="CONFIGURACIÓN"
            onPress={() => navigation.navigate("Configuración")}
          />
          <Button
            title="INSTRUCCIONES"
            onPress={() => navigation.navigate("Instrucciones")}
          />
        </Card>
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "80%",
  },
});