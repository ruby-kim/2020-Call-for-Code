import * as React from 'react';
import { StyleSheet,Button,View ,Text} from 'react-native';

export default function BenefitsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>혜택화면</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
