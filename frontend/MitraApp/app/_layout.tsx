import { Tabs } from "expo-router";
import "../i18n";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#1E40AF" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="circles"
          options={{
            title: "Circles",
            tabBarIcon: ({ color, size }) => <Ionicons name="albums-outline" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="vote"
          options={{
            title: "Vote",
            tabBarIcon: ({ color, size }) => <Ionicons name="hand-right-outline" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: "Wallet",
            tabBarIcon: ({ color, size }) => <Ionicons name="wallet-outline" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => <Ionicons name="person-circle-outline" color={color} size={size} />,
          }}
        />
      </Tabs>
    </>
  );
}
