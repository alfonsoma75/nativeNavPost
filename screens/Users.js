import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from '../components/ListItem';

export default ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    const fetchusers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchusers()
    }, [])
    return (
      <View style={styles.container}>
        {loading 
          ? <Text>Cargando...</Text> 
          :  <FlatList 
                style={styles.list}
                data={users}
                keyExtractor={x => String(x.id)}
                renderItem={({item}) => <ListItem onPress={() => navigation.navigate('Posts', { user_id: item.id, userName: item.name })} title={item.name} />}
            />
        }
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch'
    }
});