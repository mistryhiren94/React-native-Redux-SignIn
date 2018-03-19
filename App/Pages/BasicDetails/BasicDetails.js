import React , { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Card, CardItem, Footer, Right, Item, Input, Header, Body, Content, Title, Button, Text, Icon, Form, Inpute } from 'native-base';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {RequiredValidation} from '../../components/validations';
import { ReduxFormItemTextField} from '../../components/ReduxFormItemTextField';
import { setBasicDetails, resetSignUpFormStatus } from '../../Actions';
import styles from './style';

class BasicDetails extends Component {

  constructor(props){
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			address: '',
			city: ''
		}
  }

  componentDidMount() {
    this.props.initialize({ firstName: "", lastName: "", Address: "", City: "" });
  }

  componentWillReceiveProps({resetStatus}) {
    if(resetStatus){
      this.props.dispatch(reset('basicDetails'));
      this.props.initialize({ firstName: "", lastName: "", Address: "", City: "" });
      this.setState({ firstName: "", lastName: "", address: "", city: "" })
      this.props.resetSignUpFormStatus();
    }
  }

  onBasicFormSubmit = () => {
    const { firstName, lastName, address, city } = this.state;
    this.props.setBasicDetails({firstName, lastName, address, city});
    Actions.displayDetails();
  }

  onFirstNameChange = (event, val) => {
    this.setState({firstName: val})
  }

  onLastNameChange = (event, val) => {
    this.setState({lastName: val})
  }

  onAddressChange = (event, val) => {
    this.setState({address: val})
  }

  onCityChange = (event, val) => {
    this.setState({city: val})
  }

  render(){
     const { handleSubmit, reset } = this.props;
    return (
      <Container style={styles.container}>
      <Content>
        <Card>
          <CardItem>
            <Field
              name="firstName"
              onChange={this.onFirstNameChange}
              value={this.state.firstName}
              component={ReduxFormItemTextField}
            />
           </CardItem>
        </Card>
        <Card>
           <CardItem>
             <Field
              name="lastName"
              onChange={this.onLastNameChange}
              value={this.state.lastName}
              component={ReduxFormItemTextField}
              secureTextEntry = {false}
            />
           </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Field
              name="Address"
              onChange={this.onAddressChange}
              value={this.state.address}
              component={ReduxFormItemTextField}
              secureTextEntry = {false}
            />
           </CardItem>
        </Card>
        <Card>
           <CardItem>
             <Field
              name="City"
              onChange={this.onCityChange}
              value={this.state.city}
              component={ReduxFormItemTextField}
              secureTextEntry = {false}
            />
           </CardItem>
        </Card>
      </Content>
        <Footer>
          <Button
            style={styles.footerButtonContainer}
            iconRight
            light
            onPress={handleSubmit(()=>this.onBasicFormSubmit() )}
          >
            <Text style={styles.nextButton}>NEXT</Text>
            <Image source={require('../../Images/next.png')} style={{width: 24, height: 24}} />
          </Button>
        </Footer>
      </Container>
    )
  }
}

BasicDetails = reduxForm({
  // a unique name for the form
  form: 'basicDetails',
  initialValues:{firstName: "", lastName: "", Address: "", City: ""},
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(BasicDetails)

const mapStateToProps = ({UserDetails}) => {
 return UserDetails;
}

export default connect(mapStateToProps, {setBasicDetails, resetSignUpFormStatus})(BasicDetails);
