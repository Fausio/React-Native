import { View, StyleSheet, Text } from "react-native";


const styles = StyleSheet.create(
    {
        box: {
            backgroundColor: '#fff',
            padding: 20,
        },
        text: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: "white"
        },
    });

export default function Box({ children, style }) {

    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}