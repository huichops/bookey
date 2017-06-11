import React, { Component } from 'react';
import { Text } from 'react-native';

class Span extends Component {
  render() {
    return (
      <Text style={{ fontSize: 14, color: 'white',  width: 280, textAlign: 'center', lineHeight: 19 }}>
        {this.props.children}
      </Text>
    );
  }
}

export default Span;
