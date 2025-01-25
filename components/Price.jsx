import { Text, View } from "react-native";

export function Price({ price, maxPrice }) {
  const getColors = () => {
    const percent = (price / maxPrice) * 100;
    if (percent > 600) return "bg-red-500 text-white";
    if (percent > 200) return "bg-yellow-500 text-white";
    return "bg-green-500 text-white";
  };

  const className = getColors();
  return (
    <View
      className={`${className} w-1/3 rounded-full justify-center items-center`}
    >
      <Text className="text-white text-lg font-bold">${price}</Text>
    </View>
  );
}
