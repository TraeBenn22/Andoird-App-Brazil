//This is an example code for Navigator//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Button, TextInput, Alert} from 'react-native';
//import all the components we are going to use.

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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

  handleChange = (inputField, text) => {
    this.setState(prevState => ({
      ...prevState,
      [inputField]: text,
    }));
  };

  handleSubmit = () => {
    if (this.state.username.length > 3 && this.state.password.length > 3) {
      this.props.submit(this.state);
      this.setState({username: '', password: ''});
    } else {
      Alert.alert(
        'Error',
        'Username and Password must be at least 3 characters',
      );
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="username"
          value={this.state.username}
          onChangeText={text => this.handleChange('username', text)}
          onSubmitEditing={this.handleSubmit}
        />
        <TextInput
          placeholder="password"
          value={this.state.password}
          onChangeText={text => this.handleChange('password', text)}
          onSubmitEditing={this.handleSubmit}
        />
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
