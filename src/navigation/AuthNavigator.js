// In App.js in a new project

import * as React from 'react';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../../screens/Login'
import  HomeScreen from '../../screens/homescreen'
import Welcome from '../../screens/Welcome'
import Splash from '../../screens/splash'
import signIn from '../../screens/signIn'
import signUp from '../../screens/signUp'
import TabView from '../../screens/tabView'

import Dashboard from '../../screens/Dashboard'
import Drawernavigator from "../../screens/Drawernavigator"
import VideoScreen from '../../screens/VideoScreen'
import IncedentReport from "../../screens/IncedentReport"

// function HomeScreen() {
  
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

// function TabStack() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       tabBarOptions={{
//         activeTintColor: '#FFFFFF',
//         inactiveTintColor: '#F8F8F8',
//         style: {
//           backgroundColor: '#633689',
//         },
//         labelStyle: {
//           textAlign: 'center',
//         },
//         indicatorStyle: {
//           borderBottomColor: '#87B56A',
//           borderBottomWidth: 2,
//         },
//       }}>
//       <Tab.Screen
//         name="FirstPage"
//         component={SignIn}
//         options={{
//           tabBarLabel: 'SignIn',
//           // tabBarIcon: ({ color, size }) => (
//           //   <MaterialCommunityIcons name="home" color={color} size={size} />
//           // ),              
//         }}  />
//       <Tab.Screen
//         name="SecondPage"
//         component={SignUp}
//         options={{
//           tabBarLabel: 'Signup',
//           // tabBarIcon: ({ color, size }) => (
//           //   <MaterialCommunityIcons name="settings" color={color} size={size} />
//           // ),
//         }} />
//     </Tab.Navigator>






//   );
// }


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000080',
        },
        headerTintColor: '#ffff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf:'center',
          alignContent:'center'
        },}}>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
      <Stack.Screen name="WELCOME TO WORMORA" component={HomeScreen} 
      options={{ title:'Welcome To Womara'}}
      options={{headerLeft: () => null}}
      />
      <Stack.Screen name="Welcome" component={Welcome} options={{ title:'GET STARTED NOW'}} Header/>
        <Stack.Screen name="Login" component={Login} options={{ title: 'LOGIN' }}/>
        <Stack.Screen name="TabView" component={TabView} />
        <Stack.Screen name="signIn" component={signIn} />
        <Stack.Screen name="signUp" component={signUp} />
        <Stack.Screen name="Dashboard" component={Drawernavigator} options={{ headerShown:false }}/>
        <Stack.Screen name="VideoScreen" component={VideoScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="IncedentReport" component={IncedentReport} options={{ headerShown:false }}/>
        {/* <Stack.Screen name="Drawernavigator" component={Drawernavigator} options={{ headerShown:false }}/> */}
        {/* <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'Tab Stack' }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;