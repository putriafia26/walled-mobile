// import { View, Text, StyleSheet } from "react-native";
import Amount from "../../component/Amount";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { StatusBar } from 'expo-status-bar';
import { Link, useRouter } from 'expo-router';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
// import Button from '../component/Button';
// import Input from '../component/Input';
import { useNavigation } from 'expo-router';
import { z } from "zod";
import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

// const topUpSchema = z.object( {
//   Ammount: z.number().gte(500),
//   Notes: z.string().min(0),
// });

export default function Topup(){
    // const [form, setForm] = useState({ ammount:"", description: ""})
    // const [errorsMsg, setErrors] = useState({})
    // const [serverError, setServerError] = useState("")

    // const handleInputChange = (key, value) => {
    //     setForm({...form, [key]: value})
    //     try {
    //     topUpSchema.pick({[key]: true}).parse({[key]: value})
    //     setErrors((prev) => ({...prev, [key]: ""}))
    //     } catch (err) {
    //     setErrors((prev) => ({...prev, [key]: err.errors[0].message}))
    //     }
    // }

    // const handleSubmit = async() => {
    //     try {
    //     topUpSchema.parse(form)

    //     const res = await axios.post("http://192.168.30.77:8080/transactions/topup", form) 
    //     await AsyncStorage.setItem("token", res.data.data.token)
    //     // router.replace("/(home)")
    //     } catch (err) {
    //     if (err?.response) {
    //         setServerError(err.response.data.message)
    //         return
    //     }
    //     const errors = {}
    //     err.errors.forEach((item) => {
    //         const key = item.path[0]
    //         errors[key] = item.message
    //     })
    //     setErrors(errors)
    // }
    // }
    return(
        <View style={styles.container}>
            <Amount onChange={handleInputChange}  marginBottom={24} />
            <Input 
            // onChangeText={(text) => handleInputChange("notes", text)}
            text={"Notes"} />
            <Button text={"Top Up"} marginTop={150}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff'
    },
});