import { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { getProducts } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedProductCard } from "./ProductCard";
import { Logo } from "./Logo";

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
