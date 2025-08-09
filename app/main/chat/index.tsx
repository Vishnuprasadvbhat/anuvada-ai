import { View, Text } from "react-native";
import LanguageSwitcher from "@/components/LangSwitcher";
import { getModelLanguage } from "@/utils/langMap";

export default function index() {


  return (
    <View>
    <LanguageSwitcher
        // translateWithAI(inputText, modelSource, modelTarget);

        sourceLang="English"
        targetLang="Japanese"
        onSwitch={(src: string, tgt: string) => {
          const modelSource = getModelLanguage(src);
          const modelTarget = getModelLanguage(tgt);

          console.log("Model understands:", modelSource, "→", modelTarget);

          //  pass these to your AI model
        }}
      />
    </View>
  );
}
