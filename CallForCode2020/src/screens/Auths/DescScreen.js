import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import UserBackBtnHeader from '../../components/BtnBackUserHeader'

import DescDefaultTitle from '../../components/Auths/DescDefaultTitle'
import MajorDesc from '../../components/Auths/PublicTransport/MajorDesc'
import BtnListDesc1 from '../../components/Auths/PublicTransport/BtnListDesc1'
import BtnListDesc2 from '../../components/Auths/PublicTransport/BtnListDesc2'
import BtnListDesc3 from '../../components/Auths/PublicTransport/BtnListDesc3'
import BtnListDesc4 from '../../components/Auths/PublicTransport/BtnListDesc4'


export default class DescScreenClass extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={[styles.container, styles.size]}>
                {/* user & back icon */}
                <View style={styles.userbackbtn}><UserBackBtnHeader /></View>

                {/* usage title, description */}
                <View style={styles.groupingHeaer}>
                    <DescDefaultTitle
                        DescDefaultTitle style={styles.howtousage} />
                    <MajorDesc />
                </View>

                {/* Description list */}
                <View style={styles.descList}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('JudgeScreen')
                    }}>
                        <BtnListDesc1 />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('CameraScreen',{params : this.props.route.params.props})
                    }}>
                        <BtnListDesc2 />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('EditScreen')
                    }}>
                        <BtnListDesc3 />
                    </TouchableOpacity>
                                     
                </View>
            </View>
        )
    }
}

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

    descList: {
        flex: 6,
    },

    btnadd: {
        flex: 1,
    },


    howtousage: {
        marginLeft: "35%",
    },


    // grouping
    groupingHeader: {
        flex: 1
    },
    groupingSvg: {
        flex: 3,
        paddingBottom: '5%'
    }
});