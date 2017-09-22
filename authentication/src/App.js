import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common/Header';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCHihM8qEiFHRGrC2TlIn_8LmJp3MDoQdc',
    authDomain: 'burning-heat-9217.firebaseapp.com',
    databaseURL: 'https://burning-heat-9217.firebaseio.com/',
    projectId: 'burning-heat-9217',
    storageBucket: 'burning-heat-9217.appspot.com',
    messagingSenderId: '983222773561'
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
