/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';

export default class todo extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      text: "",
      dataSource: ds.cloneWithRows(["Mow the Lawn", "Fire Romano from his Job", "Teach Andrew How to Read", "Eat Spaghetti", "Debate Politics with Lebage", "Code", "More Code", "Code Again"])
  };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Pomotodo
        </Text>
        <Text style={styles.instructions}>
          A to-do list based upon the Pomodoro method.
        </Text>
          <TextInput style={styles.input} placeholder="Enter your next big thing here.">
          </TextInput>
          <ListView dataSource={this.state.dataSource} renderRow={(rowData)=><Text style={styles.instructions}>{rowData}</Text>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  input: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'green',
  }
});

AppRegistry.registerComponent('todo', () => todo);
