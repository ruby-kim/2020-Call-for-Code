import * as React from 'react';
import { 
  StyleSheet,
  View,
  Text, 
  Image,
  TouchableHighlight,Dimensions,
  FlatList,
  Button
} from 'react-native';


import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import CommonDataManager from "../singleton/CommonDataManager"
import { ScrollView } from 'react-native-gesture-handler';

let commonData = CommonDataManager.getInstance();


const editProfilePicture = async (props) => {
  let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

  if (permissionResult.granted === false) {
    alert('Permission to access camera roll is required!');
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();
  if (pickerResult.cancelled === true || pickerResult == null) 
    return;


    let photo = { uri: pickerResult.uri }
    let formdata = new FormData();
    let filename =  Date.now() + commonData._id + "." + commonData._path.split('/').pop().split('.').pop();
  
    formdata.append("id", commonData._id);
    formdata.append("password", commonData._password);
    formdata.append("path","profile/" + filename);
    formdata.append("uploaded_file", {uri: photo.uri, name: filename, type: 'multipart/form-data'})

    props.setState({path:"https://getstartednode-balanced-quokka-og.mybluemix.net/img/profile/" + filename});
    fetch('https://getstartednode-balanced-quokka-og.mybluemix.net/profile',{
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata
      }).then((response) => response.text())
      .then((json) => {
        commonData.initManager();
      });
};

function Item({ navigation, title }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image source ={{uri:"https://getstartednode-balanced-quokka-og.mybluemix.net/img/"+title.path}} 
      style ={{
        marginTop:"4%",
        marginLeft:"10%",
        width:Dimensions.get('window').width/1.25, 
        height:Dimensions.get('window').height/3, 
        backgroundColor: 'grey'
        }}>
    </Image>
  </View>
  );
}

class MypageScreenClass extends React.Component{
  constructor(props) {
    super()
    var data = [];
    commonData.saveState(this);
    if(commonData._history != "null"){  
      commonData._history.split(' ').forEach(item=>{
        data.push({ path : item});
    })}
  
    this.state = {history :data,point : commonData._point,  path:commonData._path, prop : props}
    }

   

 render() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View >
        <TouchableHighlight onPress={() => editProfilePicture(this)}>
          <Image 
            style={styles.userImage}
            source={{uri:this.state.path}}
          />
        </TouchableHighlight>
        <Text style={styles.userName}>{commonData._name}</Text>
      </View>
      <View style={{marginBottom:"5%",marginTop:"5%"}}>
        <Text style={styles.point}>Point :  {this.state.point}</Text>
        <Text style={styles.point}>Max Point : {this.state.point}</Text>
       
      </View>
      <FlatList
        data={this.state.history}
        renderItem={({ item }) => <Item navigation={this.state.navigation} title={item} />}
        keyExtractor={item => "saadsa"}
      />
      </ScrollView>
    </View>
  );
 }
}


export default function MypageScreen({ navigation }) {
  return new MypageScreenClass(navigation);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }, 
  point: {
    marginLeft : "10%",
    textAlign: 'left',
    paddingTop: 10,
    fontSize: 20,
  },
  profile: {
    backgroundColor: '#fefeff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    alignItems: 'center',
  },
  userImage: {
    borderRadius: 1000,
    height: 100,
    width: 100,
    borderWidth: 2,
    marginTop :"4%",
    marginLeft:"37.9%",
    backgroundColor: "grey",
    borderColor: "#f2f2f2",
  },
  userName: {
    textAlign:"center",
    paddingTop: 10,
    fontSize: 20,
  }
  
});
