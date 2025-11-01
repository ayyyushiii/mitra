import { TouchableOpacity, Text } from "react-native";

export default function CategoryChip({
  label, active, onPress,
}: { label: string; active?: boolean; onPress?: () => void }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 8, paddingHorizontal: 12, borderRadius: 16, marginRight: 8,
        backgroundColor: active ? "#1E40AF" : "#EFF6FF",
      }}
    >
      <Text style={{ color: active ? "white" : "#1E40AF", fontWeight: "600" }}>{label}</Text>
    </TouchableOpacity>
  );
}
