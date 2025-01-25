import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";

import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable
            className={`active:opacity-50 flex-row items-center gap-2 my-2`}
          >
            <HomeIcon />
            <Text className="text-xl text-blue-400">Volver al inicio</Text>
          </StyledPressable>
        </Link>
        <Text className="text-white mb-8 text-2xl font-bold">
          Sobre el Proyecto
        </Text>
        <Text className="text-white text-white/90 mb-4">
          This is a simple app to learn how to build a React Native app. Because
          I like to learn new things, I decided to build this app to learn React
          Native. The app is built using Expo, React Native, and Tailwind CSS,
          which are all open-source projects.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          This is a simple app to learn how to build a React Native app. Because
          I like to learn new things, I decided to build this app to learn React
          Native. The app is built using Expo, React Native, and Tailwind CSS,
          which are all open-source projects.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          This is a simple app to learn how to build a React Native app. Because
          I like to learn new things, I decided to build this app to learn React
          Native. The app is built using Expo, React Native, and Tailwind CSS,
          which are all open-source projects.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          This is a simple app to learn how to build a React Native app. Because
          I like to learn new things, I decided to build this app to learn React
          Native. The app is built using Expo, React Native, and Tailwind CSS,
          which are all open-source projects.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          This is a simple app to learn how to build a React Native app. Because
          I like to learn new things, I decided to build this app to learn React
          Native. The app is built using Expo, React Native, and Tailwind CSS,
          which are all open-source projects.
        </Text>
      </ScrollView>
    </Screen>
  );
}
