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

import ItemsData from '../stores/Items'


function Item({ navigation, title }) {
  return (
    <View style={styles.item} >
      <Text style={styles.title} onPress={() => 
        navigation.navigate('ItemsInfo', {
          title: title.title,
          desc: title.desc
        })
      }>{title.title}</Text>
      <Text style={styles.price}>{title.price}</Text>
    </View>
  );
}


export default function ItemsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ItemsData}
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