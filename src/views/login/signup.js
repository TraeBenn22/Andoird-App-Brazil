import React, {Component} from 'react';
import firebase from '../../FB/firebase';
import {View, Button, TextInput, Alert, Text} from 'react-native';

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      username: '',
      password: '',
      passwordConfirm: '',
      name: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zip: '',
    };
  }
  static navigationOptions = {
    title: 'Sign Up',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };

  onSignUpPress = () => {
    if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert('These Passwords Do Not Match');
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.email,
        this.state.password,
        this.state.name,
        this.state.street,
        this.state.city,
        this.state.state,
        this.state.zip,
      )
      .then(
        () => {
          this.props.navigation.navigate('home');
        },
        error => {
          Alert.alert(error.message);
        },
      );
  };

  handleChange = (inputField, text) => {
    this.setState(prevState => ({
      ...prevState,
      [inputField]: text,
    }));
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{paddingTop: 50, alignItems: 'center'}}>
        <Text>Sign Up Here!</Text>
        <Text>Username</Text>
        <TextInput
          placeholder="Username"
          value={this.state.username}
          onChangeText={text => this.handleChange('username', text)}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          value={this.state.password}
          onChangeText={text => this.handleChange('password', text)}
        />
        <Text>First and Last Name</Text>
        <TextInput
          placeholder="Full Name"
          value={this.state.name}
          onChangeText={text => this.handleChange('name', text)}
        />
        <Text>Email Address</Text>
        <TextInput
          placeholder="Email"
          value={this.state.email}
          keyboardType="email-address"
          autoCapitalize="none" // will capitalize every first letter if not turned off
          autoCorrect={false}
          onChangeText={text => this.handleChange('email', text)}
        />
        <Text>Your Address information</Text>
        <TextInput
          placeholder="Street Address"
          value={this.state.street}
          onChangeText={text => this.handleChange('street', text)}
        />
        <TextInput
          placeholder="City"
          value={this.state.city}
          onChangeText={text => this.handleChange('city', text)}
        />
        <TextInput
          placeholder="State"
          value={this.state.state}
          onChangeText={text => this.handleChange('state', text)}
        />
        <TextInput
          placeholder="Zip Code"
          value={this.state.zipCode}
          onChangeText={text => this.handleChange('zipCode', text)}
        />
        <Button title="Sign Up" onPress={this.onSignUpPress}>
          Everything looks good!
        </Button>
      </View>
    );
  }
}
