import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import colors from './colors';

import Review from './Review';

class Category extends Component {
  render() {
    return (
      <View style={{ marginRight: 20, marginBottom: 20 }}>
        <Image source={{ uri: this.props.photo }} style={{ width: 120, height: 160 }} />
        <Text style={{ fontWeight: 'bold', color: colors.black, marginTop: 5 }}>{this.props.children}</Text>
        <Review rating={this.props.rating} />
        <Text style={{ color: colors.black }}>{this.props.type}</Text>
      </View>
    );
  }
}

export default Category;
