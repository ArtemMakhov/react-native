import { useState , useEffect} from 'react';
import { Text,View, StyleSheet,TextInput, TouchableOpacity,FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import { db } from '../../../firebase/config';
import { doc, collection, addDoc ,onSnapshot} from "firebase/firestore"; 


const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState(null);
  const { nickname } = useSelector((state) => state.auth);

  useEffect(() => {
    getAllPosts();
  },[])

  const createPost = async () => {
    const Ref = doc(db, 'posts', postId);
    await addDoc(collection(Ref, 'comments'), { comment, nickname });
  };

  const getAllPosts = async () => {
      const Ref = doc(db, 'posts', postId);
    await onSnapshot(collection(Ref, 'comments'),(data) => setAllComments(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
    ));
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        data={allComments}
        renderItem={({ item }) =>
          <View>
            <Text>{item.nickname} </Text>
            <Text>{item.comment} </Text>
          </View>}
        keyExtractor={(item, index) => item.id}
      />
      <View>
        <TextInput style={styles.input}
          placeholder='Comment'
          onChangeText={setComment}
        />
      </View>
      <TouchableOpacity
        style={styles.publicateBtn}
        activeOpacity={0.8}
        onPress={createPost}
      >
        <Text style={styles.publicateBtnText}>Опубликовать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    height: 50,
    color: "#BDBDBD",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginHorizontal: 16,
    padding: 15,
    marginBottom: 16,
  },
    publicateBtn: {
    backgroundColor: "#FF6C00",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    borderRadius: 100,
    marginTop: 20,
  },
  publicateBtnText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: "#ffffff",
  },
});

export default CommentsScreen;