import Home from './src/Screens/Home';
import Auth from './src/Screens/Auth';

export const useRoute = (isAuth) => {
  
  if (!isAuth) {
    return <Auth/>
  }
  return <Home/>
};