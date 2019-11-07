import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

export default class StartPage extends React.Component {
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
        <Button title="Sign in" onPress={() => navigate('SignInView')} />
        <Button title="Sign up" onPress={() => navigate('SignUpView')} />
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
