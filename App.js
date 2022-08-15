import { StatusBar } from 'expo-status-bar';
import {useSyncExternalStore} from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './components/Login';
 
import IndexScreen from './components/Index';
import Restaurant from './components/Restaurant';
import { useState, useEffect } from 'react';
import { firebase } from './src/firebase/config'

import { TouchableOpacity, Image } from 'react-native';
 
 
import Registration from './components/Registration'; 

import {Provider as ReduxProvider} from "react-redux";
import Store from './redux/Store';


import {decode, encode} from 'base-64'
import OrderCompleted from './components/OrderCompleted';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const store = Store();

const Stack = createNativeStackNavigator();
export default function App(...props) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  


  return (
    <ReduxProvider store={store}>
    <NavigationContainer >
    <Stack.Navigator initialRouteName={user ? 'IndexScreen' : 'Login'}>

   
          <Stack.Screen name="Index" options={{headerShown:false,title:"Početna", headerTitleAlign: "center",
          }}>
            {props => <IndexScreen {...props} />}
          </Stack.Screen>
      
          <Stack.Screen name="Restaurant" options={{title:"Restaurant", headerTitleAlign: "center",
          }}>
            {props => <Restaurant {...props} extraData={user}/>}
          </Stack.Screen>

          <Stack.Screen name="OrderCompleted" options={{headerShown:false,title:"Order Completed", headerTitleAlign: "center",
          }}>
            {props => <OrderCompleted {...props} extraData={user}/>}
          </Stack.Screen>
         
      <Stack.Screen name="Login"
        options={{title: "", headerTitleAlign: "center", headerTitleStyle: { color: "black"},headerTransparent: true,
          headerStyle: { backgroundColor: 'transparent'},
        }}
        component={Login}
      />
      
      <Stack.Screen name= "Registration"
      options={{title: "", headerTitleAlign: "center", headerTitleStyle:{color: "black"}, headerBackImageSource:null,headerTransparent: true,
        headerStyle:{  backgroundColor:"transparent"}
        }}
      component={Registration}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
  </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 35,
    width: 35,
    resizeMode: "stretch",
  },
  buttonImageIconStyle1: {
    padding: 10,
    margin: 5,
    height: 35,
    width: 35,
    resizeMode: "stretch",
  }
});
