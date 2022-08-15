import React from 'react'
import { Text, View } from 'react-native'
 
export default function OrderItem({item}) {
const{name, price} = item;
    return (
        <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            padding:20,
            borderBottomWidth:1,
            borderBottomColor:"black",
        }}>
            <Text style={{fontWeight:"bold", fontSize:16}}>{name}</Text>
            <Text style={{opacity:0.7, fontSize:16}}>{price}</Text>
        </View>
    )
}