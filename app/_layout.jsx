import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1e1e2f", // cor de fundo do tab
          borderTopColor: "transparent", // remove a borda superior
          elevation: 10, // sombra no Android
          height: 60, // altura da barra
          paddingBottom: 5,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#888",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pageone"
        options={{
          title: "Obrigatório",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="tag" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pagetwo"
        options={{
          title: "Livre",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="tags" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="aboutme"
        options={{
          title: "Sobre",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
