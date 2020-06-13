import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import UserBackBtnHeader from '../../components/BtnBackUserHeader'

import UploadAuthTitle from '../../components/Auths/UploadAuthTitle'
import DescImageAuth from '../../components/Auths/DescImageAuth'
import Section3Content from '../../components/Auths/PublicTransport/Section3Content'

class EditScreenClass extends React.Component {
    constructor(props) {
        super()
        this.state = { prop: props }
    }
    render() {
        return (
            <View>
                <View style={[styles.container, styles.size]}>
                    {/* user & back icon */}
                    <View style={styles.userbackbtn}><UserBackBtnHeader /></View>

                    {/* usage title, description */}
                    <View style={styles.groupingHeaer}>
                        <UploadAuthTitle style={styles.howtousage} />
                        <DescImageAuth />
                        <Section3Content />
                        {/* <Image
                            style={{height:'100%', width: '100%'}}
                            source={ require('../../assets/images/Section3Content.PNG') } /> */}
                    </View>

                </View>
            </View>

        )
    }
}
function EditScreen(props) {
    return new EditScreenClass(props);
}

export default EditScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    // user & back button
    userbackbtn: {
        flex: 1,
        marginTop: '10%',
    },

    // default svg
    size: {
        width: '100%',
        height: '100%',
    },

    section1content: {
        flex: 4,
        marginLeft: "2%"
    },

    btnadd: {
        flex: 1,
    },


    howtousage: {
        marginLeft: "30%",
        marginTop: "20%",
    },


    // grouping
    groupingHeader: {
        flex: 5,
        marginTop: 20
    },
    groupingSvg: {
        flex: 3,
        paddingBottom: '5%'
    }
});