import React, { Component } from 'react';
import {
  View,
  Platform,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  AsyncStorage
 } from 'react-native';
 import styles from './style';
import { Actions } from 'react-native-router-flux';
 var Api = require('../../DataBase/Api');


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoading: true
    };
    this.editInfo = this.editInfo.bind(this);

  }
  componentWillMount() {
    
    let url = "profile";

    AsyncStorage.getItem('token')
    .then(res => {
      if(res) {
        return Api.httpPostToken(url, res);        
      } else {
        throw 'Something went wrong';
      }
    })
    .then(response => {
      if(response.data.meta.message === "Profile Fetched successfully.") {
        this.setState({user: response.data.data.user, isLoading: false});
      } else {
        throw 'Something went wrong';
      }
    })
    .catch(err => {
      ToastAndroid.show(err, ToastAndroid.SHORT);
    });
  }

  editInfo() {
    Actions.basicDetails();
  }

  logout() {
    AsyncStorage.removeItem('token');
    Actions.signIn();
  }
  
  render() {
    return (
      <View style={styles.container}>
        { this.state.isLoading &&
          <View style={styles.alignLoader}>
            <ActivityIndicator size="large" color="#453a5a" />
          </View>
        ||
          <ImageBackground style={styles.imagesize_logo}>
            <Text style={styles.LableText1}>Hello {this.state.user.name} </Text>
            
            <TouchableOpacity onPress={this.editInfo}>
              <View style={styles.Button_1}>
                <Text style={styles.ButtonText}>{'Edit Info'.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.logout}>
              <View style={styles.alignLogout}>
                <Text style={styles.styleLogout}>Logout</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        }
      </View>
    );
  }
}
