import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import colors from '../constants/Colors';

type LanguageSwitcherProps = {
  sourceLang: string;
  targetLang: string;
  onSwitch: (src: string, tgt: string) => void;
};


export default function LanguageSwitcher({ sourceLang, targetLang, onSwitch }: LanguageSwitcherProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* Source Language */}
        <TouchableOpacity style={styles.langBox}>
          <Text style={styles.langText}>{sourceLang}</Text>
        </TouchableOpacity>

        {/* Switch Icon */}
        <TouchableOpacity onPress={() => onSwitch(sourceLang, targetLang)} style={styles.switchButton}>
          <Image
            source={require("@/assets/images/chat.png")}
            style={styles.switchIcon}
          />
        </TouchableOpacity>

        {/* Target Language */}
        <TouchableOpacity style={styles.langBox}>
          <Text style={styles.langText}>{targetLang}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: colors.light,
    
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000000ff',
    borderRadius: 0,
    padding: 8,

  },
  langBox: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.light,
    borderRadius: 12,
    alignItems: 'center',
    borderColor: colors.dark,
    borderWidth : 1,
    
  },
  langText: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: '800',
  },
  switchButton: {
    paddingHorizontal: 12,
    borderColor: colors.dark,
    borderWidth: 1,
    backgroundColor: '#fff',
    margin: 8,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 10
  },

  switchIcon: {
    width: 24,
    height: 24,
  },
});