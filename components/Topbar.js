import React, { Component } from 'react';
import { Button, View } from 'react-native';
import Logo from './Logo';
import colors from './colors';

class Topbar extends Component {
  render() {
    return (
      <View style={top}>
        <Logo />
      </View>
    );
  }
}
const top = {
  paddingTop: 30,
  justifyContent: 'space-between',
  backgroundColor: colors.darkishBlue,
  alignItems: 'center'
};

export default Topbar;
