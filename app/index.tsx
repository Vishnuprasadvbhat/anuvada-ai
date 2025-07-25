import {  View } from "react-native";
import AnimatedIntro from "@/components/AnimatedIntro";
import EnterButton from "@/components/EnterButton";

export default function index() {
  return (
    <View 
      style={{
        flex: 1,
        justifyContent: "center",
        }}>    
      <AnimatedIntro/>
      <EnterButton />
    </View>
  );
}
