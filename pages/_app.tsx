import '../app/styles/scss-old/global.scss';
import '../app/styles/scss/style.scss';

import AppLayout from 'app/components/layouts/App.layout';
import { AppThemeProvider } from 'app/contexts/Theme.context';
import { Provider } from 'react-redux';

import { store } from '../app/store';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AppThemeProvider>
    </Provider>
  )
}

export default MyApp
