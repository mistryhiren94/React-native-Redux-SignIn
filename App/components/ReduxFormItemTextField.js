import React from 'react';
import { Field} from 'redux-form';
import { Container, Card, CardItem, Footer, Right, Item, Input, Header, Body, Content, Title, Button, Text, Icon, Form, Inpute } from 'native-base';

class ReduxFormItemTextField extends React.Component{
    render() {
      const { input, label, type, secureTextEntry, meta: { touched, error, warning } } = this.props;
      let hasError= false;
      if(error !== undefined){
        hasError= true;
      }
        return(
          <Item error= {hasError}>
            <Input
              {...input}
              autoCorrect = {false}
              autoCapitalize = {'none'}
              secureTextEntry={secureTextEntry?secureTextEntry:false}
              placeholder={input.name=='firstName' ? 'First Name' : input.name=='lastName' ? "Last Name (Optional)" : input.name}
            />
          </Item>
        )
    }
}

export { ReduxFormItemTextField };
