import React, { useState } from "react";
import Home from "./screens/home";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { AppNavigator } from "./components/AppNavigation";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <AppNavigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
