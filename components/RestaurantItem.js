import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useState, useEffect, useContext } from 'react'
import { NavigationAction } from '@react-navigation/native'
import Icon from 'react-native-ionicons'
export const LocalRestaurants = [
    {
      name: "Cudesa brza hrana",
      image: "https://cdn.metro-online.com/-/media/Project/MCW/RS_Metro/Delivery-horeca-covid/Cudesa.jpg?rev=dc8c205c2df84ab1b69eca6f784a09d2&w=296&hash=FDF5ACB86F72AA09E1134780E6D36598",
      categories:[{title:"Fast-food"},{title:"juice"}, {title:"restaurant"}],
      price:"$$",
      description:"Cudesno dobra hrana!",
      adress:"Save Kovacevica 10",
      time:"20-30min",
      contact:"0653010125"
    },
    {
        name: "Do Jaja",
        image: "https://static.skyfood.rs/uploads/place/logo/32/do_jaja.png",
        categories:[{title:"Fast-food"},{title:"juice"}, {title:"restaurant"}],
        price:"$$",
        description:"Vec 20 godina ne dopustamo da ostanete gladni!",
        adress:"Kneza Milosa bb",
        time:"25-35min",
      contact:"0641528228"
      },
      {
        name: "Don pizza",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnUYkxXQ3Ye1DyuwQ_J2Yiy_bR4GR3FBWG9vDDUmWK8hVPJcYzEhbnDT7KheSCd4MztQ&usqp=CAU",
        categories:[{title:"Fast-food"} ,{title:"juice"}, {title:"restaurant"}],
        price:"$$",
        description:"Delikates za sva cula!",
        adress:"Vojvode putnika 8",
        time: "30-45min",
        contact:"066034000"

      },
      {
        name: "Vukas",
        image: "data:image/png;base64,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",
        categories:[{title:"Fast-food"}],
        price:"$$",
        description:"Hrana sa tradicijom!",
        adress:"Trg Fontana",
        time:"35-50min",
      contact:"066339988"
      },
      {
        name: "Vega food store",
        image: "https://www.kudanaklopu.com//storage/temp/public/ae7/36f/418thumb__250_250_0_0_crop__250.png",
        categories:[{title:"Fast-food"} ,{title:"caffe"},{title:"juice"}, {title:"restaurant"}],
        price:"$$",
        description:"Hrana koja osvaja!",
        adress:"Trg Svetog Djordja 2",
        time:"60min",
      contact:"069710110"
      },
      {
        name: "Red Wings",
        image: "https://www.redwings.rs/assets/images/banner.webp",
        categories:[{title:"Fast-food"} ,{title:"caffe"},{title:"juice"}, {title:"restaurant"}],
        price:"$$",
        description:"Naruci svoju korpu punu krilaca i uzivaj!",
        adress:"Trzni centar Big Fashion",
        time:"50min",
      contact:"0611551166"
      },
      

]

export default function RestaurantItem({navigation, ...props}) {
     
    return (
      <>
        {LocalRestaurants.map((Restaurant, index)=>(
       
        <View key={index} style={{padding:10, borderRadius:0, backgroundColor:"white", padding:20}}>
             <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("Restaurant",{
              name: Restaurant.name,
              image:Restaurant.image,
              categories:Restaurant.categories,
              price: Restaurant.price,
              adress:Restaurant.adress,
              time: Restaurant.time,
              contact: Restaurant.contact
             })}>
             <RestaurantImage Image={Restaurant.image}/>
             <RestaurantInfo 
             name={Restaurant.name} 
             description={Restaurant.description} 
             /></TouchableOpacity>
        </View>
       ))}</>
    )
}

const RestaurantImage = ( props) =>(
 <Image source= {{
    uri: props.Image,
}}
style={{width:"80%", height:170,alignSelf:"center", borderRadius:20}}
/> 
);

const RestaurantInfo =(props) =>(
  
<View style={{alignItems:"center"}}>
      
    <Text style={{fontSize:24, fontWeight:"900",textDecorationLine:"underline"}}>{props.name}</Text>
    <Text>{props.description}</Text>
  
    </View> 
  
    );