import { View, Text, FlatList } from "react-native";

const tx = [
  { id: "t1", label: "Contribution - Friends Group", amount: -500 },
  { id: "t2", label: "Payout - Family Savings", amount: +5000 },
  { id: "t3", label: "Bonus", amount: +50 }
];

export default function WalletScreen() {
  const total = tx.reduce((a, t) => a + t.amount, 0);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 54 }}>
      <View style={{ backgroundColor: "#1E40AF", padding: 16 }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "800" }}>Wallet</Text>
        <Text style={{ color: "white", marginTop: 6 }}>Balance: ₹{total}</Text>
      </View>

      <FlatList
        contentContainerStyle={{ padding: 16 }}
        data={tx}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "white", borderRadius: 12, padding: 12, marginBottom: 10, borderWidth: 1, borderColor: "#F3F4F6" }}>
            <Text style={{ fontWeight: "600" }}>{item.label}</Text>
            <Text style={{ color: item.amount >= 0 ? "#059669" : "#DC2626", marginTop: 6 }}>
              {item.amount >= 0 ? "+" : "-"}₹{Math.abs(item.amount)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
