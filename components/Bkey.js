import React, { Component } from 'react';
import { Button, View } from 'react-native';
import colors from './colors';

class Bkey extends Component {
  render() {
    return (
      <View style={bkeyStyle}>
        <Button title='Ver B.key de tu reservación' color={colors.white} onPress={this.props.onPress} style={{ fontSize: 20, fontWeight: 'bold' }} />
      </View>
    );
  }
}

const bkeyStyle = {
  backgroundColor: colors.azure,
  height: 50,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 5
};

export default Bkey;
