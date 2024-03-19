// pages/_app.tsx
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { LanguageProvider } from './LanguageProvider'; // Adjust the path as per your project structure
import firebaseConfig from './firebaseConfig'; // Adjust the path as per your project structure
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import store from '../store';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>  
       <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>,
    </Provider>
  );
}

export default MyApp;
