import React from 'react'
import { Text, View } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from './About'
import MenuItem from './MenuItem'
import ViewCart from './ViewCart'
import { foods } from './Foods'


export default function Restaurant({route, navigation}) {
   
    return (
        <View style={{backgroundColor:"#DCDCDC"}}>
            <About route = {route}/>
            <Divider width={0.5} style={{marginBottom:5}}/>
            <ViewCart navigation={navigation}/>
            <MenuItem RestaurantName={route.params.name} foods={foods} />
           
        </View>
    )
}