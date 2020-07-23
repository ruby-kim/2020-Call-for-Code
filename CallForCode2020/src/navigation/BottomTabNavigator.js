import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import tabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MypageScreen from '../screens/MypageScreen'
import AuthsScreen from '../screens/Auths/MainScreen';
import NewsScreen from '../screens/NewsScreen';
import ItemsScreen from '../screens/ItemsScreen';
import LoginScreen from '../screens/LoginScreen';

import TabNav from './TabNav';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: null, headerShown : false });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={TabNav}
        options={{
          header: null,
          title: '',
          tabBarIcon: ({ focused }) => (
            <Entypo focused={focused} name="home" size={24} color="lightgray" />
          )
        }}

        screenProps={'test'} 
      />
      <BottomTab.Screen
        name="News"
        component={TabNav}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <FontAwesome focused={focused} name="newspaper-o" size={24} color="lightgray" />,
        }}
      />
      <BottomTab.Screen
        name="Auths"
        component={TabNav}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons focused={focused} name="apple-keyboard-command" size={24} color="lightgray" />,
        }}
      />
      <BottomTab.Screen
        name="Items"
        component={TabNav}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <Entypo focused={focused} name="leaf" size={24} color="lightgray" />,
        }}
      />
      <BottomTab.Screen
        name="Mypage"
        component={TabNav}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => <AntDesign focused={focused} name="user" size={24} color="lightgray" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
