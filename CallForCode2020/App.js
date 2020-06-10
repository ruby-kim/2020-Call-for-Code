import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import NewsInfo from './src/screens/NewsInfoScreen';
import AuthsInfo from './src/screens/Auths/MainScreen';
import ItemsInfo from './src/screens/ItemsInfoScreen';
import LoginScreen from './src/screens/LoginScreen';


//<Stack.Screen name="Login" component={LoginScreen} />
const Stack = createStackNavigator();

function BottomTabNav() {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false}}>
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
