import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import Header from '../components/Header';
import Footer from "../components/Footer";

export default function GameConfigurator() {
  const [loaded] = useFonts({
    ExtraBoldItalic: require("../assets/fonts/OpenSans-ExtraBoldItalic.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header
        title={"VERDAD O RETO"}
        newStyles={{ fontFamily: "ExtraBoldItalic" }}
      />
      <Text>CONFIGURACIONES</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})