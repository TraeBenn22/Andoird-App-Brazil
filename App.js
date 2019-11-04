//This is an example code for Navigator//
import React, {Component} from 'react';
//import react in our code.

//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/views/login/Home';
import SignUp from './src/views/login/Signup';
import SignIn from './src/views/login/Signin';
//import all the screens we are going to switch
const App = createStackNavigator(
  {
    //Constant which holds all the screens like index of any book
    SignUp: {screen: SignUp},
    //First entry by default be our first screen if we do not define initialRouteName
    SignIn: {screen: SignIn},
    Home: {screen: Home},
  },
  {
    initialRouteName: 'Home',
  },
);
export default createAppContainer(App);
