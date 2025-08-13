import { Stack, useRouter} from 'expo-router'
import { TouchableOpacity } from 'react-native'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'



export const Layout = () => {
  const router = useRouter();

  return (
    <Stack screenOptions={{
            contentStyle: { backgroundColor: Colors.selected },
          }}>
      <Stack.Screen name='drawer' options={{headerShown: false}} />
      <Stack.Screen
            name="(modal)/settings"
            options={{
              headerTitle: 'Settings',
              presentation: 'modal',
              headerShadowVisible: false,
              headerStyle: { backgroundColor: Colors.selected },
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => router.back()}
                  style={{ backgroundColor: Colors.greyLight, borderRadius: 20, padding: 4 }}>
                  <Ionicons name="close-outline" size={16} color={Colors.grey} />
                </TouchableOpacity>
              ),
            }}
          />
      <Stack.Screen
            name="(modal)/purchase"
            options={{
              headerTitle: '',
              presentation: 'fullScreenModal',
              headerShadowVisible: false,
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => router.back()}
                  style={{ borderRadius: 20, padding: 4 }}>
                  <Ionicons name="close-outline" size={28} color={Colors.greyLight} />
                </TouchableOpacity>
              ),
            }}
          />
    </Stack>
  )
}

