import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// export type MessageInputProps = {
// }



export default function MessageInput() {

  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{ paddingBottom: bottom}}>
      <Text>MessageInput</Text>
    </View>
  )
}