import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

export function ProductCard({ product }) {
  return (
    <View key={product.id} style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
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
