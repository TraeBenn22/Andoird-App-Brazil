import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import firebase from '../../FB/firebase';
import {
  Button,
  Input,
  Container,
  Item,
  Text,
} from 'native-base';

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
      .catch(error => {
        Alert.alert(error.message);
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
          <Text style={styles.Header}>Member Sign in</Text>
        <View style={{paddingTop: 50, alignItems: 'center'}}>
          <Item fixedLabel>
            <Input
              placeholder="Email@example.com"
              placeholderTextColor= 'white'
              value={this.state.email}
              onChangeText={text => {
                this.setState({email: text});
              }}
              keyboardType="email-address" // recognizes if email is not properly formatted
              autoCapitalize="none" // will capitalize every first letter if not turned off
              autoCorrect={false}
            />
          </Item>

          <Item fixedLabel>
            <Input
              style={styles.loginStyles}
              placeholder="Password"
              placeholderTextColor= 'white'
              value={this.state.password}
              onChangeText={text => {
                this.setState({password: text});
              }}
              secureTextEntry // creates fuzz or stars to obscure pass entry
              autoCapitalize="none"
              autoCorrect={false}
            />
          </Item>
            <Text style={styles.ForgotPasswordStyle} onPress={this.handleOnForgotPasswordPress}> Forgot Password?</Text>
          <Button
              style={styles.button1}
              dark
            title="Login"
            onPress={this.handleOnLoginPress}>
            <Text style={styles.TextStyle}>                                 Signin                                     </Text>
          </Button>
            <Text style={styles.seperator}>-----------------------------------OR----------------------------------</Text>


            <Button style={styles.button2}
                    dark
              title="Create An Account"
              onPress={this.handleOnCreateAccountPress}>
              <Text style={styles.TextStyle}>                    Create An Account                       </Text>
            </Button>
        </View>
      </Container>
    );
  }
}
