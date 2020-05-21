import * as React from 'react';
import { Button,View ,Text} from 'react-native';

export default function NewsInfoScreen({ route, navigation }) {
  const { itemId } = route.params;
  const { title } = route.params;
  return (
    <View>
      <Text>여기서 데이터 id랑 제목으로 db에서 내용 불러올거에여 ㅎㅎ 칭찬 해줘여</Text>
      <Text>itemId: {JSON.stringify(itemId)} + " " + title: {JSON.stringify(title)} </Text>
      <Button onPress={() => navigation.goBack()} title={"assad"} />
    </View>
  );
}
