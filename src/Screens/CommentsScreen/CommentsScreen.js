import { useState , useEffect} from 'react';
import { Text,View,TextInput, TouchableOpacity,FlatList,Image} from 'react-native';
import { useSelector } from 'react-redux';
import { db } from '../../../firebase/config';
import { doc, collection, addDoc ,onSnapshot, getDoc } from "firebase/firestore"; 
import { AntDesign } from '@expo/vector-icons';
import { styles } from './StyledCommentsScreen';

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState(null);
  const [photo, setPhoto] = useState(null);
  const { nickname , avatar} = useSelector((state) => state.auth);

  useEffect(() => {
    getAllPosts();
    getPost();
  }, [])
  
  const addLeadingZero = (d) => {
    return (d < 10) ? '0' + d : d;
  }
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая',
    'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  
  const getTime = (time = new Date()) => {
    let day = addLeadingZero(time.getDate());
    let month = months[time.getMonth()];
    let year = time.getFullYear();
    let hour = addLeadingZero(time.getHours());
    let minutes = addLeadingZero(time.getMinutes());

    return `${day} ${month},${year} | ${hour}:${minutes}`;
  }

  const createPost = async () => {
    const time = getTime(new Date());
    const Ref = doc(db, 'posts', postId);
    await addDoc(collection(Ref, 'comments'), { comment, nickname, avatar, time });
  };

  const getAllPosts = async () => {
    const Ref = doc(db, 'posts', postId);
    await onSnapshot(collection(Ref, 'comments'), (data) =>
      setAllComments(data.docs.map((doc) =>
        ({ ...doc.data(), id: doc.id }))
      ));
  };

  const getPost = async () => {
    const docRef = doc(db, 'posts', postId);
    const docSnap = await getDoc(docRef);
  
    setPhoto(docSnap.data().photo);
  }
  
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 18 }}>
        <Image source={{ uri: photo }} style={styles.photo} />
      </View>
      <FlatList
        data={allComments}
        renderItem={({ item }) =>
          <View style={{ marginTop: 24 }}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />     
            <View style={styles.commentsContainer}>
              <Text style={styles.commentText}>{item.comment} </Text>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </View>
          </View>}
        keyExtractor={(item, index) => item.id}
      />
      <View>
        <TextInput style={styles.input}
          placeholder='Комментировать...'
          onChangeText={setComment}
        />
        <TouchableOpacity
          style={styles.publicateBtn}
          activeOpacity={0.8}
          onPress={createPost}
        >
          <AntDesign name="arrowup" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

    </View>
  );
};


export default CommentsScreen;