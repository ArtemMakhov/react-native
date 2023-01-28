import { store } from './redux/store';
import { Provider} from 'react-redux';

import Main from './src/Components/Main';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

