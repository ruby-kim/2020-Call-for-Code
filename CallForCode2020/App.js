import * as React from 'react';

import {AsyncStorage} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import NewsInfo from './src/screens/NewsInfoScreen';
import AuthsInfo from './src/screens/Auths/MainScreen';
import ItemsInfo from './src/screens/ItemsInfoScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';


 function login(props){
  try {
     Promise.all([AsyncStorage.getItem('isAuto'), AsyncStorage.getItem('id'), AsyncStorage.getItem('password')]).then((data) => {
         if ( data[0] != null && data[1] != null && data[2] != null) {
          var jsonData = {id:data[1], password : data[2]};
          fetch('http://192.168.0.102:3000/api/login', {
               method: 'post',
               headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify(jsonData),
             }).then((response) => response.text())
             .then((json) => {
               if(json == "Fail")
                 alert("Login Fail 비밀번호 혹은 아이디를 재확인해주세요.");
                 props.setState({loginState : json != "Fail" ? true : false});
             })
         }
      });
   } catch (error) {
      console.log(error);
   }
}

class FirstScreenClass extends React.Component{
    constructor() {
      super()
      this.state = {loginState : true}
      //login(this);
   }
  
   render() {
    return (
      <Stack.Navigator  screenOptions={{ headerShown: false}}>
        {this.state.loginState == false ? <Stack.Screen name="Login" component={LoginScreen}/> : null}
        <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
        <Stack.Screen name="ItemsInfo" component={ItemsInfo}/>
        <Stack.Screen name="NewsInfo" component={NewsInfo}/>
        <Stack.Screen name="AuthsInfo" component={AuthsInfo}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
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
