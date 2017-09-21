import React, { Component } from 'react';
import { Text } from 'react-native';

import { Card, Button, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '' };
  state = { password: '' };
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


         <CardSection>
           <Button>
             Login
           </Button>
         </CardSection>

      </Card>
    );
  }
}

export default LoginForm;
