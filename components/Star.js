import React, { Component } from 'react';
import { Image } from 'react-native';

class Star extends Component {
  render() {
    return <Image source={require('../img/star.png')} />;
  }
}

export default Star;
