import { Tabs } from "expo-router";

import { HomeIcon, InfoIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: () => <InfoIcon />,
        }}
      />
    </Tabs>
  );
}
