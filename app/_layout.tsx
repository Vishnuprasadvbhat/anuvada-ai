import { Ionicons } from "@expo/vector-icons";
import { SplashScreen, Stack, useRouter} from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import React from "react";

// import { useFonts } from "@expo-google-fonts/raleway";
// import { useEffect } from "react";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { useAuth } from "@/context/AuthContext";

// import { SafeAreaProvider } from "react-native-safe-area-context";


// const InitialLayout = () => {

//   const { isLoaded, isSignedIn } = useAuth();
//   const [loaded, error] = useFonts({
//     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   const router = useRouter();
//   const segments = useSegments();
//   const inAuthGroup = segments[0] === "auth";

//   useEffect(() => {
//     if (error) throw error;
//   }, [error]);

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   useEffect(() => {
//     if (!loaded || !isLoaded) return;

//     if (!isSignedIn && !inAuthGroup) {
//       router.replace("/");
//     } else if (isSignedIn && inAuthGroup) {
//       router.replace("/");
//     }
//   }, [ loaded, isLoaded, isSignedIn, inAuthGroup, router ]);

//   if (!loaded || !isLoaded) return null;

//   return (
//       <GestureHandlerRootView style={{ flex: 1 }}>
//     <Stack>
//       <Stack.Screen name="index" options={{ headerShown: false }} />
{
  /* <Stack.Screen
        name="login"
        options={{
          presentation: "modal",r
          headerTitle: () => <Text>Custom App</Text>,
          headerTitleStyle: {
            fontFamily: "mon-sb",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
//       /> */
}
//     </Stack>
//     </GestureHandlerRootView>

//   );
// };

const RootLayoutNav = () => {
  
SplashScreen.preventAutoHideAsync();
const router = useRouter();

  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="main" options={{
          presentation: "modal",
          headerTitle: () => <Text>Main UI</Text>,
          headerTitleStyle: {
            fontFamily: "mon-sb",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }} />
      </Stack>
  );
};

export default RootLayoutNav;
