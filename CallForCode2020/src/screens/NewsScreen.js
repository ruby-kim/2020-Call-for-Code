import * as React from 'react';
import {TouchableOpacity, ScrollView, Button, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';



export default class NewsScreenClass extends React.Component{
  constructor(props) {
    super(props)

    this.state = {load : false , pages : 0, newsData : []}
    getNewsListFromApi(this);
    this.handleClick = this.handleClick.bind(this);
 }


 handleClick = () => {
  alert('Button clicked!');
}

 render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView    onScroll={({nativeEvent}) => {
      if (isCloseToBottom(nativeEvent)) {
        if(this.state.load == false){
          this.state.load = true;
           getNewsListFromApi(this)
        }
      }
    }}
    //
    scrollEventThrottle={400}> 
      <Button title="Go back" onPress={() => {this.props.navigation.goBack()}} />
      <FlatList
        data={this.state.newsData}
        renderItem={({ item }) => <Item navigation={this.props.navigation} title={item} handleClick={this.handleClick}/>}
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



function Item({ navigation, title ,handleClick}) {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('NewsInfo', {
        title: title.title,
        id:title.id,
        dateTime :title.dateTime
        })}>
        <Text style={styles.title} >{title.title}</Text>
        <Text style={styles.subtitle}>{title.subtitle}</Text>
        <Text style={styles.dateTime}>{title.dateTime}</Text>
      </TouchableOpacity>
    </View>
  );
}

const getNewsListFromApi = (self) => { 
  fetch('https://getstartednode-balanced-quokka-og.mybluemix.net/api/newslist', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({skip : self.state.pages}),
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    json.rows.forEach(item =>{
      self.state.newsData.push({ id : item.id, title: item.doc.title,subtitle : item.doc.subTitle, dateTime : '2020-05-22' });
      self.state.pages += 1;
    });
    if(json.rows.length != 0)
        self.state.load = false;
    self.setState({newsData : self.state.newsData});
  });
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    width:"96%",
    marginTop:"2%",
    marginLeft:"2%",
    backgroundColor: '#efefef',
    padding: 20,
  },
  title: {
    fontSize: 17,
    marginLeft : 0
  },
  subtitle: {
    marginLeft: 6,
    marginTop:3,
    fontSize: 12,
  },
  dateTime: {
    textAlign: "right",
    fontSize: 11,
  }
});
