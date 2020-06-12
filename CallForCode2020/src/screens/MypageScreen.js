import * as React from 'react';
import { 
  StyleSheet,
  View,
  Text, 
  Image,
  TouchableHighlight
} from 'react-native';


import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import CommonDataManager from "../singleton/CommonDataManager"



const editProfilePicture = async (props) => {
  let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

  if (permissionResult.granted === false) {
    alert('Permission to access camera roll is required!');
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();
  if (pickerResult.cancelled === true) 
    return;



    if(props.state.path.split('/').pop() == "basic.jpg"){
        //?????? ??
    }else{
      //? ???? ??
    }
    

    return;
    let photo = { uri: pickerResult.uri }
    let formdata = new FormData();
    let filename = photo.uri.split('/').pop();

    formdata.append("nspeakers", 'test')
    formdata.append("uploaded_file", {uri: photo.uri, name: new Date().getDate()+filename, type: 'multipart/form-data'})
    
    fetch('http://192.168.0.71:3000/stats',{
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata
      }).then(response => {
        console.log("image uploaded")
      }).catch(err => {
        console.log(err)
      })  
};


class MypageScreenClass extends React.Component{
  constructor(props) {
    super()
    let commonData = CommonDataManager.getInstance();
    this.state = {path:commonData._path, prop : props}
 }

 render() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
      <TouchableHighlight onPress={() => editProfilePicture()}>
        <Image 
          style={styles.userImage}
          source={{uri:this.state.path}}
        />
        </TouchableHighlight>
        <Text style={styles.userName}>유저이름</Text>
      </View>
      <View style={styles.menuList}>
        <Text style={styles.item}>tet</Text>
      </View>
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
  profile: {
    backgroundColor: '#fefefe',
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
    borderColor: "#f2f2f2",
  },
  userName: {
    paddingTop: 10,
    fontSize: 20,
  },
  menuList: {
    backgroundColor: '#fefefe',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    alignItems: 'center',
  }
});
