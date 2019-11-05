//This is an example code for Navigator//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Button, Text} from 'react-native';
//import all the components we are going to use.


export default class HomePage extends Component {
  static navigationOptions = {
    title: 'Welcome to Home Repair!',
    //Sets Header text of Status Bar
    headerStyle: {
      fontFamily: 'McLaren, cursive',
      backgroundColor: 'blue',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container} fontFamily="McLaren, cursive">
        <Button title="Sign in" onPress={() => navigate('SignIn')} />
        <Text>Need to create an account?</Text>
        <Button title="Sign up" onPress={() => navigate('SignUp')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
