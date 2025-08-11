import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
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
    { label: "Hindi", value: "hi" },
  ]);

  const [targetItems, setTargetItems] = useState(items);

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
          onChangeValue={(value) => {
            setSourceLang(sourceLang);
            // Filter out selected sourceLang from targetItems
            const filtered = items.filter((item) => item.value !== sourceLang);
            setTargetItems(filtered);

            // Optional: auto-switch targetLang if it's now invalid
            if (sourceLang === targetLang) {
              setTargetLang(filtered[0]?.value || "");
            }
          }}
          placeholder="From"
          listMode="SCROLLVIEW"
          style={styles.langBox}
          dropDownContainerStyle={styles.dropdown}
          textStyle = {styles.langText}

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

          onChangeValue={(value) => {
            setTargetLang(targetLang);
            // Filter out selected sourceLang from targetItems
            const filtered = items.filter((item) => item.value !== targetLang);
            
            setTargetItems(filtered);
            // auto switching
            if (sourceLang === targetLang) {
              setTargetLang(filtered[0]?.value || "");
            }
          }}

          placeholder="To"
          listMode="SCROLLVIEW"
          style={styles.langBox}
          dropDownContainerStyle={styles.dropdown}
          textStyle = {styles.langText}
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
    gap: 6, // Optional: adds consistent spacing
    padding: 12,
    backgroundColor : "#e1e1d7ff"
   
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
  
  langText : {
    fontWeight: '600',
    fontSize: 16,
    
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
