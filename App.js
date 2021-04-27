import React from 'react';
import { View, Text, Button, StyleSheet, Linking,TextInput  ,SafeAreaView, Image} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import HomeScreen from './HomeScreen';
// import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AboutStack =createStackNavigator();
const HomeStack =createStackNavigator();
const SettingsStack = createStackNavigator();

function AboutStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="About!" component={RealAboutScreen} />
      <SettingsStack.Screen name="RegisterScreen" component={Register} />
    </SettingsStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="My Home" component={RealHomeScreen} />
     
    </SettingsStack.Navigator>
  );
}

function RegisterStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Register" component={Register} />
    </SettingsStack.Navigator>
  );
}

function LoginrStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Login" component={Login} />
    </SettingsStack.Navigator>
  );
}

const Drawer1 = createDrawerNavigator();

function MyDrawer1() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HOME" component={RealHomeScreen} />
      <Drawer.Screen name="RegisterScreen" component={Register} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    // <NavigationContainer>
    // <Stack.Screen name="TabNavigator" component={TabNavigator} />
    //   <Stack.Navigator>
    //     <Stack.Screen name="My Home" component={RealHomeScreen }
    //     options = {{
    //       title: 'My Home',
    //       headerStyle: {
    //         // backgroundColor: 'red',
    //       },
    //       headerTintColor: '#150e56',
    //       headerTitleStyle:{
    //         fontWeight: "bold",
    //         fontSize: 18,
    //       }
    //     }}
    //      />
        
    //     <Stack.Screen name="RegisterScreen" component={Register} />
    //     <Stack.Screen name="LoginScreen" component={Login} />
    //   </Stack.Navigator>
    // </NavigationContainer>


    <NavigationContainer>
  
      <Tab.Navigator
      tabBarOptions={{ 
       showLabel : true,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 15,
          height: 50,
          fontSize: 30,
        }
      }}
      >
      <Tab.Screen 
       name="Drawer"
       component={MyDrawer1} 
       />
        <Tab.Screen   style={
          {
            fontSize: 70,
          }
        }
         name="Home" 
         component={HomeStackScreen}
         option={{ 
           tabBarIcon: ({focused}) => {
             <View style={{alignItems: "center", justifyContent: "center", top: 10,}}>
              <Image 
              style={
                {
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1597bb' : '#fff',
                }
              }
              source={require('./img/home.png')}
              resizeMode='contain'
              
              />
             <Text
             style={
              {
                tintColor: focused ? '#1597bb' : '#fff',
                fontSize: 30,
              }
            }
             >HOME</Text>
             </View>
           }
         }}
          />
        <Tab.Screen 
        name="RegisterScreen"
         component={ RegisterStackScreen} 
         />
         <Tab.Screen 
          name="LoginScreen"
          component={LoginrStackScreen} 
          />
          <Tab.Screen 
          name="AboutStackScreen"
          component={AboutStackScreen} 
          />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// ------------------------------------------- Tab Navigator Starts from here --------------------------------------------------------------------//
const TabNavigator = ()=>{
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
         name="DetailScreen" 
         component={DetailScreen}
          />
      
      </Tab.Navigator>
    </NavigationContainer>
  )
}



// home scree components starts from here ...
const  HomeScreen=({navigation}) => {
  return (
    <View >
      <Text>Home Screen</Text>
      <Button 
      title='go to Detail'
      onPress= {()=>{navigation.navigate('RegisterScreen')}} 
       />
    </View>
  );
}

// Real home screen starts from here ... 
const RealHomeScreen = ({navigation})=>{
  return(
    <View style={styles.TopRightStyling}>
    <Text style={styles.LoginTextStyle}   onPress= {()=>{navigation.navigate('LoginScreen')}}>Login</Text>
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
    onPress= {()=>{navigation.navigate('RegisterScreen')}} 
    title = "Register Now"
    color = "#150e56"
   
 />
    </View>
   
    </View>
   
  )
}

const RealAboutScreen = ({navigation})=>{
  return(
    <View style={styles.TopRightStyling}>
    <Text style={styles.LoginTextStyle}   onPress= {()=>{navigation.navigate('LoginScreen')}}>Login</Text>
    <View>
    <Image
    style={styles.logo}
    source={{
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyoLkm-Jj3RhkL_G3wSal_zL--Da1nxrcqTg&usqp=CAU',
    }}
  />
    </View>
    <View>
    <Text style={styles.TestUnderLogoStyling}>About Screen!</Text>
    </View>
    <View style={styles.RegisterButtonStyle}>
    <Button 
    onPress= {()=>{navigation.navigate('RegisterScreen')}} 
    title = "Register Now"
    color = "#150e56"
   
 />
    </View>
   
    </View>
   
  )
}

// register screen components starts from here ... 
const Register = ({navigation})=>{
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return(
    <View style={styles.TopRightStyling}>
    <Text style={styles.LoginTextStyle}  onPress= {()=>{navigation.navigate('LoginScreen')}}>Login</Text>
   
    <View>
    <Text style={styles.TextUnderLogoStyling}>Create An Account</Text>
    </View>
    <View style={styles.RegisterButtonStyle1}>
    <Button 
    title = "Register Now"
    color = "#150e56"
 />
    </View>
    <SafeAreaView>
    <View style={styles.RegisterInputs}>
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
  <TextInput
  style={styles.input}
  onChangeText={onChangeNumber}
  value={number}
  placeholder="useless placeholder"
  keyboardType="numeric"
/>
    </View>
   
  </SafeAreaView>
   
    </View>
   
  )
}

// Register Screen ends here ...

const Login = ({navigation})=>{
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return(
    <View style={styles.TopRightStyling1}>
    <Text style={styles.LoginTextStyle} onPress= {()=>{navigation.navigate('RegisterScreen')}}>Register</Text>
   
    <View>
    <Text style={styles.TestUnderLogoStyling}>Login Now !</Text>
    </View>
    <View style={styles.RegisterButtonStyle1}>
    <Button 
    title = "Login Now"
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
    top: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#150e56',
    left: 110,
  },

  TextUnderLogoStyling:{
    top: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#150e56',
    left: 110,
  },
 
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    top: 75,
  },
  input1: {
    height: 30,
    margin: 12,
    borderWidth: 1,
    top: 75,
  },
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
  },
  RegisterButtonStyle1:{
    top: 330,
    backgroundColor:'#150e56',
    width: 150,
    alignItems: 'center',
    left: 120,
    height: 43,
   fontWeight: 'bold',
  },
  RegisterInputs:{
    top: -30,
  },

})

// ------------------------------------------------------------------------------ drawer starts from here ------------------------------------------------------------------

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Button
        title="Toggle drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}


// --------------------------------------------------------------------- drawer ends here -----------------------------------------------------------------------





// Detail screen component starts from here ...
const DetailScreen=({route}) =>{
  const data= route.params;
  // console.warn(data);
  return (
    <View >
      <Text>Detail Screen</Text>
      
    </View>
  );
}

export default App;