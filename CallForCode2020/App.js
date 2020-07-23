import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import StartScreen from './src/screens/StartScreen';
import LoginScreen from './src/screens/LoginScreen';
import NewsInfoScreen from './src/screens/NewsInfoScreen';
import ItemsInfoScreen from './src/screens/ItemsInfoScreen';
import DescScreenScreen from './src/screens/Auths/DescScreen';
import CameraScreen from './src/screens/Auths/CameraScreen';
import JudgeScreen from './src/screens/Auths/JudgeScreen';
import MainScreen from './src/screens/Auths/MainScreen';
import EditScreen from './src/screens/Auths/EditScreen';

import CommonDataManager from './src/singleton/CommonDataManager';
//초기에 시작시 로그인이 체크

class FirstScreenClass extends React.Component{
  

   render() {
    return (
       <Stack.Navigator  screenOptions={{ headerShown: false}}>
        <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="StartScreen" component={StartScreen} options={{headerShown: false}}/>
        <Stack.Screen name="NewsInfo" component={NewsInfoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ItemsInfo" component={ItemsInfoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="DescScreen" component={DescScreenScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{headerShown: false}}/>
        <Stack.Screen name="JudgeScreen" component={JudgeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="bScreen" component={MainScreen} options={{headerShown: false}}/>
        <Stack.Screen name="EditScreen" component={EditScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    );
   }
  }



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
        <FirstScreenClass/>
    </NavigationContainer>
  );
}