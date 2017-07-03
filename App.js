import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Button, Alert } from 'react-native';
import MyApi from './api/MyApi'


export default class AwesomeProject extends Component {

  var state;

  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
    };
  }

  onLoginClick() {
    const api = new MyApi();

    api.login(this.state.username,this.state.password)
    .then(response => response.access_token)   // Successfully logged in
    .then(access_token => saveToken(access_token))    // Remember your credentials
    .catch(err => alert(err.message));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(text) => this.setState({username:text})} style={styles.textInputStyle} underlineColorAndroid='transparent'/>
        <TextInput onChangeText={(text) => this.setState({password:text})} style={styles.textInputStyle} underlineColorAndroid='transparent'/>
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
