import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { getProducts } from "./lib/metacritic";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
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
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
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
  card: {
    marginBottom: 42,
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 10,
    objectFit: "cover",
  },
});
