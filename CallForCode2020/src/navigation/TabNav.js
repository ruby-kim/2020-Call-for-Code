import * as React from 'react';
import {Dimensions, ScrollView, Button, AsyncStorage, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import tabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MypageScreen from '../screens/MypageScreen'
import AuthsScreen from '../screens/Auths/MainScreen';
import NewsScreen from '../screens/NewsScreen';
import ItemsScreen from '../screens/ItemsScreen';

class TabNavClass extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      id:"",
      password:"",
      rev :"",
      path :"",
      point :"",
      maxPoint : "",
      name :"",
      history :""
    };
    
    this.initManager = this.initManager.bind(this);
    this.setStateByParameters = this.setStateByParameters.bind(this);
     this.initManager();
      this.updatePoint = this.updatePoint.bind(this);
 }


 async initManager(){
  AsyncStorage.multiGet(['isAuto', 'id', 'password']).then((data) => {
   
      if(data[0][1] != null && data[1][1] != null && data[2][1] != null) {
          var jsonData = {id:data[1][1], password : data[2][1] };

      fetch('https://getstartednode-balanced-quokka-og.mybluemix.net/api/login', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonData),
        }).then((response) => response.json())
        .then((json) => {  
          if(json == "Fail"){
            this.props.navigation.navigate("Login");
          }
          else{
            this.setStateByParameters(json);
          }
        })
    }

  });
}


 setStateByParameters(params){

  var pathJson = "";
  if(params.path.split('/').pop() == "basic.jpg")
  pathJson  = "https://getstartednode-balanced-quokka-og.mybluemix.net/img/profile/basic.jpg";
  else 
  pathJson  = "https://getstartednode-balanced-quokka-og.mybluemix.net/img/" + params.path;

   this.setState({
      id:params._id,
      password:params.password,
      rev :params._rev,
      path :pathJson,
      point :params.point,
      maxPoint : params.maxPoint,
      name : params.name,
      history : params.hispath == " " ? params.path : params.hispath
   });
 }

 
 updatePoint(){
    this.setState({point: this.state.point + 10 , maxPoint : this.state.maxPoint < this.state.point + 10 ? this.state.point + 10 : this.state.maxPoint });
 }

 
 getComponentByName(){
  console.log(this.props.route.name);

  switch(this.props.route.name){
    case "Home" : return (<HomeScreen navigation={this.props.navigation} params={this.state}></HomeScreen>);
    case "News" :  return (<NewsScreen navigation={this.props.navigation} params={this.state}></NewsScreen>);
    case "Auths" :  return(<AuthsScreen navigation={this.props.navigation} params={this.state} updatePoint={this.updatePoint}></AuthsScreen>);
    case "Mypage" :  return(<MypageScreen navigation={this.props.navigation} params={this.state}></MypageScreen>);
    case "Items" :  return(<ItemsScreen navigation={this.props.navigation} params={this.state}></ItemsScreen>);
    default :  return (<View><Text>afbdsfbasb</Text></View>);
  }

 }

 render() {
    return (
      this.getComponentByName()
    );
 }
}

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};


export default function TabNav(props) {
  return new TabNavClass(props);
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
