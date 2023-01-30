import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text,FlatList,Image} from 'react-native';

import { db } from '../../../firebase/config';
import { onSnapshot, collection } from "firebase/firestore";

import { styles } from './StyledDefaultPostsScreen';

const DefaultPostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const { nickname, email } = useSelector((state) => state.auth);
  
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
      <View style={styles.wrapper}>
        <View style={styles.avatar}>
        </View>
        <View style={{marginTop: 32}}>
          <Text style={styles.text}>{nickname}</Text>
          <Text style={styles.text}>{email}</Text>
        </View>
      </View>

      <FlatList data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          
          <View style={{ marginTop: 32 }}>
                     
            <Image source={{ uri: item.photo }}
              style={styles.photo} />
            <Text style={styles.titlePhoto}>{item.title}</Text>
            <View style={{ alignItems: 'flex-end' }}>
              <FontAwesome5
                style={styles.commentsIcon}
                name="comment"
                size={24}
                color="#BDBDBD"
                onPress={() => navigation.navigate('Comments', { postId: item.id })}
              />
              <FontAwesome5
                style={styles.markerIcon}
                name="map-marker-alt"
                size={24}
                color="#BDBDBD"
                onPress={() => navigation.navigate('Map', { location: item.location })}
              />
              <Text style={styles.locationText}></Text>
            </View>
            
          </View>
        )}
      />
    </View>
  );
};


export default DefaultPostsScreen;