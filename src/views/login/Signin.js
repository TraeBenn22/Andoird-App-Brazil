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
      loading: null,
      authenticated: false,
    };
  }
  handleOnLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({loading: false, authenticated: true});
          } else {
            this.setState({loading: false, authenticated: false});
          }
          this.props.navigation.navigate('HomeView');
        });
      })
      .catch(function(error) {
        console.error(error);
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  handleOnCreateAccountPress = () => {
    this.props.navigation.navigate('SignUpView');
  };

  handleOnForgotPasswordPress = () => {
    let navActions = StackActions.reset({
      index: 0,
      action: [NavigationActions.navigate({routeName: 'ForgotPassword'})],
    });

    this.props.navigation.dispatch(navActions);
  };

  render() {
    if (this.state.loading) {
      return null;
    }
    if (this.state.authenticated) {
      this.props.navigation.navigate('HomeView');
    }
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
