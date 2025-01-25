import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const HomeIcon = (props) => {
  return <FontAwesome name="home" size={24} color="#60a5fa" {...props} />;
};

export const CircleInfoIcon = (props) => {
  return (
    <FontAwesome6 name="circle-info" size={24} color="#60a5fa" {...props} />
  );
};
