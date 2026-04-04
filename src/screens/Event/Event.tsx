import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Event = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Event Screen</Text>
            <Text>Note: Not in current scope</Text>
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
export default Event;