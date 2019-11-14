import React from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import firebase from '../../FB/firebase';
import {
  Header,
  Footer,
  Content,
  Container,
  Icon,
  Left,
  Right,
} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#D8D8D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    marginTop: 20,
  },
  button2: {
    marginTop: 0,
  },
    Header: {
      marginTop: 50,
    },
  TextStyle: {
    textAlign: 'center',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

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
      <Container style={styles.container}>
          <Header style={styles.Header}><Text>fdsafasd</Text></Header>
        <Text>Welcome to "App Name"</Text>
        <View style={{paddingTop: 50, alignItems: 'center'}}>
          <Text>Log In</Text>
          <TextInput
              style={styles.TextStyle}
            value={this.state.email}
            onChangeText={text => {
              this.setState({email: text});
            }}
            placeholder="Please input your Email"
              underlineColorAndroid="black"
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
            placeholder="Please input your Password"
            underlineColorAndroid="black"
            secureTextEntry // creates fuzz or stars to obscure pass entry
            autoCapitalize="none"
            autoCorrect={false}
          />
            <Button
                title="Log In"
                onPress={this.handleOnLoginPress}>
                <Text>Log In</Text>
            </Button>

          <Button
            title="Create An Account"
            onPress={this.handleOnCreateAccountPress}>
            <Text>Create An Account</Text>
          </Button>

          <Button
            title="Forgot Password?"
            onPress={this.handleOnForgotPasswordPress}>
            <Text>Forgot Password?</Text>
          </Button>
        </View>
        <Footer />
      </Container>
    );
  }
}
