// IntroScreen.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../constants/Colors'; // Your palette file

// const { width, height } = Dimensions.get('window');

export default function IntroScreen() {
  return (
    <LinearGradient
      colors={[colors.dark, colors.grey, colors.brown]} // ChatGPT-like dark gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        {/* App Name */}
        <Text style={styles.title}>
          AI Translator<span style={{ color: colors.primary }}>+</span>
        </Text>

        {/* Subheading */}
        <Text style={styles.tagline}>
          Breaking Language Barriers with AI
        </Text>

        {/* Fancy Divider */}
        <View style={styles.divider} />

        {/* Description */}
        <Text style={styles.description}>
          Translate instantly in over <Text style={styles.highlight}>120+ languages</Text> with AI-powered accuracy. 
          Experience real-time streaming translations for both text and conversations — anywhere, anytime.  
          Designed for travelers, professionals, and global communicators.
        </Text>

        {/* Highlight Section */}
        <View style={styles.featureBox}>
          <Text style={styles.featureText}>✅ Real-time AI Streaming</Text>
          <Text style={styles.featureText}>✅ 120+ Language Support</Text>
          <Text style={styles.featureText}>✅ Conversation Mode</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: colors.light,
    textAlign: 'center',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 18,
    color: colors.greyLight,
    textAlign: 'center',
    marginBottom: 20,
  },
  divider: {
    width: 80,
    height: 3,
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: colors.light,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  highlight: {
    color: colors.yellow,
    fontWeight: 'bold',
  },
  featureBox: {
    backgroundColor: colors.teal,
    padding: 15,
    borderRadius: 12,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  featureText: {
    color: colors.light,
    fontSize: 15,
    marginBottom: 6,
  },
});
