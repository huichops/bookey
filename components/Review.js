import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Star from './Star';

class Review extends Component {
  render() {
    const stars = [...Array(this.props.rating)].map((n, i) => <Star key={i} />);

    return (
      <View style={{ flexDirection: 'row' }}>
        {stars}
      </View>
    );
  }
}

export default Review;
