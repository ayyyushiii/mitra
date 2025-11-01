import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { auth, setupRecaptcha } from "../firebaseConfig";
import { signInWithPhoneNumber } from "firebase/auth";


export default function AuthScreen() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [confirm, setConfirm] = useState<any>(null);

  const sendOTP = async () => {
    const formatted = "+91" + phone;
    const confirmation = await setupRecaptcha(formatted);
    setConfirm(confirmation);
  };

  const verifyOTP = async () => {
    await confirm.confirm(code);
    alert("✅ Login Successful");
  };

  return (
    <View style={{ padding: 20 }}>
      <View id="recaptcha-container" />

      <Text>Phone Number</Text>
      <TextInput value={phone} onChangeText={setPhone} keyboardType="number-pad" style={{ borderWidth: 1, padding: 10, marginBottom: 10 }} />

      <TouchableOpacity onPress={sendOTP} style={{ backgroundColor: "#2563EB", padding: 12 }}>
        <Text style={{ color: "white", textAlign: "center" }}>Send OTP</Text>
      </TouchableOpacity>

      {confirm && (
        <>
          <Text style={{ marginTop: 20 }}>Enter OTP</Text>
          <TextInput value={code} onChangeText={setCode} keyboardType="number-pad" style={{ borderWidth: 1, padding: 10, marginBottom: 10 }} />

          <TouchableOpacity onPress={verifyOTP} style={{ backgroundColor: "#16A34A", padding: 12 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
