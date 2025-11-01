import React from "react";
import { View } from "react-native";

export default function ProgressBar({ value }: { value: number }) {
  return (
    <View style={{ height: 8, backgroundColor: "#ddd", borderRadius: 6 }}>
      <View style={{
        width: `${value}%`,
        backgroundColor: "#1E40AF",
        height: 8, borderRadius: 6
      }}/>
    </View>
  );
}
