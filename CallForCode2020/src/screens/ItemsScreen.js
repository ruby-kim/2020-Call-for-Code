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
import { ScrollView } from 'react-native-gesture-handler';


function Item({ navigation, title }) {
  return (
    <View style={styles.item} >
      <Text style={styles.title} onPress={() => 
        navigation.navigate('ItemsInfo', {
          title: title.title,
          id: title.id
        })
      }>{title.title}</Text>
      <Text style={styles.price}>{title.price}</Text>
    </View>
  );
}


class ItemsScreenClass extends React.Component{
  constructor(navigation) {
    super()
    this.state = {load : false , pages : 0, items : [], navigation : navigation}
     getItemListFromApi(this);
 }


 render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView onScroll={({nativeEvent}) => {
      if (isCloseToBottom(nativeEvent)) {
        if(this.state.load == false){
          this.state.load = true;
          getNewsListFromApi(this)
        }
         
      }
    }}
    scrollEventThrottle={400}> 
      <FlatList
      //this.state.items.length == 0 ? ItemsData :
        data={ this.state.items.length == 0 ? ItemsData :this.state.items }
        renderItem={({ item }) => <Item navigation={this.state.navigation} title={item} />}
        keyExtractor={item => item.id}
      />
      </ScrollView>
    </SafeAreaView>
    );
 }
}

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

export default function ItemsScreen({ navigation }) {
  return new ItemsScreenClass(navigation);
}



const getItemListFromApi = (self) => {
  //노드 js 키셨을 때 아이피 확인 후 바꿔주셔야해여 https://getstartednode-balanced-quokka-og.mybluemix.net/
  // 임의 데이터 추가하고 싶으면 localhost:3000/item.html 들어가셔서 추가가능~
  fetch('https://getstartednode-balanced-quokka-og.mybluemix.net/api/productList', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({skip : self.state.pages}),
  }).then((response) => response.json())
  .then((json) => {
    json.rows.forEach(item =>{
      console.log(item.doc)
      self.state.items.push({ 
        id : item.id, title: item.doc.title, price : item.doc.price , desc : item.doc.subTitle, dateTime : item.doc.dateTime , photo : item.doc.path,
      });
      self.state.pages += 1;
    });
    if(json.rows.length != 0)
      self.state.load = false;
    self.setState({items : self.state.items});

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