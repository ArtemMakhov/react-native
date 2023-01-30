import auth from '../../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut
} from "firebase/auth";
import { authSlice } from './authSlice';

const {authStateChange,updateUserProfile,authSignOut } = authSlice.actions;

export const authSignUpUser = ({ email, password, nickname }) => async (dispatch, getState) => {
   
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = await auth.currentUser;
  
    await updateProfile(user, { displayName: nickname });
  
    const { uid, displayName } = auth.currentUser;
  
    dispatch(authSlice.actions.updateUserProfile({
      userId: uid,
      nickname: displayName,
    }));
    
  } catch (error) {
    console.log('errorCode', error.code);
    console.log('errorMessage', error.message);
  }
};

export const authSignInUser = ({ email, password }) => async (dispatch, getState) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log('errorCode', error.code);
    console.log('errorMessage', error.message);
  }
};

export  const authSignOutUser = () => async (dispatch, getState) => {
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
      }
      
      dispatch(authStateChange({ stateChange: true }));
      dispatch(updateUserProfile(userUpdateProfile));
    }
  });
}