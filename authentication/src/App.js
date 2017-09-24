import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spin, Card, CardSection } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {
  state={ loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({

    apiKey: 'AIzaSyCDjGkCl8gzj4Z98gTMJm2RqP4OQARnw8Q',
    authDomain: 'auth-613b6.firebaseapp.com',
    databaseURL: 'https://auth-613b6.firebaseio.com',
    projectId: 'auth-613b6',
    storageBucket: 'auth-613b6.appspot.com',
    messagingSenderId: '529616686082'
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
        this.setState({ loggedIn: false });
      }
   });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Card>
        <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
        Log Out </Button>
        </CardSection>
        </Card>
      );
      case false:
      return <LoginForm / >;
        default:
        return (
          <Card>
          <CardSection>
          <Spin
          style={{ justifyContent: 'center', alignItems: 'center', felx: 1, size: 'large' }}
          / >
          </CardSection>
          </Card>
      );
    }
  }
  render() {
  return (
    <View>
    <Header HeaderText={'Authentication'} />
    {this.renderContent()}
    </View>
  );
}
}
export default App;

