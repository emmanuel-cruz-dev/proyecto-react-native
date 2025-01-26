import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Price } from "./Price";
import { Link } from "expo-router";

import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function ProductCard({ product }) {
  return (
    <Link asChild href={`/${product.id}`}>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
        <View key={product.id} className="flex-row gap-4">
          <Image source={{ uri: product.image }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-2" style={styles.title}>
              {product.title.slice(0, 40)}
            </Text>
            <Price price={product.price} maxPrice={100} />
            <Text className="mt-2 flex-shrink" style={styles.description}>
              {product.description.slice(0, 100)}
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedProductCard({ product, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <ProductCard product={product} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 120,
    height: 160,
    borderRadius: 10,
    // objectFit: "scale-down",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
});
