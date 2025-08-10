import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "@/constants/Colors";

export default function Picker() {
  const onSwitch = (from: string, to: string) => {
    setSourceLang(to);
    setTargetLang(from);
  };

  const [sourceOpen, setSourceOpen] = useState(false);
  const [targetOpen, setTargetOpen] = useState(false);
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("ja");

  const [items, setItems] = useState([
    { label: "Japanese", value: "ja" },
    { label: "English", value: "en" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.dropdownWrapper}>
        <DropDownPicker
          open={sourceOpen}
          value={sourceLang}
          items={items}
          setOpen={setSourceOpen}
          setValue={setSourceLang}
          setItems={setItems}
          placeholder="From"
          listMode="SCROLLVIEW"
          style={styles.langBox}
          dropDownContainerStyle={styles.dropdown}
        />
      </View>

      <TouchableOpacity
        onPress={() => onSwitch(sourceLang, targetLang)}
        style={styles.switchButton}
      >
        <Image
          source={require("@/assets/images/chat.png")}
          style={styles.switchIcon}
        />
      </TouchableOpacity>

      <View style={styles.dropdownWrapper}>
        <DropDownPicker
          open={targetOpen}
          value={targetLang}
          items={items}
          setOpen={setTargetOpen}
          setValue={setTargetLang}
          setItems={setItems}
          placeholder="To"
          listMode="SCROLLVIEW"
          style={styles.langBox}
          dropDownContainerStyle={styles.dropdown}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8, // Optional: adds consistent spacing
  },
  dropdownWrapper: {
    flex: 1,
    zIndex: 1000, // Ensure dropdowns stack properly
  },
  langBox: {
    backgroundColor: colors.light,
    borderRadius: 12,
    borderColor: colors.dark,
    borderWidth: 1,
  },
  dropdown: {
    borderColor: colors.dark,
    borderWidth: 1,
    backgroundColor: colors.light,
    zIndex: 999,
  },
  switchButton: {
    padding: 8,
    borderColor: colors.dark,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "center",
    zIndex: 1,
  },
  switchIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
