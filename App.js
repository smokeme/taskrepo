import React, { Component } from 'react';
import { Container, Header, Body, Button, Icon, Title , Content, Text } from 'native-base';
import MyHeader from './Components/MyHeader';
import {NativeRouter, Route, Link } from 'react-router-native';
import NewComponent from './Components/NewComponent';
import NewerComponent from './Components/NewerComponent';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      header: 'header'
    }
  }
  alertMe(){
    alert('hello')
  }
  changeHeader(){
    if(this.state.header === 'new header'){
      this.setState({header: 'old header'})
    } else {
    this.setState({header: 'new header'})
  }
  }
  render() {
    return (
      <NativeRouter>
        <Container>
          <MyHeader header={this.state.header}/>
          <Content>
            <Route exact path='/' component={NewComponent} />
            <Route path='/x' component={NewerComponent} />

            <Button onPress={this.alertMe.bind(this)}>
              <Text>Alert</Text>
            </Button>
            <Button onPress={this.changeHeader.bind(this)}>
              <Text>Change Header</Text>
            </Button>
            
          </Content>
        </Container>
      </NativeRouter>
    );
  }
}
