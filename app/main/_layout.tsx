import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { Link, useNavigation } from "expo-router";
import {FontAwesome6, Ionicons} from '@expo/vector-icons';
import Colors from "@/constants/Colors";
import { DrawerActions } from "@react-navigation/native";
import { navigate } from "expo-router/build/global-state/routing";


const Layout = () => {
  const navigation = useNavigation();
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        getId={() => Math.random().toString()}
        options={{
          title: "New Chat",
          drawerIcon: () => (
            <View style={[Styles.item, { backgroundColor: "#000" }]}>
              <Image
                source={require("@/assets/images/react-logo.png")}
                style={Styles.btnImage}
              ></Image>
            </View>
          ),
          headerStyle : {
            backgroundColor: Colors.light
          },
          headerTitle: () => (
            <Text
              style={{
                fontFamily: "SpaceMono",
                fontSize: 20,
                fontWeight: "bold",
                justifyContent: "center",
                marginLeft: 0,
              }}
            >
              Anuvada AI
            </Text>
          ),
          headerRight: () => (
            <Link
              href={{
                pathname: "/main/chat/newchat",
              }}
              push
              asChild
            >
              <TouchableOpacity>
                <Ionicons name= 'create-outline' size={24} color= {Colors.grey} 
                style={{marginRight : 16}}  />
              </TouchableOpacity>
            </Link>
          ),
        }}
       />

      <Drawer.Screen
        name="learn"
        options={{
          title: "Learn with Anuvada",
          headerTitleStyle : {
            fontFamily: "SpaceMono",
            fontSize: 20,
            fontWeight: "bold",
          } ,
          drawerIcon: () => (
            <View style={[Styles.item, { backgroundColor: "#fff" }]}>
              <Image
                source={require("@/assets/images/anu-logo.png")}
                style={Styles.btnImage}
              ></Image>
            </View>
          ),    
          headerRight: () => (
            <Link
              href={{
                pathname: "/main/learn/new",
              }}
              push
              asChild
            >
              <TouchableOpacity>
                <Ionicons name= 'create-outline' size={24} color= {Colors.grey} 
                style={{marginRight : 16}}  />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      
      
    </Drawer>
  );
};

const Styles = StyleSheet.create({
  container: {},

  item: {
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
  },
  btnImage: {
    width: 16,
    height: 16,
    margin: 6,
  },
});

export default Layout;
