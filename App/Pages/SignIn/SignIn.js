import React, { Component } from 'react';
import {
  View,
  Platform,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ToastAndroid,
  StatusBar,
  AsyncStorage,
  ActivityIndicator
 } from 'react-native';
 import styles from './style';
import { Actions } from 'react-native-router-flux';

var Api = require('../../DataBase/Api');


export default class SignIn extends Component {
  constructor(props) {
    super(props);
    console.log('props======',this.props);
    this.state = {
      email:'',
      password: '',
      isLoading: true
    };

    this.signIn = this.signIn.bind(this);

  }

  componentWillMount() {
    
    AsyncStorage.getItem("token")
    .then((value) => {
      if(value) {
        Actions.home();
      } else {
        this.setState({isLoading: false});
      }
    })
    .catch(function(err) {
      alert(err)
      console.log('err');
    });
  
  }

  signIn() {
    if(!this.state.email || !this.state.password) {
      ToastAndroid.show('Please enter credentials', ToastAndroid.SHORT);
    } else {

      let data = {};
      data.email = this.state.email;
      data.password = this.state.password;

      let url = "login";

      Api.httpPost(url, data)
      .then(response => {
        if(response.data.meta.message === "Logged in successfully.") {
          console.log('response====', response.data.data.user);
          let token = response.data.data.user.token;
          AsyncStorage.setItem('token', token);
          Actions.home();
        } else {
          throw 'User Not Exists';
        }
      })
      .catch(error => {
        ToastAndroid.show(error, ToastAndroid.SHORT);
        console.log('error====', error);
      });
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#453a5a"
          barStyle="light-content"
        />
        {this.state.isLoading &&
          <View style={styles.alignLoader}>
            <ActivityIndicator size="large" color="#453a5a" />
          </View>
        ||
        <ImageBackground style={styles.imagesize_logo}>
          <Text style={styles.LableText1}>Sign In </Text>
          <TextInput style={styles.inputLast}
            fontSize={(Platform.OS === 'ios') ? 18:20}
            placeholder='Email'
            placeholderTextColor='#9E9E9E'
            underlineColorAndroid='transparent'
            textAlign='center'
            keyboardType='email-address'
            ref='email'
            value={this.state.email}
            onChangeText={(email) => this.setState({email: email})}/>

          <TextInput style={styles.input}
            fontSize={(Platform.OS === 'ios') ? 18:20}
            placeholder='Password'
            placeholderTextColor='#9E9E9E'
            underlineColorAndroid='transparent'
            textAlign='center'
            ref='password'
            value={this.state.password}
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password: password})} />

          <TouchableOpacity onPress={this.signIn}>
            <View style={styles.Button_1}>
              <Text style={styles.ButtonText}>SIGN IN</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
        }
      </View>
    );
  }
}
