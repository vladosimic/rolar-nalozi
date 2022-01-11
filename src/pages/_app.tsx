import { AppProps } from 'next/app';
import '@/styles/global.css';
import { Provider } from 'react-redux';
import { store } from '../features/store/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
