import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";

export default function Detail() {
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerTitle: "Nombre del producto",
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalle del producto {id}
        </Text>
        <Link href="/" className="text-blue-400">
          Volver atrás
        </Link>
      </View>
    </Screen>
  );
}
