import { View } from 'react-native'
import React from 'react'
import IntroScreen from '@/components/AboutApp'
import 'react-native-reanimated';

const index = () => {
  return (

    <View style={{
        flex: 1,
        justifyContent: "center",
        }} >
      
      <IntroScreen />
    </View>

  )
}

export default index