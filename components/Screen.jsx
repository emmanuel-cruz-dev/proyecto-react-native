import { View } from "react-native";

export function Screen({ children }) {
  return <View className="flex-1 bg-black py-1 px-2">{children}</View>;
}
