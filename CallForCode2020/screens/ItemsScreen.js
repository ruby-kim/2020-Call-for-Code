import * as React from 'react';
import { Button, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 1,
    title: 'item1',
    price: '10,000원 -> 8,000원',
    content: '이 물건은... ',
  },
  {
    id: 2,
    title: 'item2',
    price: '10,000원 -> 8,000원',
    content: '이 물건은... ',
  },
  {
    id: 3,
    title: 'item3',
    price: '10,000원 -> 8,000원',
    content: '이 물건은... ',
  },
  {
    id: 4,
    title: 'item4',
    price: '10,000원 -> 8,000원',
    content: '이 물건은... ',
  },
  {
    id: 5,
    title: 'item5',
    price: '10,000원 -> 8,000원',
    content: '이 물건은... ',
  },
];


function Item({ navigation, title }) {
  return (
    <View style={styles.item} >
      <Text style={styles.title} onPress={() => navigation.navigate('ItemsInfo', {
        title: title.title,
      })}>{title.title}</Text>
      <Text style={styles.price}>{title.price}</Text>
      <Text style={styles.content}>{title.content}</Text>
    </View>
  );
}


export default function ItemsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
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
  content: {
    margin: 5,
    marginLeft: 9,
    fontSize: 10,
  },
  dateTitle: {
    textAlign: "right",
    fontSize: 11,
    margin: 2
  }
});
