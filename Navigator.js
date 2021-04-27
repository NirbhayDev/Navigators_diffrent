import React, { Component} from 'react';
import {Views, Text, Button} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Pressable from './Pressable'

const navigator = createStackNavigator({
    Home: Home,
    Login: Login,
    Home: Home
},
{
    initialRouteName: 'Home',
    defaultNavigationOptions:{
        title: 'App'
    }

}
);

export default createAppNavigator(navigator);