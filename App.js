import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Button, Alert } from 'react-native';
import MyApi from './api/MyApi'


export default class AwesomeProject extends Component {

  constructor(props){
    super(props)

    this.state = {
      username: 'ricardo_frango@hotmail.com',
      password: '123Qwe!',
    };

  }

  onLoginClick() {
    const api = new MyApi();

    ///console.log(this.state.username);

    (async() => {
      var response = await api.login("ricardo_frango@hotmail.com","123Qwe!")  // Successfully logged in
      console.log(response);
    })();

  }

  setUserName(username) {
    this.state.username=username;
  }

  setPassword(password) {
    this.state.password=password;
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(text) => this.setUserName({username:text})} style={styles.textInputStyle} underlineColorAndroid='transparent'/>
        <TextInput onChangeText={(text) => this.setPassword({password:text})} style={styles.textInputStyle} underlineColorAndroid='transparent'/>
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
