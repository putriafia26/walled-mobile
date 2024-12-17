import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Input from "../../component/Input";
import Amount from "../../component/Amount";
import Button from "../../component/Button";
export default function Transfer() {
    const [user, setUser] = useState({})
    useEffect(() => {
        const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("token");
            if (value !== null) {
            const res = await axios.get(
                "http://192.168.30.77:8080/profile",
                {
                headers: {
                    Authorization: `Bearer ${value}`,
                },
                }
            );
            const user = res.data.data
            setUser(user)
            }
        } catch (e) {
            console.log(e);
        }
        };
        getData();
    }, []);
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ddd' }}>
            <View style={{backgroundColor: '#19918F', paddingHorizontal: 20, paddingVertical: 8, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 18 }}>To:</Text>
                <TextInput style={{ fontSize: 18 }} keyboardType="number-pad" placeholder="insert account number" placeholderTextColor={'#fff'} color={'#fff'} />
            </View>
            <View style={styles.container}>
                <View>
                    <Amount showBalance={true} marginBottom={24} balance={user.wallet?.balance} />
                    <Input text={"Notes"} />
                </View>
                <Button marginTop={240} marginBottom={20} text="Transfer" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'space-between',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    }
});