import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { t, setLocale } from "../i18n";

import SavingsPlanner from "../components/SavingsPlanner";

const LangBtn = ({ code, label }: { code: "en" | "hi" | "kn"; label: string }) => (
  <TouchableOpacity
    onPress={() => { setLocale(code); alert(`Language: ${label}`); }}
    style={{ backgroundColor: "#EFF6FF", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12, marginRight: 8 }}
  >
    <Text style={{ color: "#1E40AF", fontWeight: "700" }}>{label}</Text>
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const uid = "demo-user"; // replace with auth.currentUser?.uid when you add phone auth
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      <View style={{ padding: 16, paddingTop: 48, backgroundColor: "#1E40AF", borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}>
        <Text style={{ color: "white", opacity: 0.9 }}>{i18n.t("greeting")}</Text>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "800" }}>Rajesh Kumar</Text>

        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}>
          <Text style={{ color: "white", marginRight: 12 }}>{i18n.t("language")}:</Text>
          <LangBtn code="en" label="English" />
          <LangBtn code="hi" label="हिन्दी" />
          <LangBtn code="kn" label="ಕನ್ನಡ" />
        </View>
      </View>

      <SavingsPlanner uid={uid} />
    </ScrollView>
  );
}
