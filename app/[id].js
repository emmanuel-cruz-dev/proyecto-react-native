import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Detail() {
  return (
    <View>
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalle del producto
        </Text>
        <Link asChild href="/">
          <Text className="text-blue-400">Volver al inicio</Text>
        </Link>
      </View>
    </View>
  );
}
