import { View, Text } from "react-native";
import LanguageSwitcher from "@/components/LangSwitcher";
import { getModelLanguage } from "@/utils/langMap";

export default function index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <LanguageSwitcher
        // translateWithAI(inputText, modelSource, modelTarget);

        sourceLang="en"
        targetLang="hi"
        onSwitch={(src: string, tgt: string) => {
          const modelSource = getModelLanguage(src);
          const modelTarget = getModelLanguage(tgt);

          console.log("Model understands:", modelSource, "→", modelTarget);

          //  pass these to your AI model
        }}
      />
      <Text>Translate with ease</Text>
    </View>
  );
}
