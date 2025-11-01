import React, { useEffect, useMemo, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { t, setLocale } from "../i18n";
import ProgressBar from "./ProgressBar";
import { fetchSavingsSplit, saveSavingsSplit } from "../services/chits";

const DEFAULT_CATS = ["marriage", "loans", "land", "education", "gold"] as const;
type Cat = typeof DEFAULT_CATS[number];

export default function SavingsPlanner({ uid }: { uid: string }) {
  const [total, setTotal] = useState<string>("5000");
  const [splits, setSplits] = useState<Record<Cat, number>>({
    marriage: 20, loans: 15, land: 25, education: 20, gold: 20,
  });

  useEffect(() => {
    (async () => {
      const saved = await fetchSavingsSplit(uid);
      if (saved) {
        setTotal(String(saved.total));
        setSplits(saved.splits as Record<Cat, number>);
      }
    })();
  }, [uid]);

  const totalPct = useMemo(() => Object.values(splits).reduce((a, b) => a + Number(b || 0), 0), [splits]);
  const remaining = Math.max(0, 100 - totalPct);
  const alloc = (p: number) => Math.round((Number(total || 0) * p) / 100);

  const update = (key: Cat, pct: string) => {
    const clean = Number((pct || "").replace(/[^0-9]/g, ""));
    setSplits((prev) => ({ ...prev, [key]: clean }));
  };

  const save = async () => {
    await saveSavingsSplit({ uid, total: Number(total), splits });
    alert("Saved!");
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 6 }}>{i18n.t("savings_planner")}</Text>
      <Text style={{ color: "#6B7280", marginBottom: 12 }}>{i18n.t("allocate_savings")}</Text>

      <Text style={{ fontWeight: "600", marginBottom: 6 }}>{i18n.t("total_savings")} (₹)</Text>
      <TextInput
        value={total}
        onChangeText={setTotal}
        keyboardType="number-pad"
        style={{ borderWidth: 1, borderColor: "#E5E7EB", borderRadius: 8, padding: 10, marginBottom: 12 }}
      />

      <FlatList
        data={DEFAULT_CATS as readonly string[]}
        keyExtractor={(k) => k}
        renderItem={({ item }) => {
          const key = item as Cat;
          const pct = splits[key] ?? 0;
          return (
            <View style={{
              backgroundColor: "white", borderRadius: 12, padding: 12, marginBottom: 10,
              borderWidth: 1, borderColor: "#F3F4F6"
            }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 6 }}>
                <Text style={{ fontWeight: "600" }}>{i18n.t(`categories.${item}`)}</Text>
                <Text style={{ color: "#6B7280" }}>{pct}% • ₹{alloc(pct)}</Text>
              </View>
              <ProgressBar value={pct} />
              <TextInput
                value={String(pct)}
                onChangeText={(v) => update(key, v)}
                keyboardType="number-pad"
                style={{ marginTop: 8, borderWidth: 1, borderColor: "#E5E7EB", borderRadius: 8, padding: 8 }}
                placeholder="%"
              />
            </View>
          );
        }}
      />

      <View style={{ marginTop: 6, marginBottom: 12 }}>
        <Text style={{ color: remaining === 0 ? "#059669" : "#D97706", fontWeight: "600" }}>
          {i18n.t("remaining")}: {remaining}%
        </Text>
        <ProgressBar value={100 - remaining} />
      </View>

      <TouchableOpacity onPress={save} style={{ backgroundColor: "#1E40AF", padding: 14, borderRadius: 12 }}>
        <Text style={{ color: "white", fontWeight: "700", textAlign: "center" }}>{i18n.t("save")}</Text>
      </TouchableOpacity>
    </View>
  );
}
