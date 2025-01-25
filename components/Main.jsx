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

import { CircleInfoIcon } from "./Icons";

export function Main() {
  const [products, setProducts] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <View className="bg-black">
      {/* <View className="flex-row justify-between items-center my-4 mx-2">
        <View>
          <Logo />
        </View>
        <Link asChild href="/about">
          <Pressable className="flex-row items-center gap-2 my-2">
            <CircleInfoIcon />
            <Text className="text-xl text-blue-400">Ir al about</Text>
          </Pressable>
        </Link>
      </View> */}

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
