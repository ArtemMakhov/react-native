import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import * as Font from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  View,
} from "react-native";
import { useRoute } from '../../router';
import { authStateChangeUser } from '../../redux/auth/authOperations';

SplashScreen.preventAutoHideAsync();

export default function Main() {
  
  const [appIsReady, setAppIsReady] = useState(false);
  const [user, setUser] = useState(null);
  
  const dispatch = useDispatch();
  const {stateChange} = useSelector((state) => state.auth);

  const routing = useRoute(stateChange);

  useEffect(() => {

    dispatch(authStateChangeUser());

    async function prepare() {
      try {

        await Font.loadAsync({
          "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
          "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {

      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        {routing}
      </NavigationContainer>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

