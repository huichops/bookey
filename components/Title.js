import React, { Component } from 'react';
import { Text } from 'react-native';

class Title extends Component {
  render() {
    return (
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginTop: 20, marginBottom: 30, textAlign: 'center', width: 275 }}>
        {this.props.children}
      </Text>
    );
  }
}

export default Title;
