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
import { Screen } from "./Screen";
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
    <Screen>
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
    </Screen>
  );
}
