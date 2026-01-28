import { Tabs } from "expo-router";

const TabsLayout = ({}) => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="network" />
      <Tabs.Screen name="post" />
      <Tabs.Screen name="notifications" />
      <Tabs.Screen name="jobs" />
    </Tabs>
  );
};

export default TabsLayout;
