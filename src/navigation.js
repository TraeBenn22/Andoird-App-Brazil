import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SignInView from './views/login/Signin';
import SignUpView from './views/login/Signup';
import HomeView from './views/homePage/home';
import StartView from './views/login/start';
import SideBar from './views/sideBar/SideBar.component';
import ProfileView from './views/profile/profile';
const AppNavigator = createDrawerNavigator(
  {
    SignInView: {screen: SignInView},
    SignUpView: {screen: SignUpView},
    StartView: {screen: StartView},
    HomeView: {screen: HomeView},
    ProfileView: {screen: ProfileView},
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
