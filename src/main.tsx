import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { store } from './redux/store.ts';

import '@shared/styles/global.scss';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
