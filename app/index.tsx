import {  View} from "react-native";
import AnimatedIntro from "@/components/AnimatedIntro";
import LoginSheet from "@/components/LoginSheet";

export default function Index() {
  return (
    <View 
      style={{
        flex: 1,
        justifyContent: "center",
        }}>    
      <AnimatedIntro/>
      <LoginSheet/>

    </View>
  );
}
