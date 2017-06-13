import React, { Component } from 'react';
import { Image, View } from 'react-native';
import colors from './colors';

class Topbar extends Component {
  render() {
    const image = images[this.props.type];
    return (
      <View style={style}>
        <Image source={image} />
      </View>
    );
  }
}

const style = {
  paddingTop: 18,
  borderRadius: 60,
  width: 60,
  height: 60,
  backgroundColor: '#0998ff',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const images = {
  phone: require('../img/phone.png'),
  shuttle: require('../img/shuttle.png'),
  car: require('../img/car.png')
};

export default Topbar;
