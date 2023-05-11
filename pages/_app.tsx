import { HydrationProvider, Client } from 'react-hydration-provider';
import { Provider } from 'react-redux';
import { store } from 'stores';
import MainContainer from 'ui/main/Main';

import type { AppProps } from 'next/app';

import 'styles/index.scss';

const App = ({ Component, router, pageProps }: AppProps) =>
  typeof window !== 'undefined' ? (
    <HydrationProvider>
      <Client>
        <Provider store={store}>
          <MainContainer router={router}>
            <Component {...pageProps} />
          </MainContainer>
        </Provider>
      </Client>
    </HydrationProvider>
  ) : null;

export default App;
