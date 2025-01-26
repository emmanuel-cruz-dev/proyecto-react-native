import { Text, View } from "react-native";

export function Price({ price, maxPrice }) {
  const getColor = () => {
    const percent = (price / maxPrice) * 100;
    if (percent > 600) return "bg-red-500";
    if (percent > 200) return "bg-yellow-500";
    return "bg-green-500";
  };

  const className = getColor();
  return (
    <View
      className={`${className} self-start px-4 rounded-full justify-center items-center`}
    >
      <Text className="text-white text-lg font-bold">${price}</Text>
    </View>
  );
}
