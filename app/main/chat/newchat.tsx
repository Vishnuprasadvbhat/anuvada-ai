import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import { Stack } from 'expo-router'
import DropDown from '@/components/DropDown'

const NewChat = () => {
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
            <Text>NewChat</Text>
            <Text>NewChat</Text>
            
    </View>
    
  )
}

export default NewChat