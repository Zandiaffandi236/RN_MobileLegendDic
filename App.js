/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavgator} from 'react-navigation'
import Heroes from './Components/Heroes';
import Home from './Components/Home';
import Setting from './Components/Setting';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

export default class App extends Component {
  render() {
    return (
     <NavBar/>
    );
  }
}

const NavBar = createMaterialTopTabNavigator(
  {
    Home: {screen: Home,},
    Heroes: {screen: Heroes},
    Setting: {screen: Setting}
  },
  {
    tabBarPosisition: 'bottom',
    swipeEnabled: true,
    tabBarOption:
    {
      avtiveTintColor: '#f8f8f8f8',
      activeBackgroundColor: '#586598',
      inactiveTintColor: '#1234',
      style: {
        backgroundColor:'#000055',
      },

      labelStyle: {
        fontSize: 10,
        color: 'white',
        padding: 5,
      }
    }
  }
);