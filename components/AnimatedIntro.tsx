import { StyleSheet, useWindowDimensions } from 'react-native'
import Animated, { useDerivedValue, useSharedValue, interpolate,withRepeat, withSequence, useAnimatedStyle, withDelay, withTiming, useAnimatedReaction, interpolateColor } from 'react-native-reanimated';
import {ReText} from 'react-native-redash';
import Colors from '@/constants/Colors';
import { memo, useEffect } from 'react';



const content = [
  {
    title: "Speak with Clarity",
    bg: Colors.lime,
    fontColor: Colors.pink,
  },
  {
    title: "Listen with Intention",
    bg: Colors.brown,
    fontColor: Colors.sky,
  },
  {
    title: "Translate with Intelligence",
    bg: Colors.orange,  
    fontColor: Colors.blue,
  },
  {
    title: "Powered by Anuvāda",
    bg: Colors.green,
    fontColor: Colors.pink,
  },
];



const AnimatedIntro = () =>  {


    const {width} = useWindowDimensions();
    const cursorwidth= 34;
    const half = width / 2 - cursorwidth / 2;

    const currentX = useSharedValue(half);
    const currentIndex = useSharedValue(0);
    const isAtStart = useSharedValue(true);
    const labelWidth = useSharedValue(0);
    const canGoToNext = useSharedValue(false);
    const didPlay =  useSharedValue(false);

    const newColorIndex = useDerivedValue ( () => {
      if (!isAtStart.value) {
        return (currentIndex.value +1) % content.length;

      }
      return currentIndex.value;
    }, [currentIndex]);

    const textStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        currentX.value,
        [half, half + labelWidth.value / 2],
        [content[newColorIndex.value].fontColor, content[currentIndex.value].fontColor],
        'RGB'
      ),
      transform: [
        {
          translateX: interpolate(
            currentX.value,
            [half, half + labelWidth.value / 2],
            [half + 4, half - labelWidth.value / 2]
          ),
        },
      ],
    };
  }, [currentIndex, currentX]);

  const blinkOpacity = useSharedValue(1);
  
    const cursorStyle = useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          currentX.value,
          [half, half + labelWidth.value / 2],
          [content[newColorIndex.value].fontColor, content[currentIndex.value].fontColor],
          'RGB'
        ),
        transform: [{ translateX: currentX.value }],
        opacity: blinkOpacity.value,
      };
    });

  const mask = useAnimatedStyle(
    () => ({
      backgroundColor: interpolateColor(
        currentX.value,
        [half, half + labelWidth.value / 2],
        [content[newColorIndex.value].bg, content[currentIndex.value].bg],
        'RGB'
      ),
      transform: [{ translateX: currentX.value }],
      width: width / 1.5,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
    }),
    [currentIndex, currentX, labelWidth]
  );

  const style1 = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      currentX.value,
      [half, half + labelWidth.value / 2],
      [content[newColorIndex.value].bg, content[currentIndex.value].bg],
      'RGB'
    ),
    opacity: interpolate(1, [1, 0], [1, 0, 0, 0, 0, 0, 0]),
    transform: [
      {
        translateX: interpolate(1, [1, 0], [0, -width * 2, -width, -width, -width, -width, -width]),
      },
    ],
  }));

const text = useDerivedValue(() => {
  const index = currentIndex.value;
  return content[index].title;
}, [currentIndex]);

// Start blinking loop
useEffect(() => {
  blinkOpacity.value = withRepeat(
    withSequence(
      withTiming(0, { duration: 600 }),
      withTiming(1, { duration: 600 })
    ),
    -1, // infinite
    true // reverse
  );
}, [blinkOpacity]);


  useAnimatedReaction(
    () => labelWidth.value,
    (newWidth) => {
      currentX.value = withDelay(
        1000,
        withTiming(
          half + newWidth / 2,
          {
            duration: 600,
          },
          (finished) => {
            if (finished) {
              canGoToNext.value = true;
              isAtStart.value = false;
            }
          }
        )
      );
    },
    [labelWidth, currentX, half]
  );

  useAnimatedReaction(
    () => canGoToNext.value,
    (next) => {
      if (next) {
        canGoToNext.value = false;
        currentX.value = withDelay(
          1000,
          withTiming(
            half,
            {
              duration: 600,
            },
            (finished) => {
              if (finished) {
                currentIndex.value = (currentIndex.value + 1) % content.length;
                isAtStart.value = true;
                didPlay.value = false;
              }
            }
          )
        );
      }
    },
    [currentX, labelWidth]
  );


  return (
    <Animated.View style={[styles.wrapper, style1]} >
      <Animated.View style={[styles.content]} >
        <Animated.View style={[styles.cursor, cursorStyle]} pointerEvents="none"  />
        <Animated.View style={[styles.mask, mask]}  />

        <Animated.View  >
          <ReText
            onLayout={(e) => {
              labelWidth.value = e.nativeEvent.layout.width + 4; 
            }}
            style= {[styles.title, textStyle]} 
            text = {text}
          />
        </Animated.View>

      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  mask: {
    zIndex: 1,
    position: 'absolute',
    left: '0%',
    height: 100,
  },
  cursor: {
    width: 5,
    zIndex: 10,
    height: 53,
    backgroundColor: '#000',
    borderRadius: 20,
    position: 'absolute',
    left: '0%',
    
  },
  titleText: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    left: '0%',
    position: 'absolute',
    
   
  },
  content: {
    marginTop: 300,
  },
});


export default memo(AnimatedIntro); // this provide a Memoized version of the function 
// for optimized rendering
