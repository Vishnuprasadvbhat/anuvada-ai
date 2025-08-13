import { View } from 'react-native'
import React from 'react'
import Intro from '@/components/AboutApp'
import 'react-native-reanimated';

const index = () => {
  return (

    <View style={{
        flex: 1,
        justifyContent: "center",
        }} >
      
      <Intro />
    </View>

  )
}

export default index