import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView,Text, View, TouchableOpacity } from 'react-native'

import UserBackBtnHeader from '../../components/BtnBackUserHeader'

import MajorTitle from '../../components/Auths/PublicTransport/MajorTitle'
import Section1Desc from '../../components/Auths/PublicTransport/Section1Desc'
import Section1Content from '../../components/Auths/PublicTransport/Section1Content';

class JudgeScreenClass extends React.Component {
    constructor(props) {
        super()
        this.state = { prop: props }
    }
    render() {
        return (
            <SafeAreaView>
            <ScrollView>
                <View style={[styles.container, styles.size]}>
                    {/* user & back icon */}
                    <View style={styles.userbackbtn}><UserBackBtnHeader /></View>

                    {/* usage title, description */}
                  
                    <View style={styles.groupingHeaer}>
                        <MajorTitle style={styles.howtousage} />
                        <Section1Desc />
                        <Section1Content style={styles.section1content}/>
                    </View>
                </View>
            </ScrollView>
            </SafeAreaView>

        )
    }
}
function JudgeScreen(props) {
    return new JudgeScreenClass(props);
}

export default JudgeScreen;


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