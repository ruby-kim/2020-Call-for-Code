import * as React from 'react';
import { Button, SafeAreaView, View, FlatList, StyleSheet, Text  } from 'react-native';
import Constants from 'expo-constants';
 
const DATA = [
    {
      title: '하나 뉴스!',
    },
    {
      title: '둘 뉴스!',
    },
    {
      title: '셋 뉴스!',
    },
    {
        title: '넷 뉴스!',
    },
    {
        title: '다섯 뉴스!',
    },
    {
        title: '여섯 뉴스!',
      },
  ];


function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }


export default function NewsScreen({ navigation }) {
    return (
    <SafeAreaView style={styles.container}>
         <Button title="Go back" onPress={() => navigation.goBack()} />
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
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
      fontSize: 32,
    },
  });
  