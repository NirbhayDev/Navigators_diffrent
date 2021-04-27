import React, {Component} from 'react';
import {View, Text, StyleSheet, Linking,TextInput  ,SafeAreaView} from 'react-native';
import {Button} from 'react-native';

const Login = ()=>{
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return(
    <View style={styles.TopRightStyling}>
    <Text style={styles.LoginTextStyle} onPress={ ()=> Linking.openURL('https://google.com') }>Register</Text>
   
    <View>
    <Text style={styles.TestUnderLogoStyling}>Login Now !</Text>
    </View>
    <View style={styles.RegisterButtonStyle}>
    <Button 
    title = "Register Now"
    color = "#150e56"
 />
    </View>
    <SafeAreaView>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
    />
    <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="useless placeholder"
      keyboardType="numeric"
    />
   
  </SafeAreaView>
   
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
    top: 50,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#150e56',
    left: 130,
  },
  RegisterButtonStyle:{
    top: 300,
    backgroundColor:'#150e56',
    width: 150,
    alignItems: 'center',
    left: 120,
    height: 43,
   fontWeight: 'bold',
  },
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    top: 75,
  },
});

export default Login;