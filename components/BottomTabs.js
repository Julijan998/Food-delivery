import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import logoImage from "../assets/logo4.png";
{/*import {Restart} from 'fiction-expo-restart';*/}

export default function BottomTabs({navigation}) {
   
     return (
        <View style={{flexDirection:"row", justifyContent:"space-around", backgroundColor:"white"}}>
            <TouchableOpacity   
         onPress={() => {
          navigation.navigate('Index')
        }}>
            <Icon icon="home" Text="Pocetna"/>
            </TouchableOpacity>
            <Image style={{resizeMode: "stretch",height: 50,width: 50, marginTop:20}} source={logoImage} />
            <TouchableOpacity  onPress={() => {
            navigation.navigate('Login')
          }}>
               <Icon icon="sign-out-alt" Text="Odjavi se"/>
            </TouchableOpacity>
            
        </View>
    )
}

const Icon = (props) => (
    
  <View style={{margin:10, marginTop:50}}>  
    <FontAwesome5 name={props.icon} size={25} style={{marginBottom:0, alignSelf:'center',}}/>
    <Text>{props.Text}</Text>
  </View>
 
);