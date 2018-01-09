import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import {ListView} from 'react-native';

export default class ListExample extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    }
  }
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(
      (x) => x.json()
    ).then(
      (y) => this.setState({dataSource: this.state.dataSource.cloneWithRows(y)})
    )
  }
  renderItem(object){
    return (
      <ListItem>
        <Text>{object.title}</Text>
      </ListItem>
    )
  }
  render() {
    return (

          <List>
          <ListView dataSource={this.state.dataSource} renderRow={this.renderItem}/>


          </List>

    );
  }
}
