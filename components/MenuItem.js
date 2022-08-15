import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { useState, useEffect, useContext } from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';


export default function MenuItem({RestaurantName, foods, hideCheckbox, marginLeft}) {
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
  Boolean(cartItems.find((item) => item.name === food.name));

  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) => dispatch({
    type:'ADD_TO_CART', payload: {...item, RestaurantName:RestaurantName, checkboxValue: checkboxValue }
  }); 

 var selected = foods.filter((item) => item.restaurantName == RestaurantName)
 
    return (
 <ScrollView showsVerticalScrollIndicator={false} style={{width:"100%", marginBottom:10}}>
    {selected.map((food, index)=>(
      
        <View  key={index}>
        <View style={{flexDirection:'row', justifyContent:"space-between", backgroundColor:"white", marginHorizontal:15,margin:10, borderRadius:15}}>
         {hideCheckbox? (<></>):(
          <BouncyCheckbox 
          onPress={(checkboxValue)=>selectItem(food, checkboxValue)}
          style={{marginLeft:10}} 
          isChecked={isFoodInCart(food,cartItems)}
          />
          )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft:0}/>
        </View>
        <Divider width={1.5} orientation="vertical"/>
        </View> 
        ))}
 </ScrollView>
    )
}

const FoodInfo = (props) =>(

    <View style={{width:"50%", marginLeft:20, marginVertical:10, justifyContent:"center"}}>
        <Text style={{fontWeight:"bold", fontSize:20, textDecorationLine:"underline"}}>{props.food.name}</Text>
        <Text>{props.food.price}rsd</Text>
        <Text>{props.food.description}</Text>
    </View>
);

const FoodImage = ({marginLeft ,...props}) => (
 <View>
    <Image source={{uri: props.food.url}} style={{width:100,marginVertical:10, height:100, marginRight:20, borderRadius:45, marginLeft:marginLeft}}/>
 </View>
);

