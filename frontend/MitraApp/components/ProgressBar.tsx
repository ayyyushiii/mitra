import { View } from "react-native";

export default function ProgressBar({ value = 0 }: { value?: number }) {
  const pct = Math.min(100, Math.max(0, value));
  return (
    <View style={{ width: "100%", height: 10, backgroundColor: "#E5E7EB", borderRadius: 6 }}>
      <View style={{ width: `${pct}%`, height: 10, backgroundColor: "#10B981", borderRadius: 6 }} />
    </View>
  );
}
