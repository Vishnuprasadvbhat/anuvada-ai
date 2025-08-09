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
            source={require("@/assets/images/anu-logo.png")}
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
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: colors.grey,
    borderBottomWidth: 1,
    borderBottomColor: colors.dark,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.grey,
    borderRadius: 12,
    padding: 12,
  },
  langBox: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.dark,
    borderRadius: 8,
    alignItems: 'center',
  },
  langText: {
    color: colors.light,
    fontSize: 16,
    fontWeight: '600',
  },
  switchButton: {
    paddingHorizontal: 10,
  },
  switchIcon: {
    width: 24,
    height: 24,
    tintColor: colors.primary,
  },
});