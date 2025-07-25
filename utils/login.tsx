// import {
//   View,
//   Text,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   ActivityIndicator,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import Colors from "@/constants/Colors";
// import React, { useState } from "react";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import { defaultStyles } from "@/constants/Styles";


// const LoginPage = () => {
//   const { type } = useLocalSearchParams<{ type: string }>();
//   const [loading, setLoading] = useState(false);
//   const [emailAddress, setEmailAddress] = useState("");
//   const [password, setPassword] = useState("");

//   const router = useRouter();

//   async function signUpWithEmail() {
//     setLoading(true);
//     const { data, error } = await supabase.auth.signUp({
//       email: emailAddress,
//       password: password,
//     });

//     console.log("Signup:", data, error);
    
//     if (error) {
//       Alert.alert("Signup failed", error.message);
//       console.error(error);
//     } else {
//       console.log("Signup success:", data);
//       Alert.alert("Check your email for confirmation!");
//       router.replace("/");
//     }
//     setLoading(false);
//   }

//   async function signInWithEmail() {
//     setLoading(true);
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email: emailAddress,
//       password: password,
//     });

//     if (error) {
//       Alert.alert("Login failed", error.message);
//       console.error(error);
//     } else {
//       console.log("Login success:", data);
//       router.replace("/");
//     }
//     setLoading(false);
//   }

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "android" ? "padding" : "height"}
//       keyboardVerticalOffset={0}
//       style={styles.container}
//     >
//       {loading && (
//         <View style={[defaultStyles.loadingOverlay]}>
//           <ActivityIndicator size="large" color="#fff">
//             <Text style={{ color: Colors.primary }}></Text>
//           </ActivityIndicator>
//         </View>
//       )}
//       <Image
//         source={require("../assets/images/Screenshot 2025-07-20 160454.png")}
//         style={styles.logo}
//       ></Image>
//       <Text style={styles.title}>
//         {type === "login" ? "Welcome Back" : "Create your account"}
//       </Text>
//       <View style={{ marginBottom: 30 }}>
//         <TextInput
//           autoCapitalize="none"
//           placeholder="Email"
//           style={styles.inputfield}
//           value={emailAddress}
//           onChangeText={setEmailAddress}
//         ></TextInput>

//         <TextInput
//           autoCapitalize="none"
//           placeholder="Password"
//           style={styles.inputfield}
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         ></TextInput>
//       </View>

//       {type === "login" ? (
//         <TouchableOpacity
//           onPress={() => signInWithEmail()}
//           style={[defaultStyles.btn, styles.primaryBtn]}
//         >
//           <Text style={styles.primayBtnText}>Login</Text>
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity
//           onPress={() => signUpWithEmail()}
//           style={[defaultStyles.btn, styles.primaryBtn]}
//         >
//           <Text style={styles.primayBtnText}>Create account</Text>
//         </TouchableOpacity>
//       )}
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 28,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     alignSelf: "center",
//     marginVertical: 80,
//     marginBottom: 40,
//   },
//   title: {
//     fontSize: 30,
//     marginBottom: 20,
//     fontWeight: "bold",
//     alignSelf: "center",
//   },
//   inputfield: {
//     marginVertical: 4,
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#000",
//     borderRadius: 8,
//     padding: 10,
//     backgroundColor: "#fff",
//   },
//   primaryBtn: {
//     backgroundColor: "#000",
//     marginVertical: 4,
//   },
//   primayBtnText: {
//     color: "#fff",
//     fontSize: 16,
//   },
// });

// export default LoginPage;
