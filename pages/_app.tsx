// pages/_app.tsx
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store';
import { I18nextProvider } from 'react-i18next';
// import i18n from '../app/i18n';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>  
       {/* <I18nextProvider i18n={i18n}> */}
        <Component {...pageProps} />
      {/* </I18nextProvider>, */}
    </Provider>
  );
}

export default MyApp;
