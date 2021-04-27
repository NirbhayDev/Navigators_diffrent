import React, {Component} from 'react';
import {View, Text, StyleSheet, Linking, Image, Loader, } from 'react-native';
import {Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register';
import Login from './Login';
import Pressable from './Pressable';
import { useNavigation } from '@react-navigation/native';
// import Navigator from './Navigator';

const Stack = createStackNavigator();

const  Home = (props) => {
  return(
    <View style={styles.TopRightStyling}>
    <Text style={styles.LoginTextStyle} onPress={ ()=> Linking.openURL('https://google.com') }>Login</Text>
    <View>
    <Image
    style={styles.logo}
    source={{
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyoLkm-Jj3RhkL_G3wSal_zL--Da1nxrcqTg&usqp=CAU',
    }}
  />
    </View>
    <View>
    <Text style={styles.TestUnderLogoStyling}>Happy To Help You</Text>
    </View>
    <View style={styles.RegisterButtonStyle}>
    <Button 
    onPress= {()=> console.log(props.navigation)}
    title = "Register Now"
    color = "#150e56"
   
 />
    </View>
   
    </View>
   
  )
}

const styles = StyleSheet.create({
  TopRightStyling:{ 
    flex: 1,
    backgroundColor: '#fff',
    // textAlign: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    color: 'green',
  },
  LoginTextStyle:{
    textAlign: 'right',
     fontWeight: 'bold',
     fontSize: 18,
     padding: 20,
     color: '#150e56'
  },
  logo: {
    width: 200,
    height: 100,
    left: 90,
    top: 100,
    justifyContent: 'center',
    
  },
  TestUnderLogoStyling:{
    top: 120,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#150e56',
    left: 110,
  },
  RegisterButtonStyle:{
    top: 200,
    backgroundColor:'#150e56',
    width: 150,
    alignItems: 'center',
    left: 120,
    height: 43,
   fontWeight: 'bold',
  }
})

export default Home;