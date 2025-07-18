import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {Ionicons } from '@expo/vector-icons';
import { defaultStyles } from '@/constants/Styles';
import { useSharedValue } from 'react-native-reanimated';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Raleway_200ExtraLight } from "@expo-google-fonts/raleway";
import { Quicksand_300Light } from "@expo-google-fonts/quicksand";
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';




const LoginSheet = () => {

  const {bottom} = useSafeAreaInsets();


  return (
    <View style = {[styles.container, {paddingBottom : bottom}]}>

      <TouchableOpacity style = {[defaultStyles.btn, styles.btnLight]} >
        <Ionicons name= 'logo-google' size={20}  style={styles.btnIcon}/>
        <Text style = {[styles.btnLightText]} >Continue with Google </Text> 
     </TouchableOpacity>

     <TouchableOpacity style = {[defaultStyles.btn, styles.btnLight]} >
         <Ionicons name= 'logo-apple' size={24}  style={styles.btnIcon}/>
        <Text style = {[styles.btnLightText]}>Continue with Apple </Text>
     </TouchableOpacity>
    
    <TouchableOpacity style = {[defaultStyles.btn, styles.btnLight]} >
         <Ionicons name= 'logo-linkedin' size={20}  style={styles.btnIcon}/>
        <Text style = {[styles.btnLightText]}>Continue with LinkedIn </Text>
     </TouchableOpacity>

      <Link href={"/login"} asChild style={[defaultStyles.btn, styles.btnDarkText]}>
        
        <TouchableOpacity style={[defaultStyles.btn, styles.btnOutline]} >
         <Ionicons name= 'mail' size={20}  style={[styles.btnIcon]} color={'#fff'}/>
            <Text style = {styles.btnDarkText}>Sign up with email</Text>
        </TouchableOpacity>

      </Link>

    </View>
  )
}

const styles = StyleSheet.create({

  container : {
    position: 'absolute',
    bottom : 0,
    width: '100%',
    backgroundColor: '#000',
    padding: 50,
    gap: 14,
    borderTopLeftRadius: 16 ,
    borderTopRightRadius: 16,
  },

  btnLight: {
    backgroundColor : "#fff",
   

  },
  btnIcon : {
    padding: 5,
  },

  btnLightText : {
    paddingRight: 7,
    fontSize: 20,
    fontFamily: 'Quicksand_300Light',
   
    
  },

  btnDark: {
    backgroundColor: Colors.grey,

  },

  btnDarkText : {
    color: '#fff',
    paddingRight: 7,
    fontSize: 20,
    fontFamily: 'Quicksand_300Light',
  },

  btnOutline : {
    borderWidth: 1,
    borderColor: Colors.greyLight,
    width: '100%',
  },
});



export default LoginSheet;

 