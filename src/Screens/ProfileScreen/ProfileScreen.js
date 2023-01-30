import { useEffect, useState } from 'react';
import { View,Text ,FlatList,Image, ImageBackground} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { authSignOutUser} from '../../../redux/auth/authOperations';
import { db } from '../../../firebase/config';
import { collection, query, where ,onSnapshot} from "firebase/firestore";
import { FontAwesome5, AntDesign, Feather } from '@expo/vector-icons';
import { styles } from './StyledProfileScreen';

const bgImage = require('../../../assets/PhotoBG.jpg');

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState([]);
  const { userId, nickname } = useSelector((state) => state.auth);
  
  const getUserPosts = async () => {
    const postsRef = collection(db, 'posts');

    const q = await query(postsRef, where('userId', '==', userId));
    
    await onSnapshot(q, (data) =>
      setUserPosts(data.docs.map((doc) => ({ ...doc.data() }))
      ));
  };

  useEffect(() => {
    getUserPosts();
  }, []);


 
  const signOut = () => {
    dispatch(authSignOutUser());
  }

  return (
    <ImageBackground source={bgImage} style={styles.bgImage}>
      <View style={styles.formWrapper}>
        <Feather
          name='log-out'
          size={24}
          style={styles.logoutIcon}
          onPress={signOut}
        />
        <View style={styles.avatar}>
        </View>
        <Text style={styles.name}>{nickname}</Text>
        <FlatList data={userPosts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View >
              <Image source={{ uri: item.photo }}
                style={styles.photo} />
              <Text style={styles.titlePhoto}>{item.title}</Text>
              <View style={{ alignItems: 'flex-end', marginBottom: 32 }}>
                <FontAwesome5
                  style={styles.commentsIcon}
                  name="comment"
                  size={24}
                  onPress={() => navigation.navigate('Comments', { postId: item.id })}
                />
                <AntDesign
                  style={styles.likeIcon}
                  name="like2"
                  size={24}
                  />
                <FontAwesome5
                  style={styles.markerIcon}
                  name="map-marker-alt"
                  size={24}
                  onPress={() => navigation.navigate('Map', { location: item.location })}
                />
                <Text style={styles.locationText}></Text>
              </View>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  )
};


export default ProfileScreen;