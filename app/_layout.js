import { Link, Stack } from "expo-router";
import { Pressable, View, Text } from "react-native";
import { CircleInfoIcon } from "../components/Icons";
import { Logo } from "../components/Logo";

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          //headerRight: () => (
          // <Link asChild href="/about">
          //   <Pressable className="flex-row items-center gap-2 my-2">
          //     <CircleInfoIcon />
          //     <Text className="text-xl text-blue-400">Ir al about</Text>
          //   </Pressable>
          // </Link>
          //),
        }}
      />
    </View>
  );
}
