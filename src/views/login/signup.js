import React from 'react';
import firebase from '../../FB/firebase';
import {View, Button, TextInput, Alert, Text} from 'react-native';
import {addUser} from '../../FB/firebase-CRUD';
export default class SignUpView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordConfirm: '',
      email: '',
    };
  }
  onBackToLoginPress = () => {
    this.props.navigation.navigate('SignInView');
  };

  onSignUpPress = () => {
    if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert('These Passwords Do Not Match');
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {
          Alert.alert('Thanks for signing up, You can now log in!');
          this.props.navigation.navigate('SignInView');
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
    return (
      <View style={{paddingTop: 50, alignItems: 'center'}}>
        <Text>Email Address</Text>
        <TextInput
          placeholder="E-Mail"
          value={this.state.email}
          keyboardType="email-address"
          autoCapitalize="none" // will capitalize every first letter if not turned off
          autoCorrect={false}
          onChangeText={text => this.handleChange('email', text)}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          value={this.state.password}
          onChangeText={text => this.handleChange('password', text)}
        />
        <Text>Confirm Password</Text>
        <TextInput
          value={this.state.passwordConfirm}
          onChangeText={text => {
            this.setState({passwordConfirm: text});
          }}
          placeholder="Confirm Password"
          secureTextEntry // creates fuzz or stars to obscure pass entry
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Button title="Sign Up" onPress={this.onSignUpPress}>
        </Button>
        <Button title="Go Back to Log In" onPress={this.onBackToLoginPress} />
      </View>
    );
  }
}
