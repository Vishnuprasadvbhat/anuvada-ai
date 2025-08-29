import { Stack} from 'expo-router'
import Colors from '@/constants/Colors'




export const Layout = () => {


  return (
    <Stack screenOptions={{
            contentStyle: { backgroundColor: Colors.selected },
            headerShown: false
          }}>
    <Stack.Screen name='drawer' options={{headerShown: false}} />
    <Stack.Screen name='modal' options={{headerShown: false}} />
    </Stack>
  )
}

