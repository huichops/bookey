import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import colors from './colors';

class Skip extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#d8d8d8', flex: 1, alignItems: 'center' }}>
        <Button title='Skip' color={colors.azure} onPress={this.props.onPress}>
        </Button>
      </View>
    );
  }
}

const skipStyle = {
    width: 200,
    height: 50,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
    color: colors.azure
};

export default Skip;
