import React from 'react';
import { View, Text, StyleSheet,  ImageBackground} from 'react-native';

import colors from '../constants/Colors';

export default function IntroScreen() {

  const image = require('@/assets/images/gradientbg.jpg')

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover">
      <View style={styles.innerContainer}>
        <Text style={styles.title}>
          Anuvada AI <Text style={{ color: colors.primary }}></Text>
        </Text>
        <Text style={styles.tagline}>Breaking Language Barriers with AI</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          Translate instantly in over{' '}
          <Text style={styles.highlight}>120+ languages</Text> with AI-powered accuracy.  
        </Text>
        <Text style={styles.featureText}  >
             Experience real-time streaming translations for both text and conversations — anywhere, anytime.
          </Text>
      </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "anuvada.ai\\anuvada\\assets\\images\\gradientbg.jpg",
    alignItems: "center",
  },

  innerContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: colors.dark,
    textAlign: "left",
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: "#000",
    textAlign: "left",
    marginBottom: 18,
    letterSpacing: 1,
  },
  divider: {
    width: 318,
    height: 3,
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: colors.dark,
    textAlign: "left",
    lineHeight: 24,
    marginBottom: 30,
    fontWeight: '600',
    letterSpacing: 1.0, 

  },
  highlight: { color: 'rgba(255, 0, 0, 1)', fontWeight: "bold" },

  featureBox: {
    backgroundColor: "#000000ff",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    shadowColor: "#ffffffff",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 10,
    textAlign: "center",
  },
  featureText: {
    fontWeight: "600",
    color: colors.dark,
    fontSize: 18,
    marginBottom: 6,
    textAlign: "left",
    letterSpacing: 1.2, 
    lineHeight: 26, 


  },
});
