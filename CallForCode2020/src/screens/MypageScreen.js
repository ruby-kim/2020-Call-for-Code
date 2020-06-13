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
let commonData = CommonDataManager.getInstance();


const editProfilePicture = async (props) => {
  let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

  if (permissionResult.granted === false) {
    alert('Permission to access camera roll is required!');
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();
  if (pickerResult.cancelled === true) 
    return;



    let photo = { uri: pickerResult.uri }
    let formdata = new FormData();
    let filename = commonData._rev + commonData._id + "." + commonData._path.split('/').pop().split('.').pop();

    formdata.append("id", commonData._id);
    formdata.append("password", commonData._password);
    formdata.append("path",filename);
    formdata.append("uploaded_file", {uri: photo.uri, name: filename, type: 'multipart/form-data'})

    props.setState({path:"https://getstartednode-balanced-quokka-og.mybluemix.net" + filename});
    fetch('https://getstartednode-balanced-quokka-og.mybluemix.net/profile',{
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata
      }).then((response) => response.text())
      .then((json) => {
        alert(json);
      });
};


class MypageScreenClass extends React.Component{
  constructor(props) {
    super()

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
