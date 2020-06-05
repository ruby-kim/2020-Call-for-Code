import * as React from 'react';
import { StyleSheet,Button,View ,Text} from 'react-native';


class ItemsInfoScreenClass extends React.Component{
  constructor(props,navigation) {
    super()
    this.state = {  title: props.title,  desc : "" ,dateTime : props.dateTime, navigation : navigation}
    getProductinfoFromApi(this,props.id);
 }
 render() {
  return (
    <View>
         <View style={styles.titleDiv}>
            <Text style={styles.titleText}>{JSON.stringify(this.state.title)}</Text>
         </View>
      <View style={styles.titleDiv}>
        <Text>{JSON.stringify(this.state.desc)} </Text>
      </View>
      <View style={styles.titleDiv}>
        <Text>Like </Text>
        <Text>Dislike </Text>
      </View>
      <Button onPress={() => this.state.navigation.goBack()} title={"Back"} />
    </View>
  );
 }
}


export default function ItemsInfoScreen({ route,navigation }) {
  return new ItemsInfoScreenClass(route.params,navigation);
}


const getProductinfoFromApi = (self,id) => {
  fetch('http://my-nodejs-app-1234-reflective-porcupine-nh.mybluemix.net/api/productinfo', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({id : id})})
   .then((response) => response.json())
   .then((json)=>{
     self.setState({
       desc : json.description,
     });
   });
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  titleDiv: {
    margin : 5,
    borderWidth: 1,    
  },
  titleText:{
    fontSize : 40,
    marginLeft:10,
  }
});
