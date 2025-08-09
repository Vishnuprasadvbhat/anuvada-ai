import { View , Text} from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import { SplashScreen, Stack } from 'expo-router'
// import DropDown from '@/components/DropDown'
import 'react-native-reanimated';
import ChatView from '../index'

const Layout = () => {

  SplashScreen.preventAutoHideAsync();
  
  return (
    
    <View style={defaultStyles.pageContainer}>      
      <Stack.Screen options={{
        statusBarStyle: 'dark',
        headerTitle: 'Text Translation ',
        headerStyle : {
         backgroundColor: '#e5e3e3ff'         
        },
        headerTitleStyle : {
          fontSize: 20,
          fontWeight: '800',
          color: '#000'          
        },
        // headerTitle: () => (
        //   <DropDown title='Test'
        //   items={[
        //     {key: '01', title:'Translate from: ',icon: 'new'},
        //     {key: '02', title:'Translate to: ',icon: 'open'}
        //   ]}/>
        // )
      }} />            
    </View>
    
   
  )
}

export default Layout