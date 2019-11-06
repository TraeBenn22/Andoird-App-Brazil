import React from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import LoginView from '../login/Signin';
import SignUpView from '../login/Signup';
import HomeView from '../homePage/home';
import StartView from '../login/start';
import SideBar from '../SideBar/SideBar.component';

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



const AppNavigator = createDrawerNavigator(
    {
      LoginView: {screen: LoginView},
      SignUpView: {screen: SignUpView},
      StartView: {screen: StartView},
      HomeView: {screen: HomeView},
    },
    {
      initialRouteName: 'StartView',
      drawerWidth: 300,
      contentOptions: {},
      contentComponent: props => <SideBar {...props} />,
    },
);

const defaultStateForAppNav = AppNavigator.router.getStateForAction;

AppNavigator.router.getStateForAction = (action, state) => {
  if (state && action.type === 'Navigation/BACK') {
    console.log('SWIPE!');
  }
  return defaultStateForAppNav(action, state);
};

export const AppContainer = createAppContainer(AppNavigator);
