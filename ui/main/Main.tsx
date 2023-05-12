import type { PropsWithChildren } from 'react';

import Head from 'next/head';
import Footer from 'ui/footer/Footer';
import Header from 'ui/header';
import style from 'ui/main/Main.module.scss';

const MainContainer = ({ children }: PropsWithChildren) => (
  <>
    <Head>
      <title>Volume</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Head>
    <main>
      <section className={style.container}>
        <Header />
        {children}
        <Footer />
      </section>
    </main>
  </>
);

export default MainContainer;
