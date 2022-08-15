import React,{useState} from 'react';
import { Text, TouchableOpacity, View, Modal, StyleSheet } from 'react-native';
 import {useSelector} from "react-redux";
import OrderItem from './OrderItem';
import {firebase} from '../src/firebase/config';
import { TextInput } from 'react-native';

export default function ViewCart({navigation}) {


  const [adress, setAdress] = useState('')
  const [phone, setPhone] = useState('')

    const [modalVisible, setModalVisible] = useState(false);

    const {items, RestaurantName} = useSelector((state)=> state.cartReducer.selectedItems);
    
    const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
    
    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
      });
     
    //console.log(totalUSD);
  
    const styles=StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)",
          },
      
          modalCheckoutContainer: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            borderWidth: 1,
          },
      
          RestaurantName: {
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10,
          },
          subtotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          },
      
          subtotalText: {
            textAlign: "left",
            fontWeight: "600",
            fontSize: 15,
            marginBottom: 10,
          },

    });


    const addOrderToFireBase = () => {
    
      const db = firebase.firestore();
      db.collection("orders")
        .add({
          items: items,
         
          adress : adress,
          phone:phone,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setModalVisible(false);
        navigation.navigate("OrderCompleted")
        
    };

    const checkoutModalContent = () => {
    return(
       <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.RestaurantName}>{RestaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
                <Text style={styles.subtotalText}>Subtotal</Text>
                <Text>{totalUSD}rsd</Text>
            </View>
            <View style={{alignItems:'center'}}>
            <TextInput 
            placeholder="Adresa dostave"
            onChangeText={(text) => setAdress(text)}
            value={adress}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
           <TextInput
            placeholder="Kontakt telefon"
            onChangeText={(text) => setPhone(text)}
            value={phone}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => {
                  addOrderToFireBase();
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    top: 17,
                  }}
                >
                  {total ? totalUSD : ""}rsd
                </Text>
              </TouchableOpacity>
            </View>
      
       </View>
       
       </View>
       </>
    );


    };


    return (
        <>
          <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >{checkoutModalContent()}
       </Modal>
        {total ? (
        <View style={{
            zIndex:999,
            flex:1,
            position:"absolute",
            marginTop:0
        }}>
        <View style={{flexDirection:'row', justifyContent:"center", width:"100%"}}> 
            <TouchableOpacity 
            onPress={()=>setModalVisible(true)}
            activeOpacity={0.6} style={{  padding:15, width:400}} > 
            <Text style={{color: "white",backgroundColor:"black",textAlign:"center",borderRadius:30, marginHorizontal:100,padding:5,fontSize:20}}>Korpa<Text>={totalUSD}rsd</Text></Text>
            </TouchableOpacity>
        </View>
        </View>
        ):(
            <></>
        )}
  </>
      
    );
}