import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import Button from '../component/Button';
import Input from '../component/Input';
import { useNavigation } from 'expo-router';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';


export default function App() {
    const navigation = useNavigation()
    const handleRegister = () => {
        navigation.navigate('index')
    }
    const [isChecked, setChecked] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      
      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="strecth" />
      
      <TextInput 
        style={styles.input} 
        placeholder="Fullname" 
        placeholderTextColor="#aaa" 
      />

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

      <TextInput 
        style={styles.input} 
        placeholder="Avatar URL" 
        placeholderTextColor="#aaa" 
        keyboardType='url' 
      />
      <View style={styles.tnc}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#19918F' : undefined}
        />
        <Text style={styles.haveAccount}>I have read and agree to the 
          <Link href="/tnc" style={styles.login}>
            <Text style={{color:"#19918F"}}>Terms and conditions</Text>
          </Link> 
        </Text>
      </View>

      
      {/* <Input text="Notes" /> */}

      <Button text="Register" onPress={handleRegister} />
      <Text style={styles.haveAccount}>Already have account? <Link href="/" style={styles.login}>Login here</Link> </Text>
      
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
  login: {
    color: '#19918F',
    paddingLeft: 2,
  },
  haveAccount: {
    marginTop: 7,
    alignSelf: "flex-start",
  },
  checkbox: {
    margin: 7,
  },
  tnc: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "strecth"
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'justify',
  },
  noAccount: {
    marginRight: 2,
    paddingHorizontal: 6,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
});
