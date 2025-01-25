import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Detail() {
  return (
    <View className="flex-1 items-center justify-center">
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalle del producto
        </Text>
        <Link asChild href="/">
          <Text className="text-blue-400">Volver atrás</Text>
        </Link>
      </View>
    </View>
  );
}
