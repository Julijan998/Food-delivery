import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Switch,
  ImageBackground,
} from "react-native";
import { firebase } from '../src/firebase/config'
import { useLayoutEffect } from "react";
import logoImage from "../assets/logo4.png";
import { withTheme } from "react-native-elements";
import { withDecay } from "react-native-reanimated";

const image = { uri: "https://phonewallpaperhd.com/wp-content/uploads/2020/09/Food-Wallpaper-for-Phones.jpg" };

export default function Login({ navigation, usersRef }) {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 

  const onLoginPress = () => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .get()
                .then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        alert("User does not exist anymore.")
                        return;
                    }
                    const user = firestoreDocument.data()
                    alert("Radujemo se sto vas ponovo vidimo!")
                    navigation.navigate('Index', {user})
                })
                .catch(error => {
                    alert(error)
                });
        })
        .catch(error => {
            alert(error)
        })
}
{/*
const AdminPress = () => {
  firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
          const uid = response.user.uid
          const usersRef = firebase.firestore().collection('users')
          usersRef
              .doc(uid)
              .get()
              .then(firestoreDocument => {
                  if (!firestoreDocument.exists) {
                      alert("User does not exist anymore.")
                      return;
                  } const user = firestoreDocument.data()
                  if( user.fullName === 'admin'){
                  alert("Dobrodosli gospodine")
                  navigation.navigate('Admin', {user}) } else{ alert("Da biste se ovde prijavili morate biti admin")
                  return;}
              })
              .catch(error => {
                  alert(error)
              });
      })
      .catch(error => {
          alert(error)
      })
}
*/}

  return (
     <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <Image style={styles.logoimg} source={logoImage} />
      <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="E-Mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Lozinka"
       value={password}
        secureTextEntry
      onChangeText={(password) => setPassword(password)}
      underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.logInBtn}
         onPress={() => onLoginPress()}>
          <Text style={styles.btnText}>PRIJAVI SE</Text>
        </TouchableOpacity> 
       {/* <TouchableOpacity
          style={styles.logInBtn}
         onPress={() =>AdminPress()}>
          <Text style={styles.btnText}>ADMIN</Text>
  </TouchableOpacity> */}

        </View>
        <View style={styles.btnContainer1}>
          <Text style={{ color: "white" }}>Nemate nalog?  </Text>
        <TouchableOpacity
          onPress={() => {
           
            navigation.navigate("Registration");
          }}>
          
          <Text  style={{ textDecorationLine: "underline", color:'white' }}>REGISTRUJTE SE!</Text>
        </TouchableOpacity>
        </View>
      </View>
           
           </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FFFA",
    //alignItems: "center",
    //justifyContent: "center",
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    marginTop:20,
    height: 50,
    width: 50,
    resizeMode: "stretch",
    backgroundColor: 'rgba(0,0,0, 0.6)',
    borderRadius:20

  },
  form:{
marginTop:30,
alignItems: "center",
backgroundColor: 'rgba(0,0,0, 0.5)',

  },
  logoimg:{
    resizeMode: "stretch",
height: 150,
width: 150,
backgroundColor: 'rgba(0,0,0, 0.5)',
marginTop:50,
marginLeft:130,
marginRight:120,
borderRadius:100


      },
  image: {
    flex: 1,
    resizeMode: "stretch"
  },
  btnContainer: {
    marginTop:40,
    width: "80%",
    //flex: 1,
    flexDirection: 'row',
    color:'white',
    alignItems:"center",
    justifyContent:"space-around"
    
     
    
  },
  btnContainer1: {
    marginTop:10,
    width: "70%",
    //flex: 1,
    flexDirection: 'row',
    color:'white',
    alignItems:"center",
    justifyContent:"center",
    marginBottom:15
    
     
    
  },
  input: {
    width: "60%",
    backgroundColor: "#F5FFFA",
    padding: 15,
    marginBottom: 0,
    marginTop: 20,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
  },

  logInBtn: {
    backgroundColor: "#24a0ed",
    padding: 7,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 2,
    width:120
   
  },
 
  btnText: {
    color: "white",
    textAlign: "center",
  },
  
});
