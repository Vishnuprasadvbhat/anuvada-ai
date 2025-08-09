import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Path, Stop } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import colors from '../constants/Colors';

const { width, height } = Dimensions.get('window');
const AnimatedPath = Animated.createAnimatedComponent(Path);


function useWaveAnimation(speed: number, amplitude: number, yOffset: number) {
  const offset = useSharedValue(0);

  React.useEffect(() => {
    offset.value = withRepeat(withTiming(100, { duration: speed }), -1, true);
  }, []);

  return useAnimatedProps(() => {
    const wavelength = width / 1.2;
    const phase = (offset.value / 100) * Math.PI * 2;

    let path = `M0 ${height * yOffset}`;
    for (let x = 0; x <= width; x += 10) {
      const y =
        Math.sin((x / wavelength) * Math.PI * 2 + phase) * amplitude +
        height * yOffset;
      path += ` L${x} ${y}`;
    }
    path += ` L${width} ${height} L0 ${height} Z`;
    return { d: path };
  });
}

export default function IntroScreen() {
  const wave1 = useWaveAnimation(4000, 20, 0.8);
  const wave2 = useWaveAnimation(6000, 25, 0.82);
  const wave3 = useWaveAnimation(8000, 30, 0.85);

  return (
    <View style={styles.container}>
      {/* 🌀 Radial Gradient Background */}
      <Svg height={height} width={width} style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient
            id="radial"
            cx="50%"
            cy="40%"
            rx="70%"
            ry="70%"
            fx="50%"
            fy="40%"
          >
            <Stop offset="0%" stopColor="#497ad4ff" stopOpacity="1" />
            <Stop offset="100%" stopColor="#020018ff" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#radial)" />
        {/* 🌊 Animated Waves */}
        <AnimatedPath animatedProps={wave1} fill={colors.primary} opacity={0.12} />
        <AnimatedPath animatedProps={wave2} fill={colors.pink} opacity={0.10} />
        <AnimatedPath animatedProps={wave3} fill={colors.yellow} opacity={0.08} />
      </Svg>

      {/* 📦 Foreground Content */}
      <View style={styles.innerContainer}>
        <Text style={styles.title}>
          Anuvada AI <Text style={{ color: colors.primary }}>+</Text>
        </Text>
        <Text style={styles.tagline}>Breaking Language Barriers with AI</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          Translate instantly in over{' '}
          <Text style={styles.highlight}>120+ languages</Text> with AI-powered accuracy.
          <Text style={styles.featureText}>
            Experience real-time streaming translations for both text and conversations — anywhere, anytime.
          </Text>
        </Text>
        <View style={styles.featureBox}>
          <Text style={styles.featureText}> Real-time AI Streaming</Text>
          <Text style={styles.featureText}> 120+ Language Support</Text>
          <Text style={styles.featureText}> Conversation Mode</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({

  container: { flex: 1 },

  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: colors.light,
    textAlign: "center",
    marginBottom: 8,
  },
  tagline: {
    fontSize: 18,
    color: colors.greyLight,
    textAlign: "center",
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
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },
  highlight: { color: colors.yellow, fontWeight: "bold" },

  featureBox: {
    backgroundColor: '#12123aff',
    padding: 15,
    borderRadius: 10,
    width: "65%",
    shadowColor: "#24176aff",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 10,
    textAlign: 'center'
  },
  featureText: { fontFamily: "Quicksand_300Light",
    fontWeight: "semibold", color: colors.light, fontSize: 15, marginBottom: 6, textAlign:'center'},
});
