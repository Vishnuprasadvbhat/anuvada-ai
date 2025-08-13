import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const EnterButton = () => {

  const bottom = useSafeAreaInsets().bottom;

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
            
    <Link href={{
      pathname : '/main/drawer'
    }} asChild style={[defaultStyles.btn, styles.btnLight]}>
      <TouchableOpacity style={[defaultStyles.btn, styles.btnLight]}>
        <Text style={[styles.btnLightText]}>Start Translating</Text>
      </TouchableOpacity>
    </Link>
      <Text style={[ {marginTop:10, color: "#fff", textAlign: "center" }]}>
        Anuvada is an AI-powered translation tool that helps you translate text
        quickly and accurately.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 200,
    backgroundColor: "#000",
    padding: 50,
    gap: 14,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  logo: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginRight : 50,
    marginBottom: 10,
  },

  btnLight: {
    backgroundColor: "#fff"
  },
  btnLightText: {
    paddingRight: 7,
    fontSize: 20,
    fontFamily: "Quicksand_300Light",
    fontWeight: "semibold",
  },
});

export default EnterButton;
