import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { t, setLocale } from "../i18n/translate";
import { COLORS } from "../constants/theme";

const active = [
  { id: "c1", name: "दोस्तों का चक्र #234", members: "15/15", perDay: 30, total: 5250, progress: 82 },
  { id: "c2", name: "रिक्षा चालक संघ #189", members: "12/12", perDay: 50, total: 6000, progress: 33 }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#1E3A8A", "#2563EB"]} style={styles.hero}>
        <Text style={styles.subtle}>{t("greeting")} (Good Morning)</Text>
        <Text style={styles.name}>राजेश कुमार</Text>

        <View style={styles.savingsCard}>
          <Text style={styles.savingsTitle}>{t("total_savings")}</Text>
          <Text style={styles.amount}>₹4,850</Text>
          <View style={styles.streak}><Text style={{ color: "white" }}>🔥 15 Day Streak</Text></View>
        </View>

        <View style={styles.actions}>
          <Action title={t("pay_today")} />
          <Action title={t("new_circle")} />
          <Action title={t("withdraw")} />
        </View>
      </LinearGradient>

      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 10 }}>{t("active_circles")}</Text>
        <FlatList
          data={active}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => <CircleCard item={item} />}
        />
      </View>
    </View>
  );
}

function Action({ title }: { title: string }) {
  return (
    <TouchableOpacity style={{
      backgroundColor: "white", width: 110, height: 100, borderRadius: 20, justifyContent: "center",
      alignItems: "center", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 2
    }}>
      <Text style={{ color: COLORS.text, fontWeight: "700", textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
}

function CircleCard({ item }: { item: any }) {
  return (
    <View style={{
      backgroundColor: "white", borderRadius: 16, padding: 14, marginBottom: 12,
      shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 6
    }}>
      <Text style={{ fontWeight: "700", marginBottom: 6 }}>{item.name}</Text>
      <Text style={{ color: COLORS.muted, marginBottom: 6 }}>
        सदस्य {item.members} • प्रतिदिन ₹{item.perDay} • कुल राशि ₹{item.total}
      </Text>
      <View style={{ width: "100%", height: 8, backgroundColor: "#E5E7EB", borderRadius: 6 }}>
        <View style={{ width: `${item.progress}%`, height: 8, backgroundColor: COLORS.success, borderRadius: 6 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  hero: { paddingTop: 64, paddingBottom: 24, paddingHorizontal: 16, borderBottomLeftRadius: 28, borderBottomRightRadius: 28 },
  subtle: { color: "white", opacity: 0.9 },
  name: { color: "white", fontSize: 22, fontWeight: "800", marginBottom: 16 },
  savingsCard: { backgroundColor: "rgba(255,255,255,0.15)", padding: 16, borderRadius: 16 },
  savingsTitle: { color: "white", marginBottom: 4 },
  amount: { color: "white", fontSize: 28, fontWeight: "900" },
  streak: { marginTop: 8, alignSelf: "flex-start", backgroundColor: "rgba(255,255,255,0.2)", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999 },
  actions: { marginTop: 18, flexDirection: "row", gap: 12, justifyContent: "space-between" },
});
