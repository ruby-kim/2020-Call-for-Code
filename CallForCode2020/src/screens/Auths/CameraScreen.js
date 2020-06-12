import * as React from 'react';
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import Layout from '../../constants/Layout'

class CameraScreenClass extends React.Component {
    constructor(props) {
        super()
        this.state = { prop: props }
    }
    render() { 
        return (
            <View>
                <Text
                    //Forget
                    onPress={() => { this.state.prop.navigation.navigate('AuthsCamera', {}); }}
                    style={{
                        position: 'absolute',
                        opacity: 1,
                        top: "78%",
                        opacity: 0,
                        left: "11.2%",
                        width: "77%",
                        height: "6%",
                        backgroundColor: 'red'
                    }} />
            </View>
        )
    }
}
function CameraScreen(props) {
    return new CameraScreenClass(props);
}

export default CameraScreen;


