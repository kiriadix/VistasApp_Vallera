import { StyleSheet, View } from "react-native";

import Footer from "./src/components/Footer";
import GameScreen from "./src/screens/GameScreen";
import Header from "./src/components/Header";
import ResultScreen from "./src/screens/ResultScreen";
import StartGameScreen from "./src/screens/StartGameScreen";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [loaded] = useFonts({
    ExtraBoldItalic: require("./src/assets/fonts/OpenSans-ExtraBoldItalic.ttf"),
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
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});