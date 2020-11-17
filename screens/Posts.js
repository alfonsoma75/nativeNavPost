import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from '../components/ListItem';

export default ({ navigation }) => {
    const user_id = navigation.getParam('user_id')
    const userName = navigation.getParam('userName')
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    const fetchposts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchposts()
    }, [])
    return (
      <View style={styles.container}>
        {loading 
          ? <Text>Cargando...</Text> 
          :  <FlatList 
                style={styles.list}
                data={posts.filter( x => x.userId === user_id)}
                keyExtractor={x => String(x.id)}
                renderItem={({item}) => <ListItem onPress={() => navigation.navigate('Detail', { title: item.title, body: item.body, username: userName })} title={item.title} />}
            />
        }
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