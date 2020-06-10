import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import tabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MypageScreen from '../screens/MypageScreen'
import AuthsScreen from '../screens/AuthsScreen';
import NewsScreen from '../screens/NewsScreen';
import ItemsScreen from '../screens/ItemsScreen';
import LoginScreen from '../screens/LoginScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route), headerShown : false });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          header: null,
          title: '홈',
          tabBarIcon: ({ focused }) => <AntDesign focused={focused} name="login" size={24} color="lightgray" />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: null,
          title: '홈',
          tabBarIcon: ({ focused }) => <AntDesign focused={focused} name="home" size={24} color="lightgray" />,
        }}
      />
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: '그린뉴스',
          tabBarIcon: ({ focused }) => <FontAwesome focused={focused} name="newspaper-o" size={24} color="lightgray" />,
        }}
      />
      <BottomTab.Screen
        name="Auths"
        component={AuthsScreen}
        options={{
          title: '인증',
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons focused={focused} name="camera-metering-partial" size={24} color="lightgray" />,
        }}
      />
      <BottomTab.Screen
        name="Items"
        component={ItemsScreen}
        options={{
          title: '그린상품',
          tabBarIcon: ({ focused }) => <Entypo focused={focused} name="leaf" size={24} color="lightgray" />,
        }}
      />
      <BottomTab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{
          title: '마이페이지',
          tabBarIcon: ({ focused }) => <AntDesign focused={focused} name="user" size={24} color="lightgray" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  return null;
  /*
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return '홈';
    case 'News':
      return '그린뉴스';
    case 'Auths':
      return '인증';
    case 'Items':
      return '그린상품';
    case 'Mypage':
      return '마이페이지'
  }*/
}
