import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
export const CustomDrawerContent = (props: any) => {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, marginTop: top }}>
      <View style={{ backgroundColor: "#fff", paddingBottom: 16 }}>
        <View style={Styles.searchSection}>
          <Ionicons
            style={Styles.searchIcon}
            name="search"
            size={20}
            color={Colors.greyLight}
          ></Ionicons>
          <TextInput
            style={Styles.input}
            placeholder="Search"
            underlineColorAndroid={"transparent"}
          />
        </View>
      </View>
      <DrawerContentScrollView
        contentContainerStyle={{ paddingTop: 2, paddingBottom: 2 }} {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ padding: 16, paddingBottom: bottom }}>
        <Link href ={{
          pathname: "/main/chat/newchat",          
        }}>
        <TouchableOpacity style = {Styles.footer}>
          <Image
                source={require("@/assets/images/anu-logo.png")}
                style={Styles.avatar}
              ></Image>
          <Text style= {Styles.userName}>Vishnuprasad V Bhat</Text>
          </TouchableOpacity></Link> 
      </View>
    </View>
  );
};

const Layout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light, // Header background color
        },
        headerShadowVisible: false, // Removes the shadow from the header
        drawerActiveBackgroundColor: Colors.selected, // Background color for active drawer item
        drawerActiveTintColor: "#000", // Color for active drawer item
        drawerInactiveTintColor: "#000", // Color for inactive drawer items
        drawerItemStyle: { borderRadius: 12 }, // Rounded corners for drawer items
        overlayColor: "rgba(0, 0, 0, 0.70)", // Overlay -> darken the background once drawer is open
        drawerStyle: { width: useWindowDimensions().width * 0.875 },
      }}
    >
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
                <Ionicons
                  name="create-outline"
                  size={24}
                  color={Colors.grey} // Icon for new chat
                  style={{ marginRight: 16 }}
                />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />

      <Drawer.Screen
        name="learn"
        options={{
          title: "Learn with Anuvada",
          headerTitleStyle: {
            fontFamily: "SpaceMono",
            fontSize: 20,
            fontWeight: "bold",
          },
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
                <Ionicons
                  name="create-outline"
                  size={24}
                  color={Colors.grey}
                  style={{ marginRight: 16 }}
                />
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
  searchSection: {
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.input,
    borderRadius: 10,
    marginBottom: 8,
    marginTop: 8,
    paddingHorizontal: 8,
    height: 40,
  },
  searchIcon: {
    padding: 6,
  },
  input: {
    paddingTop: 8,
    paddingRight: 10,
    paddingBottom: 8,
    paddingLeft: 0,
    alignItems: "center",
    color: "#424242",
  },
  footer : {
    flexDirection : 'row',
    alignItems: 'center',
    gap : 12,
  },
  avatar: {
    width : 50,
    borderRadius: 12,
    height : 50,
    backgroundColor: Colors.dark
    
  },
  userName : {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginTop: 5,
  }
});

export default Layout;
