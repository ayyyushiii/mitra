import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import i18n from "../i18n";
import { castVote } from "../services/chits";

const MEMBERS = [
  { uid: "u1", name: "R" },
  { uid: "u2", name: "P" },
  { uid: "u3", name: "A" },
  { uid: "u4", name: "N" }
];

export default function VoteRoomScreen() {
  const [selected, setSelected] = useState<string | null>(null);
  const circleId = "demo-circle"; const month = 1; const voterUid = "u1";

  const submit = async () => {
    if (!selected) return;
    await castVote({ circleId, month, voterUid, beneficiaryUid: selected });
    alert("Vote submitted!");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ paddingTop: 60, padding: 16, backgroundColor: "#1E40AF" }}>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "800" }}>{i18n.t("vote_room")}</Text>
        <Text style={{ color: "white", opacity: 0.8 }}>Friends Group • Month 2/4</Text>
      </View>

      <FlatList
        contentContainerStyle={{ padding: 16 }}
        data={MEMBERS}
        keyExtractor={(i) => i.uid}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item.uid)}
            style={{
              backgroundColor: selected === item.uid ? "#EFF6FF" : "#F9FAFB",
              borderWidth: 1, borderColor: selected === item.uid ? "#1E40AF" : "#E5E7EB",
              borderRadius: 12, padding: 14, marginBottom: 10, flexDirection: "row", justifyContent: "space-between"
            }}>
            <Text style={{ fontWeight: "700" }}>{item.name}</Text>
            <Text>{selected === item.uid ? "✓" : ""}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity onPress={submit} style={{ margin: 16, backgroundColor: "#1E40AF", padding: 16, borderRadius: 12 }}>
        <Text style={{ color: "white", textAlign: "center", fontWeight: "800" }}>Submit Vote</Text>
      </TouchableOpacity>
    </View>
  );
}
