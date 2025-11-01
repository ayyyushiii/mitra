import { View, Text, FlatList } from "react-native";
import ProgressBar from "../components/ProgressBar";

const circles = [
  { id: "g1", title: "Friends Group", members: 4, pot: 2000, monthly: 500, month: "2/4", progress: 55 },
  { id: "g2", title: "Family Savings", members: 5, pot: 5000, monthly: 1000, month: "1/5", progress: 20 }
];

export default function CirclesScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 54 }}>
      <FlatList
        data={circles}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "white", borderRadius: 16, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: "#F3F4F6" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 16, fontWeight: "800" }}>{item.title}</Text>
              <Text style={{ backgroundColor: "#E6FBEA", color: "#065F46", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 }}>Active</Text>
            </View>
            <Text style={{ color: "#6B7280", marginVertical: 8 }}>
              {item.members} Members • Pot ₹{item.pot} • Monthly ₹{item.monthly} • Month {item.month}
            </Text>
            <ProgressBar value={item.progress} />
          </View>
        )}
      />
    </View>
  );
}
