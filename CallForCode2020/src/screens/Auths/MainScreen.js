import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import AuthDesc from '../../components/Auths/AuthDesc'

import UserBackBtnHeader from '../../components/BtnBackUserHeader'
import HowToUsage from '../../components/HowToUsage'
import OptionReadNews from '../../components/Auths/ReadNews/OptionReadNews'
import OptionPublicTransport from '../../components/Auths/PublicTransport/OptionPublicTransport'
import OptionWalk from '../../components/Auths/Walk/OptionWalk'
import OptionRecycle from '../../components/Auths/Recycle/OptionRecycle'
import BtnAdd from '../../components/BtnAdd'

class MainScreenClass extends React.Component {
  constructor(props) {
    super()
    this.state = { prop: props }
  }

  render() {
    return (
      <View style={[styles.container, styles.size]}>
        {/* user & back icon */}
        <View style={styles.userbackbtn}><UserBackBtnHeader/></View>

        {/* usage title, description */}
        <View style={styles.groupingHeaer}>
          <HowToUsage style={styles.howtousage} />
          <AuthDesc />
        </View>

        {/* buttons */}
        <View style={styles.groupingSvg}>
          <View style={styles.settingRowDir}>
            <TouchableOpacity onPress={() => {
              this.state.prop.navigation.navigate('DescScreen')
            }}>
              <OptionReadNews />
            </TouchableOpacity>
            <Text>     </Text>
            <TouchableOpacity onPress={() => {
              this.state.prop.navigation.navigate('DescScreen')
            }}>
              <OptionPublicTransport />
            </TouchableOpacity>
          </View>

          <View style={styles.settingRowDir}>
            <TouchableOpacity onPress={() => {
              this.state.prop.navigation.navigate('DescScreen')
            }}>
              <OptionWalk />
            </TouchableOpacity>
            <Text>     </Text>
            <TouchableOpacity onPress={() => {
              this.state.prop.navigation.navigate('DescScreen')
            }}>
              <OptionRecycle />
            </TouchableOpacity>
          </View>
        </View>
      
        {/* add list button */}
        <View style={styles.btnadd}>
          <BtnAdd />
        </View>
      </View>
    );
  }
}
function MainScreen(props) {
  return new MainScreenClass(props);
}

export default MainScreen;

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
  settingRowDir: {
    flexDirection: 'row',
    marginTop: 20,
  },
  btnadd: {
    flex: 1,
  },


  howtousage: {
    marginTop: "25%",
    marginLeft: "38%",
  },


  // grouping
  groupingHeader: {
    flex: 1
  },
  groupingSvg: {
    flex: 3,
  }
});