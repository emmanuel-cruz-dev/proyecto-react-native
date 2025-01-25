import { Link, Stack } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getProductDetails } from "../lib/metacritic";
import { ScrollView } from "react-native";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getProductDetails(id).then(setProductInfo);
    }
  }, [id]);

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
        {productInfo === null ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <ScrollView>
            <Text className="text-white font-bold mb-8 text-2xl">
              Detalle del producto {id}
            </Text>
            <Link href="/" className="text-blue-400">
              Volver atrás
            </Link>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
