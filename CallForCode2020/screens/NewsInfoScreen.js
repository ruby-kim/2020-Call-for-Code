import * as React from 'react';
import { StyleSheet,Button,View ,Text} from 'react-native';

export default function NewsInfoScreen({ route, navigation }) {
  const { itemId } = route.params;
  const { title } = route.params;
  return (
    <View>
         <View  style={styles.titleDiv}>
            <Text style={styles.titleText}>asdasdas</Text>
         </View>
      <View style={styles.titleDiv}>
        <Text>여기서 데이터 id랑 제목으로 db에서 내용 불러올거에여 </Text>
        <Text>itemId: {JSON.stringify(itemId)} + " " + title: {JSON.stringify(title)} </Text>
      </View>
      <View style={styles.titleDiv}>
        <Text>Like </Text>
        <Text>Dislike </Text>
      </View>
      <Button onPress={() => navigation.goBack()} title={"assad"} />
    </View>
  );
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
