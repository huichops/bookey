import React, { Component } from 'react';
import { Text } from 'react-native';
import colors from './colors';

class CategoryTitle extends Component {
  render() {
    return (
      <Text style={styles.subtitle}>{this.props.children}</Text>
    );
  }
}

const styles = {
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
    textAlign: 'left',
    color: colors.black,
    marginBottom: 10,
    marginTop: 10
  }
};

export default CategoryTitle;
