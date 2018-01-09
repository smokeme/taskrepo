import React, { Component } from 'react';
import { View, Header, Content, Icon } from 'native-base';
export default class IconExample extends Component {
  render() {
    return (
      <View>
          <Icon name='home' />
          <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
      </View>
    );
  }
}
