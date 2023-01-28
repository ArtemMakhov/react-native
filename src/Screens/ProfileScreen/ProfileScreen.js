import { async } from '@firebase/util';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button ,FlatList,Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { authSignOutUser} from '../../../redux/auth/authOperations';
import { db } from '../../../firebase/config';
import { collection, query, where ,onSnapshot} from "firebase/firestore";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState([]);
  const { userId } = useSelector((state) => state.auth);
  
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
    <View style={styles.container}>
      <Button title='signOut' onPress={signOut} style={{ marginBottom: 10 }} />
      <FlatList data={userPosts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginTop: 32 }}>
            <Image source={{ uri: item.photo }}
              style={{ width: 350, height: 200 }} />
          </View>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  }
});

export default ProfileScreen;