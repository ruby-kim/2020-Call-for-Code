import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import DescDefaultTitle from '../../components/Auths/DescDefaultTitle'
import MajorHeading from '../../components/Auths/PublicTransport/MajorHeading'

class DescScreenClass extends React.Component {
    constructor(props) {
        super()
        this.state = { prop: props }
    }
    render() {
        return (
            <View style={[styles.container, styles.size]}>
                <DescDefaultTitle />
                <MajorHeading />
                <Text
                    //Forget
                    onPress={() => { this.state.prop.navigation.navigate('CameraScreen', {}); }}
                    style={{
                        position: 'absolute',
                        opacity: 0,
                        top: "42%",
                        opacity: 1,
                        left: "8%",
                        width: "84%",
                        height: "15%",
                    }} />
            </View>
        )
    }
}
function DescScreen(props) {
    return new DescScreenClass(props);
}

export default DescScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    desc: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    size: {
      width: '100%',
      height: '100%',
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
    }
  });