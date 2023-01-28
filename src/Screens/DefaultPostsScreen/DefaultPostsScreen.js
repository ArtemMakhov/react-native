import { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, StyleSheet,FlatList,Image} from 'react-native';

import { db } from '../../../firebase/config';
import { onSnapshot ,collection} from "firebase/firestore";

const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    onSnapshot(collection(db, 'posts'), (data) => setPosts(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    ))
  };

  useEffect(() => {
    getAllPosts();
  }, []);
 
  return (
    <View style={styles.container}>
      <FlatList data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginTop: 32 }}>
            <Image source={{ uri: item.photo }}
              style={{ marginHorizontal: 10, height: 200 }} />
            <Text style={styles.titlePhoto}>{item.title}</Text>
            <View style={{ alignItems: 'flex-end' }}>
              <FontAwesome5
                style={styles.commentsIcon}
                name="comment"
                size={24}
                color="#BDBDBD"
                onPress={() => navigation.navigate('Comments',{postId: item.id})}
              />
              <FontAwesome5
                style={styles.markerIcon}
                name="map-marker-alt"
                size={24}
                color="#BDBDBD"
                onPress={() => navigation.navigate('Map',{location: item.location})}
              />
              <Text style={styles.locationText}></Text>
            </View>
            
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  titlePhoto: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: "#212121",
    marginHorizontal: 16,
    marginTop: 8,
    alignItems: 'center',
  },
  locationText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: "#212121",
    marginHorizontal: 16,
    marginTop: 8,
  },
    markerIcon: {
    position: 'absolute',
    top:8,
    left: 150,
  },
  commentsIcon: {
    position: 'absolute',
    top: 8,
    left: 20,
    }
})

export default DefaultPostsScreen;