import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import NewsInfo from './src/screens/NewsInfoScreen';
import AuthsInfo from './src/screens/AuthsInfoScreen';
import ItemsInfo from './src/screens/ItemsInfoScreen';




const Stack = createStackNavigator();

function BottomTabNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
      <Stack.Screen name="ItemsInfo" component={ItemsInfo}/>
      <Stack.Screen name="NewsInfo" component={NewsInfo}/>
      <Stack.Screen name="AuthsInfo" component={AuthsInfo}/>
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
