import React, { useLayoutEffect } from 'react'
import {  
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  SafeAreaView, } from 'react-native';
import Countdown from "react-native-countdown-component";
import { Divider } from 'react-native-elements';
import {} from "react-native-gesture-handler"; 
import BottomTabs from './BottomTabs';
import CategoryScreen from './Categories';
import RestaurantItem, { LocalRestaurants } from './RestaurantItem';


export default function IndexScreen({props,navigation}) {
const [restaurantData, setRestaurantData] = React.useState([LocalRestaurants]);
  
    return (
    
    <View>
       <Divider width={2}/>
            <BottomTabs navigation={navigation} style={{marginBottom:0}}/>
        <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:100, marginTop:0}}>
          
            <CategoryScreen/>
             <RestaurantItem restaurantData={restaurantData} navigation={navigation}/>

        </ScrollView>
       
        </View>
    )
}
const styles = StyleSheet.create({
  
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
