import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'; 
// import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#19918F' }}>
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
          tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="money-bill-transfer" color={color} />,
        }}
      />
      <Tabs.Screen
        name="topup"
        options={{
          title: 'topup',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="wallet" color={color} />,
        }}
      />
    </Tabs>
  );
}
