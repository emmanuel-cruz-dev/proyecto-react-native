import { useEffect, useState } from "react";
import { Link } from "expo-router";
import {
  FlatList,
  View,
  ActivityIndicator,
  Pressable,
  Text,
} from "react-native";
import { getProducts } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedProductCard } from "./ProductCard";
import { Logo } from "./Logo";

import FontAwesome from "@expo/vector-icons/FontAwesome6";

export function Main() {
  const [products, setProducts] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginBlock: 12 }}>
        <Logo />
      </View>
      <Link asChild href="/about">
        <Pressable className="flex-row items-center gap-2 my-2">
          <FontAwesome name="circle-info" size={24} color="#60a5fa" />
          <Text className="text-xl text-blue-400">Ir al about</Text>
        </Pressable>
      </Link>
      {products.length === 0 ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(product) => product.id}
          renderItem={({ item, index }) => (
            <AnimatedProductCard product={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
