import * as React from 'react';
import { StyleSheet,Button,View ,Text} from 'react-native';


export default function NewsInfoScreen({ route,navigation }) {
  return new NewsInfoClass(route.params,navigation);
}

class NewsInfoClass extends React.Component{
  constructor(props,navigation) {
    super()
    this.state = {  title: "",  description : "" ,dateTime : "", navigation : navigation}
    getNewsinfoFromApi(this,props.id);
 }
 render() {
    return (
      <View>
         <View  style={styles.titleDiv}>
            <Text style={styles.titleText}>{this.state.title}</Text>
         </View>
        <View style={styles.titleDiv}>
          <Text>{this.state.description}</Text>
        </View>
        <View style={styles.titleDiv}>
          <Text>{this.state.dateTime}</Text>
        </View>
        <View style={styles.titleDiv}>
          <Text>like</Text>
          <Text>Dislike</Text>
        </View>
        <Button onPress={() => this.state.navigation.goBack()} title={"Back"} />
      </View>
    );
 }
}



const getNewsinfoFromApi = (self,id) => {
  fetch('http://192.168.0.71:3000/api/news', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({id : id})})
   .then((response) => response.json())
   .then((json)=>{
     self.setState({
       title : json.title,
       description : json.description,
       dateTime : json.dateTime
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
