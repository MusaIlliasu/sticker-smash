import { Stack } from "expo-router";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFound() {
  return (
    <>
        <Stack.Screen options={{ title: "Oops! Not Found" }} />
        <View style={styles.container}>
            <Text style={styles.header}>Oops! Not Found</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        fontSize: 30,
        color: "red"
    },
    link: {
        textDecorationLine: "underline",
        color: "blue"
    }
});