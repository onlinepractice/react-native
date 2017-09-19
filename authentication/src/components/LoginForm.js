import React, { Component } from 'react';
import { Card, Button, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { text: '' };
  render() {
return (
      <Card>
         <CardSection>
           <Input>
           label="E-mail"
             value={this.state.text}
             onChangeText={text => this.setState({ text })}
           </Input>
         </CardSection>
         <CardSection / >
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
