import auth from '../../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut
} from "firebase/auth";
import { authSlice } from './authSlice';
import { showToast } from '../../src/Components/Toast';
const {authStateChange,updateUserProfile,authSignOut,authIsLoading } = authSlice.actions;

export const authSignUpUser = ({ email, password, nickname,avatar}) => async (dispatch, getState) => {
   
  try {
   dispatch(authIsLoading({isLoading: true}))
    await createUserWithEmailAndPassword(auth, email, password, avatar);
    const user = await auth.currentUser;
  
    await updateProfile(user, { displayName: nickname, photoURL: avatar });
  
    const { uid, displayName , photoURL} = auth.currentUser;
  
    dispatch(authSlice.actions.updateUserProfile({
      userId: uid,
      nickname: displayName,
      avatar: photoURL,
    }));
    
  } catch (error) {
    dispatch(authIsLoading({ isLoading: false }));
    
    showToast('error', 'Error', `${error.code}`);
  }
};

export const authSignInUser = ({ email, password }) => async (dispatch, getState) => {
  try {
    dispatch(authIsLoading({isLoading: true}))
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    dispatch(authIsLoading({isLoading: false}))
    if (error.code === 'auth/invalid-email') {
      showToast('error', 'Error', 'Неверно указан email');
    } else if (error.code === 'auth/wrong-password') {
      showToast('error', 'Error', 'Неверный пароль');
    } else {
      showToast('error', 'Error', `${error.code}`);
    }
  }
};

export  const authSignOutUser = () => async (dispatch, getState) => {
  dispatch(authIsLoading({isLoading: true}))
  await signOut(auth);
  
  dispatch(authSignOut());
}

export  const authStateChangeUser = () => async (dispatch, getState) => {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUpdateProfile = {
        userId: user.uid,
        nickname: user.displayName,
        email: user.email,
        avatar: user.photoURL,
      };
      
      dispatch(authStateChange({ stateChange: true }));
      dispatch(updateUserProfile(userUpdateProfile));
      dispatch(authIsLoading({isLoading: false}))
    }
  });
}