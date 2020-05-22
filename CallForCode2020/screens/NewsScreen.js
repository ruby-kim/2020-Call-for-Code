import * as React from 'react';
import { Button, SafeAreaView, View, FlatList, StyleSheet, Text  } from 'react-native';
import Constants from 'expo-constants';
 
const DATA = [
    {
      id : 1,
      title: 'IBM 뉴스 속보',
      subtitle : '해커톤에서 우승팀들의 인터뷰에 따르면 ... ',
      date : '2020-05-22'
    },
    {
      id : 2,
      title: '2020 junction',
      subtitle : '해커톤에서 우승팀들의 인터뷰에 따르면 ... ',
      date : '2020-05-22'
    },
    {
      id : 3,
      title: 'Hackton K/C',
      subtitle : '해커톤에서 우승팀들의 인터뷰에 따르면 ... ',
      date : '2020-05-22'
    },
    {
      id : 4,
      title: 'Window 무료 배포 확정',
      subtitle : '해커톤에서 우승팀들의 인터뷰에 따르면 ... ',
      date : '2020-05-22'
    },
    {
      id : 5,
      title: '2021년 시급 얼마나?',
      subtitle : '해커톤에서 우승팀들의 인터뷰에 따르면 ... ',
      date : '2020-05-22'
    },
    {
      id : 6,
      title: 'LA갈비 굽는법',
      subtitle : '해커톤에서 우승팀들의 인터뷰에 따르면 ... ',
      date : '2020-05-22'
    },
  ];


function Item({ navigation,title }) {
    return (
      <View style={styles.item} >
        <Text style={styles.title} onPress={() => navigation.navigate('NewsInfo', {
            title: title.title,
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
      fontSize: 25,
    },
    subtitle:{
      margin : 5,
      marginLeft : 9,
      fontSize: 15,
    },
    dateTitle:{
      textAlign: "right",
      fontSize : 11,
      margin : 2
    }
  });
  