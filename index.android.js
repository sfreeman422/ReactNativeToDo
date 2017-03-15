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
  ScrollView,
  View
} from 'react-native';

export default class todo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Pomotodo
        </Text>
        <Text style={styles.instructions}>
          A to-do list based upon the Pomodoro method.
        </Text>
        <ScrollView style={styles.instructions}>
          <Text style={styles.instructions}>
          To do
          </Text>
         <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
          <Text style={styles.instructions}>
          To do
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
});

AppRegistry.registerComponent('todo', () => todo);
