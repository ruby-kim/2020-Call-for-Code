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


class ItemsScreenClass extends React.Component{
  constructor(navigation) {
    super()
    this.state = { items : [], navigation : navigation}
     getItemListFromApi(this);
 }


 render() {
    return (
      <SafeAreaView style={styles.container}>
      <FlatList
      //this.state.items.length == 0 ? ItemsData :
        data={ this.state.items.length == 0 ? ItemsData :this.state.items }
        renderItem={({ item }) => <Item navigation={this.state.navigation} title={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    );
 }
}


export default function ItemsScreen({ navigation }) {
  return new ItemsScreenClass(navigation);
}



const getItemListFromApi = (self) => {
  //노드 js 키셨을 때 아이피 확인 후 바꿔주셔야해여 
  // 임의 데이터 추가하고 싶으면 localhost:3000/item.html 들어가셔서 추가가능~
  fetch('http://my-nodejs-app-1234-reflective-porcupine-nh.mybluemix.net/api/productList')
  .then((response) => response.json())
  .then((json) => {
    json.rows.forEach(item =>{
      self.state.items.push({ 
        id : item.id, title: item.doc.title, price : item.doc.price , desc : item.doc.subTitle, dateTime : item.doc.dateTime , photo : item.doc.path,
      });
      self.setState({items : self.state.items});
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