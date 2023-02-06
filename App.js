import { store } from './redux/store';
import { Provider} from 'react-redux';

import Main from './src/Components/Main';
import Loader from "./src/Components/Loader";
export default function App() {
  return (
    
    <Provider store={store}>
      {/* <Loader/> */}
      <Main />
    </Provider>
  );
}





