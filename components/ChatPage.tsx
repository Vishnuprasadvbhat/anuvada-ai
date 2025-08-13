import { View, } from "react-native";

import Picker from "@/components/Picker";
import MessageInput from "@/components/MessageInput";

export default function iChatPage() {

  return (
    <View>
    <Picker />
    <MessageInput />
    </View>
  );
}