import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

class Feature extends Component {
  render() {
    const image = background[this.props.type];
    return (
      <View style={{ marginRight: 20, marginBottom: 20 }}>
        <Image source={image} style={{ width: 120, height: 120 }} />
      </View>
    );
  }
}

const background = {
  wifi: require('../img/wifi.png'),
  help: require('../img/help.png'),
  services: require('../img/services.png')
};

export default Feature;
