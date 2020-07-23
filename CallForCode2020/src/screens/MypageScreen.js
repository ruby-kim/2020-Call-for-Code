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


export default class MypageScreenClass extends React.Component{
  constructor(props) {
    super(props)
    console.log("==========");
    console.log(this.props);
    /*
    var data = [];
    if( this.props.history != "null"){  
      this.props.history.split(' ').forEach(item=>{
        data.push({ path : item});
    })}*/
    this.editProfilePicture = this.editProfilePicture.bind(this);
  }

  editProfilePicture = async (props) => {
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
      let filename = this.props.params.rev + this.props.params.id + "." + this.props.params.path.split('/').pop().split('.').pop();
  
      formdata.append("id", this.props.params.id);
      formdata.append("password", this.props.params.password);
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



 render() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
      <TouchableHighlight onPress={() => this.editProfilePicture()}>
        <Image 
          style={styles.userImage}
          source={{uri:this.props.params.path}}
        />
        </TouchableHighlight>
        <Text style={styles.userName}>{this.props.params.name}</Text>
      </View>
      <View style={{marginBottom:"5%",marginTop:"5%"}}>
        <Text style={styles.point}>Point :  {this.props.params.point == "" ? 0 : this.props.params.point}</Text>
        <Text style={styles.point}>Max Point : {this.props.params.maxPoint? 0 : this.props.params.maxPoint}</Text>
      </View>
    </View>
  );
 }
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
