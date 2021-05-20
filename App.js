import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react - native';

class HelloThere extends React.Component {
  clickMe() {
    Alert.alert("Hi!")
  }
  render() {
    return (
      <TouchableOpacity onPress={this.clickMe()}>
        <View style={styles.box}>
          <Text style={styles.message}>Hello World {this.props.name}. Please click me.</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  box: {
    borderColor: 'red',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    width: 100,
    height: 100
  },
  message: {
    fontFamily: 'myCustomFont'
  }
});

React.render(<HelloThere name="Component" />, document.getElementById('content'));