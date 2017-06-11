import React, { Component } from 'react';
import { Image } from 'react-native';

class Logo extends Component {
  render() {
    return (
      <Image
        source={require('../img/logo.png')}
        style={{ width: 70, height: 30, marginBottom: 40 }}
      />
    );
  }
}

export default Logo;
