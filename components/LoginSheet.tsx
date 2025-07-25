// import { Text, StyleSheet, TouchableOpacity} from 'react-native'
// import React from 'react'
// import {Ionicons } from '@expo/vector-icons';
// import { defaultStyles } from '@/constants/Styles';
// import Colors from '@/constants/Colors';
// import { Link } from 'expo-router';
// import { SafeView } from '@/utils/SafeView';



// const LoginSheet = () => {

//   // const {bottom} = useSafeAreaInsets();


//   return (
//     <SafeView style = {[styles.container]}>

//       <TouchableOpacity style = {[defaultStyles.btn, styles.btnLight]} >
//         <Ionicons name= 'logo-google' size={20}  style={styles.btnIcon}/>
//         <Text style = {[styles.btnLightText]} >Continue with Google </Text> 
//      </TouchableOpacity>

//      <TouchableOpacity style = {[defaultStyles.btn, styles.btnLight]} >
//          <Ionicons name= 'logo-apple' size={24}  style={styles.btnIcon}/>
//         <Text style = {[styles.btnLightText]}>Continue with Apple </Text>
//      </TouchableOpacity>

//       <Link href={{
//         pathname: '/login',
//         params : {type: 'register'}
//       }} asChild style={[defaultStyles.btn, styles.btnDarkText]}>
//         <TouchableOpacity style={[defaultStyles.btn, styles.btnOutline]} >
//          <Ionicons name= 'mail' size={20}  style={[styles.btnIcon]} color={'#fff'}/>
//             <Text style = {styles.btnDarkText}>Sign up with email</Text>
//         </TouchableOpacity>
//       </Link>

//       <Link href={{
//         pathname: '/login',
//         params : {type: 'login'}
//       }}  asChild style={[defaultStyles.btn, styles.btnDarkText]}>
//         <TouchableOpacity  >
//          <Ionicons name= 'person' size={20}  style={[styles.btnIcon]} color={'#fff'}/>
//             <Text style = {styles.btnDarkText}>Login</Text>
//         </TouchableOpacity>
//       </Link>

//     </SafeView>
//   )
// }

// const styles = StyleSheet.create({

//   container : {
//     position: 'absolute',
//     bottom : 0,
//     width: '100%',
//     backgroundColor: '#000',
//     padding: 50,
//     gap: 14,
//     borderTopLeftRadius: 16 ,
//     borderTopRightRadius: 16,
//   },

//   btnLight: {
//     backgroundColor : "#fff",
   

//   },
//   btnIcon : {
//     padding: 5,
//   },

//   btnLightText : {
//     paddingRight: 7,
//     fontSize: 20,
//     fontFamily: 'Quicksand_300Light',
//     fontWeight : 'semibold'
    
//   },

//   btnDark: {
//     backgroundColor: Colors.grey,

//   },

//   btnDarkText : {
//     color: '#fff',
//     paddingRight: 7,
//     fontSize: 20,
//     fontFamily: 'Quicksand_300Light',
//   },

//   btnOutline : {
//     borderWidth: 1,
//     borderColor: Colors.greyLight,
//     width: '100%',
//   },
// });



// export default LoginSheet;

 