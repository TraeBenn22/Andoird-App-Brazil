import React from 'react';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import LoginView from './views/login/Signin';
import SignUpView from './views/login/Signup';
import HomeView from './views/homePage/home';
import StartView from './views/login/start';
import SideBar from './views/SideBar/SideBar.component';
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

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
