import React, { Component } from 'react';
import { Text } from 'react-native';

class Review extends Component {
  render() {
    return (<Text>{this.props.rating}</Text>);
  }
}

export default Review;
