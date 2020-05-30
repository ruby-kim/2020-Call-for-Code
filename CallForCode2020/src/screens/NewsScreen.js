import * as React from 'react';
import { Button, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

import NewsData from '../stores/News';


function Item({ navigation, title }) {
  return (
    <View style={styles.item} >
      <Text style={styles.title} onPress={() => navigation.navigate('NewsInfo', {
        title: title.title,
        subtitle: title.subtitle,
      })}>{title.title}</Text>
      <Text style={styles.subtitle}>{title.subtitle}</Text>
      <Text style={styles.dateTitle}>{title.date}</Text>
    </View>
  );
}


export default function NewsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <FlatList
        data={NewsData}
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
    fontSize: 25,
  },
  subtitle: {
    margin: 5,
    marginLeft: 9,
    fontSize: 15,
  },
  dateTitle: {
    textAlign: "right",
    fontSize: 11,
    margin: 2
  }
});
