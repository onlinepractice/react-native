import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common/Header';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({

        apiKey: 'AIzaSyCDjGkCl8gzj4Z98gTMJm2RqP4OQARnw8Q',
    authDomain: 'auth-613b6.firebaseapp.com',
    databaseURL: 'https://auth-613b6.firebaseio.com',
    projectId: 'auth-613b6',
    storageBucket: 'auth-613b6.appspot.com',
    messagingSenderId: '529616686082'
  });
  }
  render() {
  return (
    <View>
    <Header HeaderText={'Authentication'} />
    <LoginForm />
    </View>

  );
}
}
export default App;
