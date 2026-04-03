import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Herd = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Herd Screen</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
export default Herd;