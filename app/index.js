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
  View,
  Button,
  TextInput,
} from 'react-native';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "your info here",
  authDomain: "your info here",
  databaseURL: "your info here",
  projectId: "your info here",
  storageBucket: "your info here",
  messagingSenderId: "your info here"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class firebase3 extends Component {

  constructor(props) {
   super(props);
   console.ignoredYellowBox = [
           'Setting a timer'
       ];


   this.state = {
     email: '',
     password: '',
   };

   this.itemsRef = firebaseApp.database().ref();
 }

  onLogoff = () => {
    console.log("Log off");

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("Logged out");
  }).catch(function(error) {
    // An error happened.
    console.log("Could not log out: " + error)
  });
  }


  onGoogle = () => {
    console.log("Google");
  }

  onFacebook = () => {
    console.log("facebook");
  }


  onEmailSignup = () => {
    console.log("Email signup");
       firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function() {
         console.log("Signedup")
       }).catch(function(error) {
         // An error happened.
         console.log("Could not login: " + error)
       });
  }
  onEmail = () => {
    console.log("Email");

    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function() {
      console.log("Logged in")
    }).catch(function(error) {
      // An error happened.
      console.log("Could not login: " + error)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Firebase Autentication
        </Text>
        <Text style={styles.instructions}>
          Status:
        </Text>
        <View style={styles.container}>
        <Button onPress={this.onLogoff} title="Logoff" />

        <Button onPress={this.onGoogle} title="Google" />
        <Button onPress={this.onFacebook} title="Facebook" />
        <Button onPress={this.onEmailSignup} title="Email Signup" />
        <Button onPress={this.onEmail} title="Email" />
        </View>
        <View style={styles.textcontainer}>
        <Text style={styles.instructions}>
          Email:
        </Text>
        <TextInput style={styles.text} value={this.state.email} onChangeText={(email) => this.setState({email})} />

        <Text style={styles.instructions}>
          Password:
        </Text>
        <TextInput style={styles.text} value={this.state.password} onChangeText={(password) => this.setState({password})} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 6,
  },
  textcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 6,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    width: 200,
  },
});

AppRegistry.registerComponent('firebase3', () => firebase3);
