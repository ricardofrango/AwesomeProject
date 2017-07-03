import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Button, Alert } from 'react-native';

export default class AwesomeProject extends Component {

  onLoginClick() {
    Alert.alert('on Press!');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle} underlineColorAndroid='transparent'/>
        <TextInput style={styles.textInputStyle} underlineColorAndroid='transparent'/>
        <Button style={styles.buttonStyle} title="Login" onPress={this.onLoginClick}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    flexDirection:'column',
    alignItems:'stretch',
    justifyContent:'center'
  },
  textInputStyle: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    padding: 10
  },
  buttonStyle: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FF0000"
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
