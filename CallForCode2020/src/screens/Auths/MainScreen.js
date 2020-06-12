import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import AuthDesc from '../../components/Auths/AuthDesc'

import HowToUsage from '../../components/HowToUsage'
import OptionReadNews from '../../components/Auths/ReadNews/OptionReadNews'
import OptionPublicTransport from '../../components/Auths/PublicTransport/OptionPublicTransport'
import OptionWalk from '../../components/Auths/Walk/OptionWalk'
import OptionRecycle from '../../components/Auths/Recycle/OptionRecycle'

class MainScreenClass extends React.Component {
  constructor(props) {
    super()
    this.state = { prop: props }
  }

  render() {
    return (
      <View style={[styles.container, styles.size]}>
        <HowToUsage />
        <AuthDesc style={styles.desc} />
        <TouchableOpacity onPress={() => {
          this.state.prop.navigation.navigate('DescScreen')}}>
          <OptionPublicTransport />
        </TouchableOpacity>
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