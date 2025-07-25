import { View, Text , TextInput} from 'react-native'
import React from 'react'

const DrawerUI = () => {
  return (
    <View>
      <Text>DrawerUI</Text>
      <TextInput
                autoCapitalize="none"
                placeholder="Email" 
                style={{ marginVertical: 4, height: 50, borderWidth: 1, borderColor: "#000", borderRadius: 8, padding: 10, backgroundColor: "#fff" }}
                
              ></TextInput>
    </View>
  )
}

export default DrawerUI