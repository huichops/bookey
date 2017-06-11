import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import colors from './colors';

class CategoryList extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ justifyContent: 'space-between' }} horizontal>
        {this.props.children}
      </ScrollView>
    );
  }
}

export default CategoryList;
