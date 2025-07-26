import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";

const Layout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          title: "New Chat",
          drawerIcon: () => (
            <View>
              <Image source={require('@/assets/images/react-logo.png')} style={Styles.container}></Image>
            </View>
          ),
          headerTitle: () => (
            <Text
              style={{
                fontFamily: "SpaceMono",
                fontSize: 20,
                fontWeight: "bold",
                justifyContent: "center",
              }}
            >
              Anuvada AI
            </Text>
          ),
        }}
      />
      <Drawer.Screen
        name="chat/index"
        options={{
          
        }}
      />
      <Drawer.Screen name="chat/history" options={{ title: "Chat History" }} />
      <Drawer.Screen name="voiceChat/index" options={{ title: "Voice Chat" }} />
      <Drawer.Screen
        name="voiceChat/history"
        options={{ title: "Voice Chat History" }}
      />
    </Drawer>
  );
};

const Styles = StyleSheet.create({

  container : {

  }
})

export default Layout;
