import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
          "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    // <RegistrationScreen onLayout={onLayoutRootView} />
    <LoginScreen onLayout={onLayoutRootView}/>
  );
}


