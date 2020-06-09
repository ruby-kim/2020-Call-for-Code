import * as React from 'react';
import {
  SafeAreaView, 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  Image 
} from 'react-native';
import Constants from 'expo-constants';

import AuthsData from '../../stores/Auths'


function Item({ navigation, title }) {
  return (
    <View style={styles.item} >
      <Text style={styles.title} onPress={() => 
        navigation.navigate('AuthsInfo', {
          title: title.title,
          desc: title.desc,
          allow: title.allow,
          not_allow: title.not_allow
        })
      }>{title.title}</Text>
    </View>
  );
}


export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={teamColor}>
        <Text style={teamColor.backgroundColor}>인증 리스트</Text>
      </View>

      <FlatList
        data={AuthsData}
        renderItem={({ item }) => <Item navigation={navigation} title={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#fefefe',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  desc: {
    margin: 5,
    marginLeft: 9,
    fontSize: 10,
  },
  photo: {
    flex: 1
  }
});