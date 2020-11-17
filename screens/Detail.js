import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({ navigation }) => {
    const body = navigation.getParam('body')
    const title = navigation.getParam('title')
    const username = navigation.getParam('username')
    return (
      <View style={styles.container}>
        <Text>{username}</Text>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});