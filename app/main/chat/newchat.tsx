import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import { Stack } from 'expo-router'
import DropDown from '@/components/DropDown'

const NewChat = () => {
  return (
    <View style={defaultStyles.pageContainer}>
      <Stack.Screen options={{
        headerTitle: () => (
          <DropDown/>
        )
      }} />
            <Text>NewChat</Text>
            <Text>NewChat</Text>
    </View>
  )
}

export default NewChat