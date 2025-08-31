import { View } from "react-native";
import Picker from "@/components/Picker";
import MessageInput from "@/components/MessageInput";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChatPage() {

  const bottom  = useSafeAreaInsets().bottom;

  return (
      <View  >
        <Picker />
        <View >
        <MessageInput />
        </View>

      </View>
  
  );
}
