import { View, Text, KeyboardAvoidingView, Platform, StyleSheet, TextInput} from 'react-native'
import React, { useState } from 'react'
import DrawerUI from '@/components/DrawerUI';
import MainUI from '@/components/MainUI';



const Main = () => {


  const [emailAddress, setEmailAddress] = useState("");


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      keyboardVerticalOffset={0}
      style={styles.container}
    >
    <View>
      
    </View>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  inputfield: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
})

export default Main;