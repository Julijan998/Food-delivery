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

 


import { useLayoutEffect } from "react";

import { firebase } from "../src/firebase/config";


const image = { uri: "https://phonewallpaperhd.com/wp-content/uploads/2020/09/Food-Wallpaper-for-Phones.jpg" };
import logoImage from "../assets/logo4.png";



export default function RegistrationScreen({ navigation }) {
  const image = { uri: "https://phonewallpaperhd.com/wp-content/uploads/2020/09/Food-Wallpaper-for-Phones.jpg" };

  const [inputFocus, setInputFocus] = useState(false);
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [adress, setAdress] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const onRegisterPress = () => {
    if (password !== confirmPassword) {
        alert("Passwords don't match.")
        return
    }
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
                fullName,
                adress,
                phone
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                    navigation.navigate('Index', {user: data})
                })
                .catch((error) => {
                    alert(error)
                });
        })
        .catch((error) => {
            alert(error)
    });
}
  return (
    <View style={styles.container}>
       <ImageBackground source={image} style={styles.image}>
       <Image style={styles.logoimg} source={logoImage} />
      
      <View style={styles.form}>
      
      <View style={{ marginTop:10, alignItems:"center" }}>
        <View >
        <TextInput
            style={styles.TextInput1}
            placeholder="Puno ime"
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.TextInput1}
            placeholder="E-mail"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
           <TextInput
            style={styles.TextInput1}
            placeholder="Kucna adresa"
            onChangeText={(text) => setAdress(text)}
            value={adress}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
           <TextInput
            style={styles.TextInput1}
            placeholder="Broj telefona"
            onChangeText={(text) => setPhone(text)}
            value={phone}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.TextInput2}>
         
          <TextInput
            style={{ width: "50%" }}
            secureTextEntry
            placeholder="Lozinka"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

            <TextInput
            style={{ width: "50%" }}
            secureTextEntry
            placeholder="Potvrda lozinke"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          
        </View>
      </View>

      <View style={{ justifyContent:"center",alignItems:"center", marginTop: 15 }}>
        <Button
          title="REGISTRUJ SE"
          
          onPress={() => onRegisterPress()}
        />
      </View>
       
      <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 20,color:"white", fontWeight: "bold" }}>Imate nalog?</Text><TouchableOpacity  onPress={() => {
            navigation.navigate("Login");
          }} ><Text style={{ fontSize: 15,color:"white", fontWeight: "bold",textDecorationLine: "underline",marginTop:5  }}>PRIJAVITE SE!</Text></TouchableOpacity>
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
      TextInput1: {
        borderWidth: 1,
        backgroundColor:"white",
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 15,
        padding: 19,
        width:300,
      },
      TextInput2: {
        borderWidth: 1,
        width:300,
        backgroundColor:"white",
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        padding: 15,
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
  image: {
    flex: 1,
    resizeMode: "stretch"
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
    backgroundColor: "firebrick",
    padding: 15,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  btnText: {
    color: "#F5FFFA",
    textAlign: "center",
  },
  btnContainer: {
    marginTop:40,
    width: "40%"
    
  },
});
