import React from 'react';
import firebase from '../../FB/firebase';
import {Button, Input, Container, Item, Text} from 'native-base';
import {View, Alert, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25383C',
  },
  seperator: {
    marginTop: 35,
    color: 'gray',
  },
  button1: {
    color: '#25383C',
    marginTop: 75,
  },
  button2: {
    color: '#25383C',
    marginTop: 50,
  },
  Header: {
    marginTop: 30,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  TextStyle: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
  },
  loginStyles: {
    color: 'white',
  },
  ForgotPasswordStyle: {
    marginRight: 300,
    fontSize: 12,
    color: 'orange',
  },
});
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
      <Container style={styles.container}>
        <Text style={styles.Header}>Sign up to become a member!</Text>
        <View style={{paddingTop: 50, alignItems: 'center'}}>
          <Item fixedLabel>
            <Input
              placeholder="Email@example.com"
              placeholderTextColor="white"
              keyboardType="email-address" // recognizes if email is not properly formatted
              autoCapitalize="none" // will capitalize every first letter if not turned off
              autoCorrect={false}
              value={this.state.email}
              onChangeText={text => this.handleChange('email', text)}
            />
          </Item>
          <Item fixedLabel>
            <Input
              placeholder="Password"
              placeholderTextColor="white"
              value={this.state.password}
              onChangeText={text => this.handleChange('password', text)}
            />
          </Item>
          <Item fixedLabel>
            <Input
              placeholder="Retype Password"
              placeholderTextColor="white"
              secureTextEntry // creates fuzz or stars to obscure pass entry
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.passwordConfirm}
              onChangeText={text => {
                this.setState({passwordConfirm: text});
              }}
            />
          </Item>
          <Button
            style={styles.button1}
            dark
            title="Sign Up"
            onPress={this.onSignUpPress}>
            <Text style={styles.TextStyle}>                                 Sign Up                                     </Text>
          </Button>
          <Text style={styles.seperator}>
            ------------------------------------OR-----------------------------------
          </Text>

          <Button
            style={styles.button2}
            dark
            title="Go Back to Log In"
            onPress={this.onBackToLoginPress}>
            <Text style={styles.TextStyle}>                           Back to Login                              </Text>
          </Button>
        </View>
      </Container>
    );
  }
}
