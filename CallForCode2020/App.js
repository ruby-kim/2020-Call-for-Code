import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, StatusBar, StyleSheet, View,Button ,Alert} from 'react-native';

import NewsScreen from './screens/NewsScreen';
import HomeScreen from './screens/HomeScreen';
import LinkSCreen from './screens/LinksScreen';
import NewsInfoScreen from './screens/NewsInfoScreen';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="News" component={NewsScreen} />
    <Stack.Screen name="Link" component={LinkSCreen} />
    <Stack.Screen name="NewsInfo" component={NewsInfoScreen} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

/* 경남씨 이 코드 안쓰는거면 그냥 지워주시면 되용 
export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
*/
