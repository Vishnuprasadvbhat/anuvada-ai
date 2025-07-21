import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import Colors from "@/constants/Colors";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import { useSignIn, useSignUp } from "@clerk/clerk-expo";


const LoginPage = () => {

  const { type } = useLocalSearchParams<{ type: string }>();
  const [loading, setLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, isLoaded, setActive } = useSignIn();
  const {signUp, isLoaded: signUpLoaded, setActive : signUpSetActive} = useSignUp();
   
  const onSignUp = async () => {
    if (!signUpLoaded) return;
    setLoading(true);
    try {
      const result = await signUp.create({emailAddress, password});
      signUpSetActive({ session: result.createdSessionId });
    } 
    catch (error :  any){
      alert(error.errors[0].message);
    }
    finally {
      setLoading(false);
    }
  };


  const onLogin = async () => {

    console.log("Page-Type", type);

    if (!isLoaded) return;
    setLoading(true);

    try {
      const result = await signIn.create({ identifier: emailAddress, password});
      setActive({ session: result.createdSessionId });
    } 
    catch (error : any){
      Alert.alert(error.errors[0].message);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      keyboardVerticalOffset={0}
      style={styles.container}
    >
      {loading && (
        <View style={[defaultStyles.loadingOverlay]}>
          <ActivityIndicator size="large" color="#fff">
            {" "}
          </ActivityIndicator>
        </View>
      )}
      <Image
        source={require("../assets/images/Screenshot 2025-07-20 160454.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.title}>
        {type === "login" ? "Welcome Back" : "Create your account"}
      </Text>
      <View style={{ marginBottom: 30 }}>
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          style={styles.inputfield}
          value={emailAddress}
          onChangeText={setEmailAddress}
          
        ></TextInput>

        <TextInput
          autoCapitalize="none"
          placeholder="Password"
          style={styles.inputfield}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
    
        ></TextInput>
      </View>

      {type === 'login' ? (
        <TouchableOpacity onPress={onLogin} style={[defaultStyles.btn, styles.primaryBtn]}>
        <Text style={styles.primayBtnText}> Login</Text>
        </TouchableOpacity>
      ): (
        <TouchableOpacity onPress={onSignUp} style={[defaultStyles.btn, styles.primaryBtn]}>
        <Text style={styles.primayBtnText}> Create account</Text>
        </TouchableOpacity>
      )}

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28
   
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginVertical: 80,
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
    alignSelf: "center",
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
  primaryBtn : {
    backgroundColor: '#000',
    marginVertical: 4,
  },
  primayBtnText : {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginPage;
