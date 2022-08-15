import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useState, useEffect, useContext } from 'react'
import { ScrollView } from 'react-native';


const items = [
{
    image: require("../assets/images/1.jpg"),
   },
{
    image: require("../assets/images/2.jpg"),
   },
{
    image: require("../assets/images/3.jpg"),
   
},
{
    image: require("../assets/images/4.jpg"),
   },
{
    image: require("../assets/images/5.jpg"),
},
{
    image: require("../assets/images/6.jpg"),
}


];


export default function CategoryScreen({props,navigation}) {
    
    return (
        <View style={{backgroundColor:"white"}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             
            {items.map((item, index)=>(
            <TouchableOpacity key={index} activeOpacity={0.9}>
                <View  style={{alignItems:"center"}}>
            <Image source={item.image} 
            style={{
                width:400,
                height:260,
                resizeMode: "stretch",
            }}/>
            <Text style={{fontSize: 13, fontWeight:"800"}}>{item.text}</Text>
            </View></TouchableOpacity>
 
 ))}
           
      </ScrollView>
      </View>
    )
}