import { Stack, SplashScreen } from 'expo-router';

export default function Layout() {
  SplashScreen.preventAutoHideAsync();
  

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false}}/>
    </Stack>
  
  );
}