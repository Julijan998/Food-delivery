import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import {firebase} from '../src/firebase/config'
import MenuItem from './MenuItem';
export default function OrderCompleted({navigation}) {
    const [lastOrder, setLastOrder] = useState({

        items:[
            {
              restaurantName:'Cudesa brza hrana',
        name: "Burger",
        url: "https://static.skyfood.rs/uploads/photo/photo/729/web_mashroom_burger-res.png",
        price:"450",
        description:"Idealan sklop mesa i preliva",
            },
        ]
    })
    const {items, RestaurantName} = useSelector((state)=> state.cartReducer.selectedItems);
    
    const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
    
    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
      });

      useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db
          .collection("orders")
          .orderBy("createdAt", "desc")
          .limit(1)
          .onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
              setLastOrder(doc.data());
            });
          });
    
        return () => unsubscribe();
      }, []);


    return (
        <SafeAreaView style={{backgroundColor:"white"}}>
           <LottieView
          style={{ height: 150,marginTop:50, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/black-check.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <View style={{margin:50, alignItems: "center"}}>
            <Text style={{fontWeight:"900", fontSize:18 }}>Tvoja kupovina je zabelezena! </Text>
            <Text style={{fontWeight:"bold", textDecorationLine:"underline", fontSize:20}}>Cena: {totalUSD}rsd</Text>
        </View>
        {/*
         <MenuItem foods ={lastOrder.items} hideCheckbox={true} /> */ }
         <TouchableOpacity style={{marginBottom:500,alignSelf:"center", marginTop:100, backgroundColor:"black", color:"white", padding:10, borderRadius:20, width:"40%"}} onPress={() => {
            navigation.navigate("Index");
          }}>
          <Text style={{alignSelf:"center", color:"white" }}>Vrati se na pocetak</Text>
          
          </TouchableOpacity>
        </SafeAreaView>
    )
}