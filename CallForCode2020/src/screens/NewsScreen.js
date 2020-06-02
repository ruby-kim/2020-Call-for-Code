import * as React from 'react';
import { Button, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';


class NewsScreenClass extends React.Component{
  constructor(navigation) {
    super()
    this.state = { newsData : [], navigation : navigation}
    getNewsListFromApi(this);
 }


 render() {
    return (
      <SafeAreaView style={styles.container}>
      <Button title="Go back" onPress={() => this.state.navigation.goBack()} />
      <FlatList
        data={this.state.newsData}
        renderItem={({ item }) => <Item navigation={this.state.navigation} title={item} />}
        keyExtractor={item => item.id}
      />
      </SafeAreaView>
    );
 }
}


export default function NewsScreen({ navigation }) {
  return new NewsScreenClass(navigation);
}

function Item({ navigation, title }) {
  return (
    <View style={styles.container} >
      <Text style={styles.title} onPress={() => navigation.navigate('NewsInfo', {
        title: title.title,
        description: title.description,
        id:title.id
      })}>{title.title}</Text>
      <Text style={styles.description}>{title.description}</Text>
      <Text style={styles.dateTitle}>{title.dateTime}</Text>
    </View>
  );
}

const getNewsListFromApi = (self) => {
  //노드 js 키셨을 때 아이피 확인 후 바꿔주셔야해여 
  // 임의 데이터 추가하고 싶으면 localhost:3000/index 들어가셔서 추가가능~
  fetch('http://192.168.0.71:3000/api/newslist')
  .then((response) => response.json())
  .then((json) => {
    json.rows.forEach(item =>{
      self.state.newsData.push({ id : item.id,   title: item.doc.title,description : item.doc.description, dateTime : '2020-05-22' });
      self.setState({newsData : self.state.newsData});
    });
  })
  .catch((error) => {
    console.error(error);
  });
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
