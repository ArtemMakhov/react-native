import { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './StyledLoginScreen';

const bgImage = require('../../assets/PhotoBG.jpg');

const initialState = {
  email: '',
  password: '',
};


const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [state, setState] = useState(initialState);
  

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  }

  const handleOnFocus = () => {
    setIsShowKeyboard(true);
    setIsInputFocused(true);
  };

  const handleOnBlur = () => {
    setIsShowKeyboard(false);
    setIsInputFocused(false);
  };

  return (
    <ImageBackground source={bgImage} style={styles.image}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={{
          ...styles.container,
          marginBottom: isShowKeyboard ? 40 : 0
        }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.formWrapper}>
              <Text style={styles.title}>Войти</Text>
              <View>
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
                  secureTextEntry={true}
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
                onPress={keyboardHide}>
                <Text style={styles.submitBtnText}>Войти</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navBtn} activeOpacity={0.8}>
                <Text style={styles.navBtnText}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
 
  );
}

export default LoginScreen;