import type { PropsWithChildren } from 'react';

import Head from 'next/head';
import Footer from 'ui/footer/Footer';
import Header from 'ui/header';
import style from 'ui/main/Main.module.scss';
import { useEffect } from 'react';
import Mixpanel from 'mixpanel';
import { envParams } from 'shared/configs/constants';

require('dotenv').config();

const MainContainer = ({ children }: PropsWithChildren) => {
  const mixpanel = Mixpanel.init(envParams.mixPanelApiKey);

  useEffect(() => {
    let result = mixpanel.track('PAGE_LOAD', { Page: window.location.href });
  }, []);

  return (
    <>
      <Head>
        <title>Volume</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <main>
        <section className={style.container}>
          <Header />
          <section className={style.pageContainer}>{children}</section>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default MainContainer;
