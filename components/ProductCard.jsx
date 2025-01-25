import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import { Price } from "./Price";

export function ProductCard({ product }) {
  return (
    <View
      key={product.id}
      className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10"
    >
      <Image source={{ uri: product.image }} style={styles.image} />
      <View>
        <Text className="mb-1" style={styles.title}>
          {product.title}
        </Text>
        <Price price={product.price} maxPrice={100} />
        <Text className="mt-2 flex-shrink" style={styles.description}>
          {product.description.slice(0, 100)}
        </Text>
      </View>
    </View>
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
    height: 150,
    borderRadius: 10,
    objectFit: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
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
