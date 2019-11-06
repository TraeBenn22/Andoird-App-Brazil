import React from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import firebase from '../../FB/firebase';

export default class SignInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleOnLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate('Home');
        });
      });
  };

  handleOnCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleOnForgotPasswordPress = () => {
    let navActions = StackActions.reset({
      index: 0,
      action: [NavigationActions.navigate({routeName: 'ForgotPassword'})],
    });

    this.props.navigation.dispatch(navActions);
  };

  render() {
    return (
      <View style={{paddingTop: 50, alignItems: 'center'}}>
        <Text>Log In</Text>
        <TextInput
          value={this.state.email}
          onChangeText={text => {
            this.setState({email: text});
          }}
          placeholder="E-Mail"
          keyboardType="email-address" // recognizes if email is not properly formatted
          autoCapitalize="none" // will capitalize every first letter if not turned off
          autoCorrect={false}
        />

        <Text>Password</Text>

        <TextInput
          value={this.state.password}
          onChangeText={text => {
            this.setState({password: text});
          }}
          placeholder="Enter Password"
          secureTextEntry // creates fuzz or stars to obscure pass entry
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button title="Log In" onPress={this.handleOnLoginPress} />

        <Button
          title="Create New Account"
          onPress={this.handleOnCreateAccountPress}
        />

        <Button
          title="Forgot Password?"
          onPress={this.handleOnForgotPasswordPress}
        />
      </View>
    );
  }
}
