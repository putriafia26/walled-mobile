import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Button from '../component/Button';
import Input from '../component/Input';
import { useNavigation } from 'expo-router';


export default function App() {
  const navigation = useNavigation()
    const handleHome = () => {
        navigation.navigate('(home)')
    }
  return (
    <View style={styles.container}>

      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="strecth" />
      {/* <Text>Nyoba nich</Text> */}
      
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#aaa" 
        keyboardType='email-address'
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        placeholderTextColor="#aaa" 
        secureTextEntry={true} 
      />

      
      {/* <Input text="Notes" /> */}

      <Button text="Login" onPress={handleHome}/>
      <Text style={styles.dontHaveAccount}>Don't have account? <Link href="/register" style={styles.register}>Register here</Link> </Text>
      {/* <Link href="/(home)" style={styles.linkToHome}>Masuk</Link> */}
      
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 233,
    height: 57,
    marginBottom: 45,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4DB6AC',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',

  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  register: {
    color: '#19918F',
  },
  dontHaveAccount: {
    marginTop: 10,
    alignSelf:"flex-start",
  },
  linkToHome: {
    marginTop: 10,
    color: '#fff',
    alignSelf:"flex-start",
    backgroundColor: '#19918f',
  },
});
