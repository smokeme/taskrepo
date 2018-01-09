import React, { Component } from 'react';
import {Link } from 'react-router-native';
import { Container, Header, Body, Button, Icon, Title , Content, Text, Left , Right } from 'native-base';
export default class MyHeader extends Component {
  render() {
    return (
        <Header>
        <Right>
        <Button transparent>
        <Link to= '/'>
        <Icon name='apps'/>
        </Link>
        </Button>
        </Right>
          <Body>
            <Title>{this.props.header}</Title>
          </Body>
          <Left>
          <Button transparent>
          <Link to= '/x'>
          <Icon name='menu'/>
          </Link>
          </Button>
          </Left>
        </Header>
    );
  }
}
