// import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// function LogoTitle() {
//   return (
//     <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
//   );
// }

export default function Home() {
  const [user, setUser] = useState({})
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          const res = await axios.get("http://192.168.30.77:8080/profile", {headers: {
            Authorization: `Bearer ${value}`,
          }})
          const user = res.data.data
          setUser(user)
        }
      } catch (e) {
        console.log(e)
      }
    };
    getData()
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require('C:\Users\putri\Documents\react-native\walled-mobile\assets\logo.png')} style={styles.logo} resizeMode="strecth" /> */}
        {user?.fullname && <Text>{user.fullname}</Text>}
        <Text>Personal Account</Text>
      </View>
      {/* <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          headerTitle: props => <LogoTitle {...props} />,
        }}
      /> */}
      {/* <View style={styles.header}> 
        <Image source={("..assets/splash-icon.png")} style={styles.image} resizeMode='strecth' />
        <View>
          <Text>username</Text>
          <Text>type account</Text>
        </View>
        <Feather name="sun" size={24} color="#F8AB39" />
      </View> */}
        
        <Text>Home Screen</Text>
        {/* <Link href={{ pathname: 'details', params: { name: 'Bacon' } }}>Go to Details</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  header: {
    flexDirection:'row',
    flex: 1,
  }
});
