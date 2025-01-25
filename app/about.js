import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <ScrollView>
      <Link asChild href="/">
        <Pressable>
          <Text className="text-xl text-blue-400 mt-12 mb-4">
            Volver al inicio
          </Text>
        </Pressable>
      </Link>
      <Text className="text-white mb-8 text-2xl font-bold">
        Sobre el Proyecto
      </Text>
      <Text className="text-white text-white/90 mb-4">
        This is a simple app to learn how to build a React Native app. Because I
        like to learn new things, I decided to build this app to learn React
        Native. The app is built using Expo, React Native, and Tailwind CSS,
        which are all open-source projects.
      </Text>
      <Text className="text-white text-white/90 mb-4">
        This is a simple app to learn how to build a React Native app. Because I
        like to learn new things, I decided to build this app to learn React
        Native. The app is built using Expo, React Native, and Tailwind CSS,
        which are all open-source projects.
      </Text>
      <Text className="text-white text-white/90 mb-4">
        This is a simple app to learn how to build a React Native app. Because I
        like to learn new things, I decided to build this app to learn React
        Native. The app is built using Expo, React Native, and Tailwind CSS,
        which are all open-source projects.
      </Text>
      <Text className="text-white text-white/90 mb-4">
        This is a simple app to learn how to build a React Native app. Because I
        like to learn new things, I decided to build this app to learn React
        Native. The app is built using Expo, React Native, and Tailwind CSS,
        which are all open-source projects.
      </Text>
      <Text className="text-white text-white/90 mb-4">
        This is a simple app to learn how to build a React Native app. Because I
        like to learn new things, I decided to build this app to learn React
        Native. The app is built using Expo, React Native, and Tailwind CSS,
        which are all open-source projects.
      </Text>
    </ScrollView>
  );
}
