import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text,FlatList,Image} from 'react-native';
import Loader from '../../Components/Loader';
import { db } from '../../../firebase/config';
import { onSnapshot, collection } from "firebase/firestore";

import { styles } from './StyledDefaultPostsScreen';


const DefaultPostsScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const { nickname, email,avatar } = useSelector((state) => state.auth);
  
  const getAllPosts = async () => {
    setIsLoading(true);
   await onSnapshot(collection(db, 'posts'), (data) => setPosts(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
   ))
    setIsLoading(false);
  };

  useEffect(() => {
    getAllPosts();
  }, []);
 
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.avatar}>
          <Image source={{uri: avatar}} style={ styles.avatarImg} />
        </View>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.text}>{nickname}</Text>
          <Text style={styles.text}>{email}</Text>
        </View>
      </View>

      <FlatList data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          
          <View style={{ marginTop: 32 }}>
                     
            {!isLoading ? (<Image source={{ uri: item.photo }}
              style={styles.photo} />) : (<Loader/>)}
            <Text style={styles.titlePhoto}>{item.title}</Text>
            <View style={styles.iconsContainer}>
              <FontAwesome5
                style={styles.commentsIcon}
                name="comment"
                size={24}
                onPress={() => navigation.navigate('Comments', { postId: item.id })}
              />
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome5
                  style={styles.markerIcon}
                  name="map-marker-alt"
                  size={24}
                  onPress={() => navigation.navigate('Map', { location: item.location })}
                />
                <Text style={styles.locationText}>{item.region}, {item.country}</Text>
              </View>
            </View>
            
          </View>
        )}
      />
    </View>
  );
};


export default DefaultPostsScreen;