import { Link, Stack } from "expo-router";
import { ActivityIndicator, Text, View, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getProductDetails } from "../lib/metacritic";
import { ScrollView } from "react-native";
import { Price } from "../components/Price";

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
              <View className="flex-row justify-center mb-2">
                <Price price={productInfo.price} maxPrice={100} />
              </View>
              <Text className="text-white font-bold text-2xl text-center">
                {productInfo.title}
              </Text>
              <Text className="text-white/70 mb-4 text-base my-4">
                {productInfo.description}
              </Text>
            </View>
            <Link
              href="/"
              className="text-blue-400 text-lg border border-blue-400  w-1/3 rounded-full px-4 py-2 mt-8"
            >
              Volver atrás
            </Link>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
