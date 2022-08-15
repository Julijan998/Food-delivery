import React from 'react'
import { Text, View, Image } from 'react-native'
import { useState, useEffect, useContext } from 'react'



export default function About(props) {
    
const {name, image, adress, categories, time,price, contact} = props.route.params;
const formattedCategories= categories.map((cat)=>cat.title).join(" 🎫 ");

const description = `${formattedCategories}`;
    
    return (
        <View style={{backgroundColor:"white"}}>
           <RestaurantImage image={image} />    
             <RestaurantAdress adress={adress}/> 
             <RestaurantContact contact={contact}/>
            <RestaurantDescription description={description}/> 
        </View>
    );
}

const RestaurantImage = (props)=>(
  <Image source = {{uri: props.image}} style={{width:"70%", height:150, borderRadius:30,alignSelf:"center", marginVertical:20}}/>
  );

  const RestaurantDescription=(props)=>(
    <View style={{flexDirection:"row", justifyContent:"center",marginBottom:10}}>
        <Text style={{fontWeight:"800", marginLeft:10, justifyContent:"space-around"}}>{props.description}</Text>
    </View>
  );
  const RestaurantAdress=(props)=>(
    <Text style={{fontSize:18,fontWeight:"900", justifyContent:"center",alignSelf:"center"}}>Adresa:  {props.adress}</Text>
  );

  const RestaurantContact=(props)=>(
    <Text style={{marginBottom:15,fontSize:18,fontWeight:"900", justifyContent:"center",alignSelf:"center"}}>Telefon:  {props.contact}</Text>
  );
