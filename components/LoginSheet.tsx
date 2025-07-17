import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {Ionicons } from '@expo/vector-icons';
import { defaultStyles } from '@/constants/Styles';
import { useSharedValue } from 'react-native-reanimated';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';

const LoginSheet = () => {

  const {bottom} = useSafeAreaInsets();


  return (
    <View style = {[styles.container, {paddingBottom : bottom}]}>

      <TouchableOpacity style = {[defaultStyles.btn, styles.btnLight]} >
        <Ionicons name= 'logo-google' size={14}  style={styles.btnLight}/>
        <Text style = {[styles.btnLightText]} >Continue with Google </Text> 
     </TouchableOpacity>

     <TouchableOpacity style = {[defaultStyles.btn, styles.btnLight]} >
         <Ionicons name= 'logo-apple' size={14}  style={styles.btnLight}/>
        <Text style = {[styles.btnLightText]}>Continue with Apple </Text>
     </TouchableOpacity>
    

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
    borderTopLeftRadius:20 ,
    borderTopRightRadius: 20,
  },
  btnLight: {
    backgroundColor : "#fff",

  },
  btnIcon : {
    
  },

  btnLightText : {
    paddingRight: 7,
    
  },

  btnDark: {
    backgroundColor: Colors.grey,

  },

  btnDarkText : {
    color: '#fff',
    fontSize: 25,
  },

  btnOutline : {
    borderWidth: 3,
    borderColor: Colors.grey,
  },
});



export default LoginSheet;

 