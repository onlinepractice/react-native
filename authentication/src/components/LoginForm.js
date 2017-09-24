import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, Button, CardSection, Input, Spin } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        this.setState({ error: 'Incorrect Email or Password', loading: false });
      });
    });
  }
onLoginSuccess() {
  this.setState({
    email: '',
    password: '',
    loading: false,
    error: ''
    });
}
  renderButton() {
    if (this.state.loading) {
    return <Spin size="small" / >;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }
  render() {
return (
      <Card>
         <CardSection >
           <Text style={{ fontSize: 20 }}>
             E-mail
           </Text>
         </CardSection>

         <CardSection>
           <Input
             keyboardType='email-address'
             placeholder="user@gmail.com"
             value={this.state.email}
             onChangeText={email => this.setState({ email })}
           / >
         </CardSection>


         <CardSection >
           <Text style={{ fontSize: 20 }}>
             Password
           </Text>
         </CardSection>

         <CardSection>
           <Input
             secureTextEntry
             placeholder="password"
             value={this.state.password}
             onChangeText={password => this.setState({ password })}
           / >
         </CardSection>

            <Text style={{ fontSize: 20, color: 'red', alignItems: 'center' }}>
            {this.state.error}
            </Text>

         <CardSection>
          {this.renderButton()}
         </CardSection>

      </Card>
    );
  }
}

export default LoginForm;
