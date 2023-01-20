import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegistrationScreen from "./RegistrationScreen/RegistrationScreen";
import LoginScreen from "./LoginScreen/LoginScreen";

const Stack = createNativeStackNavigator();


export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name='Login'
        component={LoginScreen} />
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name='Register'
        component={RegistrationScreen} />
    </Stack.Navigator>
  )
};