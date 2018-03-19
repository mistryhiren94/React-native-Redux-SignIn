import React , { Component } from 'react';
import { View, Image, AsyncStorage, Alert } from 'react-native';
import { Container, Card, CardItem, Footer, Right, List, ListItem, Item, Input, Header, Body, Content, Title, Button, Text, Icon, Form, Inpute } from 'native-base';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RequiredValidation } from '../../components/validations';
import { ReduxFormItemTextField } from '../../components/ReduxFormItemTextField'
import { resetSignUpForm } from '../../Actions';
import styles from './style';

class DisplayDetails extends Component {
  state={
    firstName: '',
    lastName: '',
    address: '',
    city: ''
  }

  componentWillMount() {
    const {
      basicDetails
    } = this.props;

    this.setState({
      firstName: basicDetails.firstName,
      lastName: basicDetails.lastName,
      address: basicDetails.address,
      city: basicDetails.city
    });
  }

  onSubmitButtonPress = async () => {
    //store all values to local storage
    AsyncStorage.setItem('firstName', basicDetails.firstName);
    AsyncStorage.setItem('lastName', basicDetails.lastName);
    AsyncStorage.setItem('address', basicDetails.address);
    AsyncStorage.setItem('city', basicDetails.city);
    //reset state to initial values
    this.props.resetSignUpForm();
    //reset redux form
    this.props.dispatch(reset('basicDetails'));
    //navigation back to first screen
    Actions.home();
  }

  render(){
     const { handleSubmit, reset } = this.props;
    return (
      <Container style={styles.container}>
      <Content>
        <List>
          <ListItem>
            <Text>First Name : {this.state.firstName}</Text>
          </ListItem>
          <ListItem>
            <Text>Last Name : {this.state.lastName}</Text>
          </ListItem>
          <ListItem>
            <Text>Address : {this.state.address}</Text>
          </ListItem>
          <ListItem>
            <Text>City : {this.state.city}</Text>
          </ListItem>
        </List>
      </Content>
        <Footer>
          <Button
              light
              style={styles.footerButtonContainer}
              title="SUBMIT"
              onPress={() => Alert.alert(
                'Alert!',
                'Details Saved',
                [
                  {text: 'OK', onPress: handleSubmit(()=>this.onSubmitButtonPress() )},
                ],
                { cancelable: false }
              )}
            >
              <Text style={styles.submitButton}> SUBMIT </Text>
            </Button>
        </Footer>
      </Container>
    )
  }
}

DisplayDetails = reduxForm({
  // a unique name for the form
  form: 'displayDetails',
})(DisplayDetails)

const mapStateToProps = ({UserDetails}) => {
 return UserDetails;
}

export default connect(mapStateToProps, {resetSignUpForm})(DisplayDetails);
