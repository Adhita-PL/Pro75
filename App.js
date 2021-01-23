import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Insta from './Screens/in';
import Facebook from './Screens/fb';

export default class App extends React.Component{
  render() {
    return(
      <AppContainer/>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  Insta: {screen:Insta},
  Facebook: {screen: Facebook}
})

const AppContainer  = createAppContainer(TabNavigator);