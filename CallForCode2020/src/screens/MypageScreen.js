import * as React from 'react';
import { 
  StyleSheet,
  View,
  Text, 
  Image
} from 'react-native';

import Constants from 'expo-constants';


export default function MypageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.userImage}
          source={require('../assets/images/robot-dev.png')}
        />
        <Text style={styles.userName}>유저이름</Text>
      </View>
      <View style={styles.menuList}>
        <Text style={styles.item}>tet</Text>
      </View>
    </View>
  );
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
