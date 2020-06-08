import * as React from 'react';
import { SafeAreaView,ScrollView,StyleSheet,Button,View ,Text} from 'react-native';


export default function NewsInfoScreen({ route,navigation }) {
  return new NewsInfoClass(route.params,navigation);
}

class NewsInfoClass extends React.Component{
  constructor(props,navigation) {
    super()
    this.state = {  title: props.title,  description : "" ,dateTime : props.dateTime, navigation : navigation}
    getNewsinfoFromApi(this,props.id);
 }
 render() {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
      </ScrollView>
    </SafeAreaView>
    );
 }
}

const getNewsinfoFromApi = (self,id) => {
  fetch('https://my-nodejs-app-1234-wise-elephant-ui.mybluemix.net/api/news', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({id : id})})
   .then((response) => response.json())
   .then((json)=>{
     self.setState({
       description : json.description
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
    fontSize : 20,
    marginLeft:10,
  }
});
