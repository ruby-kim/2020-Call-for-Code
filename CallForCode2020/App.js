import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar, StyleSheet, View,Button ,Alert} from 'react-native';

import BottomTabNavigator from './navigation/BottomTabNavigator';


const Stack = createStackNavigator();

function BottomTabNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNav/>
    </NavigationContainer>
  );
}
