import { useState, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import { Camera  } from 'expo-camera';
import * as Location from 'expo-location';


const CreatePostsScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState(null);
  const [country, setCountry] = useState(null);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    let location = await Location.getCurrentPositionAsync({});
    let address = await Location.reverseGeocodeAsync(location.coords);
    setLocation(address[0].region);
    setCountry(address[0].country);
    setPhoto(photo.uri);  
  };

    const handleOnFocus = () => {
    setIsShowKeyboard(true);
  };

  const sendPhoto = () => {
    navigation.navigate('DefaultScreen', { photo, title, location, country });
    setPhoto(null);
  }


  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={{
        ...styles.container,
        marginBottom: isShowKeyboard ? 80 : 0
      }}>
        <KeyboardAvoidingView>
          <Camera style={styles.camera} ref={setCamera}
          >
            {photo && <View style={styles.photoContainer}>
              <Image source={{ uri: photo }} style={{ height: 240, borderRadius: 10 }} />
            </View>}
            <TouchableOpacity style={styles.snapContainer} onPress={takePhoto}>
              <Entypo name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </Camera>
          <TouchableOpacity style={{ marginTop: 8, marginHorizontal: 16, marginBottom: 32 }}>
            <Text style={styles.loadPhotoBtn}>{!photo ? 'Загрузите фото' : 'Редактировать фото'}</Text>
          </TouchableOpacity>
          <View>
            <TextInput style={styles.input}
              placeholder='Название...'
              onFocus={handleOnFocus}
              value={title}
              onChangeText={setTitle}
            />
            <TextInput style={{ ...styles.input, paddingLeft: 30 }} placeholder='Местность...'
              value={location}
              onChangeText={setLocation}
            />
            <FontAwesome5 style={styles.markerIcon} name="map-marker-alt" size={24} color="#BDBDBD" />
          </View>
      
          <TouchableOpacity
            style={photo ? styles.publicateBtn : { ...styles.publicateBtn, backgroundColor: "#BDBDBD" }}
            disabled={photo ? false : true}
            activeOpacity={0.8}
            onPress={sendPhoto}
          >
            <Text style={styles.publicateBtnText}>Опубликовать</Text>
          </TouchableOpacity>
          <View style={styles.deleteContainer}>
            <AntDesign name="delete" size={24} color="#BDBDBD" />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    justifyContent : 'center'
  },
  camera: {
    backgroundColor: '#F6F6F6',
    height: 240,
    borderRadius: 10,
    marginTop: 32,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  snapContainer: {
    borderRadius: 50,
    backgroundColor: '#FFFFFF30',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    position: 'absolute',
    height: 240,
    width: 360,
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
  loadPhotoBtn: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: "#BDBDBD",
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
  markerIcon: {
    position: 'absolute',
    bottom: 25,
    left: 20,
  },
  deleteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#F6F6F6',
    marginHorizontal: 150,
    height: 40,
    borderRadius: 50,
    marginBottom: 10,
  }
});

export default CreatePostsScreen;