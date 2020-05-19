import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View,Button ,Alert} from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.testBtn}>
          <Button 
            title="News Pages"
            color="orange"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
        <View style={styles.testBtn}>
          <Button
            title="Identify?"
            color="blue"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  testBtn: {
        width: 107,
        height: 40,
        padding: 10,
        margin:10,
        color:"orange",
  },
});

