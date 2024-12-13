import FontAwesome from '@expo/vector-icons/FontAwesome';
// import FontAwesome6 from '@expo/vector-icons/FontAwesome6'; 
import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: 'transfer',
          tabBarIcon: ({ color }) => <Feather size={28} name="send" color={color} />,
        }}
      />
      <Tabs.Screen
        name="topup"
        options={{
          title: 'topup',
          tabBarIcon: ({ color }) => <Feather size={28} name="plus" color={color} />,
        }}
      />
    </Tabs>
  );
}
