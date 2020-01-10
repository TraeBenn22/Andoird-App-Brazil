import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SignInView from './views/login/Signin';
import SignUpView from './views/login/Signup';
import HomeView from './views/homePage/home';
import SideBar from './views/sideBar/SideBar.component';
import ProfileView from './views/profile/profile';
import SearchView from './views/search/search';
import ResultsView from './views/search/search-results';
const AppNavigator = createDrawerNavigator(
  {
    SignInView: {screen: SignInView},
    SignUpView: {screen: SignUpView},
    HomeView: {screen: HomeView},
    ProfileView: {screen: ProfileView},
    SearchView: {screen: SearchView},
    ResultsView: {screen: ResultsView},
  },
  {
    initialRouteName: 'SignInView',
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
