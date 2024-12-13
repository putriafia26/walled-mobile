import { TextInput, View, Text, StyleSheet } from "react-native"

function Input({text}) {
    return (
        <View style={styles.container}>
            <Text style={styles.placeholder}>{text}</Text>
            <TextInput style={styles.input} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: 'white',
        width: '100%',
    },
    placeholder: {
        color: '#B3b3b3',
    },
    input: {
        borderBottomColor: '#B3b3b3',
        borderBottomWidth: 0.5,
    }
})

export default Input