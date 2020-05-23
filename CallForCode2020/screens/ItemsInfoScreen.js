import * as React from 'react';
import { StyleSheet,Button,View ,Text} from 'react-native';

export default function ItemsInfoScreen({ route, navigation }) {
  const { itemId } = route.params;
  const { title } = route.params;
  return (
    <View>
      <View style={styles.imgContainer}>
        사진자리
      </View>
      <View style={styles.itemDesContainer}>
        <View style={styles.title}>
          <Text>itemId: {JSON.stringify(itemId)} + " " + title: {JSON.stringify(title)}</Text>
        </View>
        <View style={Styles.contentContainer}>
      </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  imgContainer: {
    flex: 1,
  },
  itemDesContainer: {
    flex: 3,
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
