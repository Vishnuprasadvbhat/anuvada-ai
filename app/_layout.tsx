import { Ionicons } from "@expo/vector-icons";
import { Slot, SplashScreen, Stack, useRouter, useSegments} from "expo-router";
import { TouchableOpacity } from "react-native";
import { useFonts } from "@expo-google-fonts/raleway";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text } from "react-native";
import { AuthProvider, useAuth }from "@/context/AuthContext";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/utils/supabase";

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {

  const [session, setSession] =useState<Session |null>(null);

  const { isLoaded, isSignedIn } =  useAuth();
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const router = useRouter();
  const segments = useSegments();
  const inAuthGroup = segments[0] === 'login' || segments[0] === 'auth';

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const segment = segments[0] ==='auth';

  useEffect(() => {
    if (!loaded || !isLoaded) return;

    if (!isSignedIn && !inAuthGroup) {
      router.replace('/login');
    } else if (isSignedIn && inAuthGroup) {
      router.replace('/');
    }
  }, [isLoaded, isSignedIn, loaded]);

  if (!loaded || !isLoaded) return null;  

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{
          presentation: "modal",
          headerTitle : () => <Text>Custom App</Text>,
          headerTitleStyle: {
            fontFamily: "mon-sb",
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
};

const RootLayoutNav = () => {

  return (
    <AuthProvider> 
      <GestureHandlerRootView style={{ flex: 1 }}>
        <InitialLayout />
      </GestureHandlerRootView>
    </AuthProvider>
  );
};

export default RootLayoutNav;
