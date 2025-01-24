import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { getProducts } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
      <ScrollView>
        {products.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
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
  image: {
    width: 120,
    height: 150,
    borderRadius: 10,
    objectFit: "cover",
  },
});
