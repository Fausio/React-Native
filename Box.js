import { View, StyleSheet, Text } from "react-native";


const styles = StyleSheet.create(
    {
        box: {
            backgroundColor: '#fff',
            padding: 20,
        },
        text: {
            fontSize: 24,
            fontWeight: "Bold",
            textAlign: "Center",
            color: "white"
        },
    }
);

export default function Box({ children, style }) {

    return (
        <View style={[styles.Box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}