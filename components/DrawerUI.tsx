import { View } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';



const DrawerUI = () => {
  return (
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="main"
          options={{
            title: "Main",
            headerShown: false,
          }}
        />
      </Drawer>
  )
}

export default DrawerUI