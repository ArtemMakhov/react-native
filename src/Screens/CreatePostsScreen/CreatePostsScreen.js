import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import { storage ,db} from '../../../firebase/config';
import {
  ref,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';
import { collection, addDoc } from "firebase/firestore"; 
import { styles } from './StyledCreatePostsScreen';

const CreatePostsScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, setPermission] = Camera.useCameraPermissions();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [country, setCountry] = useState(null);
  const cameraRef = useRef(null);

  const { userId, nickname} = useSelector((state) => state.auth);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  useEffect(() => {
    (async () => {

      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      let { status } = await Location.requestForegroundPermissionsAsync();
        
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
      
      let location = await Location.getCurrentPositionAsync({});
      let address = await Location.reverseGeocodeAsync(location.coords);

      setRegion(address[0].region);
      setCountry(address[0].country);
      setLocation(location);
    })();
  }, []);
  
  const takePhoto = async () => { 
    if (cameraRef) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        setPhoto(uri);
      } catch (e) {
        console.log('error', e)
      }
    }
  };

    const handleOnFocus = () => {
    setIsShowKeyboard(true);
  };

  const sendPhoto = () => {
    uploadPostToServer();
    navigation.navigate('DefaultScreen');
  };

  const uploadPostToServer = async () => {
    const photo = await uploadPhotoToServer()
    await addDoc(collection(db, 'posts'),
      {
        photo,
        title,
        location: location.coords,
        region,
        country,
        userId,
        nickname
      }); 
    setTitle('');
  };

  const uploadPhotoToServer = async () => {
    const response = await fetch(photo);
    const file = await response.blob();

    const uniquePostId = Date.now().toString();

    const storageRef = await ref(storage, `postImage/${uniquePostId}`);

    await uploadBytes(storageRef, file);
    const processedPhoto = await getDownloadURL(storageRef, file);
    
    return processedPhoto;
   ;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={{
        ...styles.container,
        marginBottom: isShowKeyboard ? 80 : 0
      }}>
        <KeyboardAvoidingView>
          <Camera
            style={styles.camera}
            type={type}
            ref={cameraRef}
          >
            {photo && <View style={styles.photoContainer}>
              <Image source={{ uri: photo }} style={{ height: 240, borderRadius: 10 }} />
            </View>}
            <TouchableOpacity style={styles.snapContainer} onPress={takePhoto}>
              <Entypo name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </Camera>
          <TouchableOpacity style={{ marginTop: 8, marginHorizontal: 16, marginBottom: 32 }}>
            <Text style={styles.loadPhotoBtn}>{!photo ? '?????????????????? ????????' : '?????????????????????????? ????????'}</Text>
          </TouchableOpacity>
          <View>
            <TextInput style={styles.input}
              placeholder='????????????????...'
              onFocus={handleOnFocus}
              value={title}
              onChangeText={setTitle}
            />
            <TextInput style={{ ...styles.input, paddingLeft: 30 }} placeholder='??????????????????...'
              value={region}
              onChangeText={setRegion}
            />
            <FontAwesome5 style={styles.markerIcon} name="map-marker-alt" size={24} color="#BDBDBD" />
          </View>
      
          <TouchableOpacity
            style={photo ? styles.publicateBtn : { ...styles.publicateBtn, backgroundColor: "#BDBDBD" }}
            disabled={photo ? false : true}
            activeOpacity={0.8}
            onPress={sendPhoto}
          >
            <Text style={styles.publicateBtnText}>????????????????????????</Text>
          </TouchableOpacity>
          <View style={styles.deleteContainer}>
            <AntDesign name="delete" size={24} color="#BDBDBD" />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};


export default CreatePostsScreen;