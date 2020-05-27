import * as React from 'react';
import { StyleSheet,Button,View ,Text} from 'react-native';

export default function MypageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>마이페이지</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
