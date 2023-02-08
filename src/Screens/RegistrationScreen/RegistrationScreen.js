import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
//
import { authSignUpUser } from '../../../redux/auth/authOperations';
import Loader from '../../Components/Loader';
import Toast from 'react-native-toast-message';
import { toastConfig } from '../../Components/Toast';
import { styles } from './StyledRegistrationScreen';

const bgImage = require('../../../assets/PhotoBG.jpg');
const addIcon = require('../../../assets/add.png');

const initialState = {
  nickname: '',
  email: '',
  password: '',
  avatar: null,
};

const RegistrationScreen = ({navigation}) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [state, setState] = useState(initialState);
  const { isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
       await ImagePicker.requestMediaLibraryPermissionsAsync();
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0];
      const uploadUrl = await uploadImageAsync(uri.uri)

      setState((prevState) => ({ ...prevState, avatar: uploadUrl }));
    }
  };

  //------TODO refactoring function----
  const uploadImageAsync = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log('e', e);
        reject(new TypeError('Network request failed'))
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    const fileRef = ref(getStorage(), Date.now().toString());
    await uploadBytes(fileRef, blob);

    blob.close();

    return await getDownloadURL(fileRef);
  };
  //--------------------
 

  const dispatch = useDispatch();

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
 
    dispatch(authSignUpUser(state))
    setState(initialState);
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  const handleOnFocus = () => {
    setIsShowKeyboard(true);
    setIsInputFocused(true);
  };

  const handleOnBlur = () => {
    setIsShowKeyboard(false);
    setIsInputFocused(false);
  };


  return isLoading
    ? (<Loader />)
    : (
    <ImageBackground source={bgImage} style={styles.image}>
      <Toast config={toastConfig}/>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={{
          ...styles.container,
          marginBottom: isShowKeyboard ? 60 : 0
        }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.formWrapper}>
              <View style={styles.avatar}>
                <TouchableOpacity style={styles.addIcon} onPress={pickImage}>
                <Image source={addIcon}/>
                </TouchableOpacity>
                 <Image source={{uri:state.avatar}} style={ styles.avatarImg} />
              </View>
              <Text style={styles.title}>Регистрация</Text>
              <View style={styles.form}>
                <TextInput
                  style={{
                    ...styles.input,
                    backgroundColor: isInputFocused ? "#ffffff" : "#F6F6F6",
                      borderColor: isInputFocused ? "#FF6C00" : "#E8E8E8",
                      color: "#212121",
                  }}
                  placeholder='Логин'
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  value={state.nickname}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, nickname: value }))}
                />
                <TextInput
                  style={{
                    ...styles.input,
                    backgroundColor: isInputFocused ? "#ffffff" : "#F6F6F6",
                      borderColor: isInputFocused ? "#FF6C00" : "#E8E8E8",
                      color: "#212121",
                  }}
                  placeholder='Адрес электронной почты'
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  value={state.email}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                />
                <TextInput
                  style={{
                    ...styles.input,
                    backgroundColor: isInputFocused ? "#ffffff" : "#F6F6F6",
                      borderColor: isInputFocused ? "#FF6C00" : "#E8E8E8",
                      color: "#212121",
                  }}
                  placeholder='Пароль'
                  secureTextEntry={passwordIsHidden ? true : false}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  value={state.password}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                />
                <TouchableOpacity
                  style={styles.showPassBtn}
                  onPress={() => {
                    setPasswordIsHidden(!passwordIsHidden);
                  }}
                  activeOpacity={0.8}
                >
                  <Text>{passwordIsHidden ? "Показать" : "Скрыть"}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.submitBtn}
                activeOpacity={0.8}
                onPress={handleSubmit}>
                <Text style={styles.submitBtnText}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.navBtn}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.navBtnText}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
 
  );
}

export default RegistrationScreen;