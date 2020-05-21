import * as React from 'react';
import { Button, SafeAreaView, View, FlatList, StyleSheet, Text  } from 'react-native';
import Constants from 'expo-constants';
 
const DATA = [
    {
      id : 1,
      title: '하나 뉴스!',
    },
    {
      id : 2,
      title: '둘 뉴스!',
    },
    {
      id : 3,
      title: '셋 뉴스!',
    },
    {
      id : 4,
      title: '넷 뉴스!',
    },
    {
      id : 5,
      title: '다섯 뉴스!',
    },
    {
      id : 6,
      title: '여섯 뉴스!',
    },
  ];


function Item({ navigation,title }) {
    return (
      <View style={styles.item} >
        <Text style={styles.title} onPress={() => navigation.navigate('NewsInfo', {
            itemId: title.id,
            title: title.title,
          })}>{title.title}</Text>
      </View>
    );
  }


export default function NewsScreen({ navigation }) {
    return (
    <SafeAreaView style={styles.container}>
         <Button title="Go back" onPress={() => navigation.goBack()} />
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item navigation = {navigation} title={item} />}
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
  