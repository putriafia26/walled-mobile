import { StatusBar } from 'expo-status-bar';
import { Link, useRouter } from 'expo-router';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Button from '../component/Button';
import Input from '../component/Input';
import { useNavigation } from 'expo-router';
import { z } from "zod";
import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const loginSchema = z.object( {
  email: z.string().email({message: "Invalid email address"}),
  password: z.string().min(4, {message: "atleast 4 characters"}),
});

export default function App() {
  const [form, setForm] = useState({ email:"", password: ""})
  const [errorsMsg, setErrors] = useState({})
  const [serverError, setServerError] = useState("")

  const handleInputChange = (key, value) => {
    setForm({...form, [key]: value})
    try {
      loginSchema.pick({[key]: true}).parse({[key]: value})
      setErrors((prev) => ({...prev, [key]: ""}))
    } catch (err) {
      setErrors((prev) => ({...prev, [key]: err.errors[0].message}))
    }
  }

  const handleSubmit = async() => {
    try {
      loginSchema.parse(form)

      const res = await axios.post("http://192.168.30.77:8080/auth/login", form) 
      // if (res.status === 200) {
      //   router.replace('/(home')
      // }
      await AsyncStorage.setItem("token", res.data.data.token)
      router.replace("/(home)")
      // navigation.navigate('/(home)')
      // console.log(res.data.data, 'ini budi')
    } catch (err) {
      // console.log(err?.response, "error")
      if (err?.response) {
        setServerError(err.response.data.message)
        return
      }
      const errors = {}
      err.errors.forEach((item) => {
        const key = item.path[0]
        errors[key] = item.message
      })
      setErrors(errors)
  }
}
  return (
    <View style={styles.container}>
      {serverError && <Text>{serverError}</Text>}

      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="strecth" />
      {/* <Text>Nyoba nich</Text> */}
      
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#aaa" 
        keyboardType='email-address'
        onChangeText={(text) => handleInputChange("email", text)}
        value={form.email}
      />
      {errorsMsg.email ? <Text style={styles.errMsg}>{errorsMsg.email}</Text>: null}
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        placeholderTextColor="#aaa" 
        secureTextEntry={true} 
        onChangeText={(text) => handleInputChange("password", text)}
        value={form.password}
      />
      {errorsMsg.password ? <Text style={styles.errMsg}>{errorsMsg.password}</Text>: null}

      
      {/* <Input text="Notes" /> */}

      <Button text="Login" handlePress={handleSubmit}/>
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
  errMsg: {
    color: "red",
    width: "100%",
  }
});
