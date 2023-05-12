import { HydrationProvider, Client } from 'react-hydration-provider';
import { Provider } from 'react-redux';
import { RouterContextProvider } from 'shared/context';
import { store } from 'stores';
import MainContainer from 'ui/main/Main';

import type { AppProps } from 'next/app';

import 'styles/index.scss';

const App = ({ Component, pageProps }: AppProps) =>
  typeof window !== 'undefined' ? (
    <HydrationProvider>
      <Client>
        <RouterContextProvider>
          <Provider store={store}>
            <MainContainer>
              <Component {...pageProps} />
            </MainContainer>
          </Provider>
        </RouterContextProvider>
      </Client>
    </HydrationProvider>
  ) : null;

export default App;
