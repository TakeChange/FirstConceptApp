import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/auth/LoginScreen';
import AuthOptionScreen from '../screen/auth/AuthOptionScreen';
import RegistrationScreen from '../screen/auth/RegistrationScreen';

const Stack = createNativeStackNavigator();

const LazaNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          component={SplashScreen}
          name="LazaSplash"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          component={AuthOptionScreen}
          name="AuthOptionScreen"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          component={RegistrationScreen}
          name="LazaRegistration"
          options={{headerShown:false}}
        />

        <Stack.Screen
          component={LoginScreen}
          name="LazaLogin"
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LazaNavigation