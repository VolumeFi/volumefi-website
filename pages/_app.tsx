import { AppProps } from 'next/app';
import MainContainer from 'ui/main/Main';

import 'styles/index.scss';

const App = ({ Component, router, pageProps }: AppProps) => (
  <MainContainer router={router}>
    <Component {...pageProps} />
  </MainContainer>
);

export default App;
