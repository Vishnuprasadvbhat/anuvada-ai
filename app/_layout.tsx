import { Ionicons } from "@expo/vector-icons";
import { Slot, SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store';
import { useFonts } from "@expo-google-fonts/raleway";
import { useEffect } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const publishKey =  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err){
      return null;
    }
  },
  async saveToken (key:string, value:string){
  try {
    return SecureStore.setItemAsync(key, value);
  }
  catch (err){
    return ;
  }
  } 
}


SplashScreen.preventAutoHideAsync();

const  InitialLayout = () =>  {
  const router = useRouter();
  const {isLoaded, isSignedIn} = useAuth(); 
  const [loaded, error] = useFonts({
    SpaceMono : require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  const segments = useSegments();

  useEffect(() => {
    if (error) throw error;

  }, [error]);

  useEffect( () => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect( () => {
    if (!loaded) return;

    const segment = segments[0];
    console.log('useEffect -> Segments', segment);
  }, [isSignedIn])

  if (!loaded || !isLoaded){
    return <Slot/>
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{
          presentation: 'modal',
          title: "",
          headerTitleStyle : {
            fontFamily: 'mon-sb'
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}

const RootLayoutNav = () => {
  return (
    <ClerkProvider publishableKey={publishKey!} tokenCache={tokenCache}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <InitialLayout />
      </GestureHandlerRootView>
    </ClerkProvider>
  );
};


export default RootLayoutNav;