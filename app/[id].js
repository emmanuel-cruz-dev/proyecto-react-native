import { Link, Stack } from "expo-router";
import { ActivityIndicator, Text, View, Image } from "react-native";
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
            <View className="justify-center">
              <Image
                className="mb-4 rounded mx-auto"
                source={{ uri: productInfo.image }}
                style={{ width: 240, height: 320, objectFit: "scale-down" }}
              />
              <Text className="text-white font-bold mb-8 text-2xl">
                {productInfo.title}
              </Text>
              <Text className="text-white text-white/90 mb-4 text-2xl">
                ${productInfo.price}
              </Text>
              <Text className="text-white text-white/90 mb-4">
                {productInfo.description}
              </Text>
            </View>
            <Link href="/" className="text-blue-400">
              Volver atrás
            </Link>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
