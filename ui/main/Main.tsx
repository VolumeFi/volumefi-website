import type { PropsWithChildren } from 'react';

import Footer from 'ui/footer/Footer';
import Header from 'ui/header/Header';
import style from 'ui/main/Main.module.scss';

import type { Router } from 'next/router';

interface MainContainerProps {
  router: Router;
}

const MainContainer = ({ children }: PropsWithChildren<MainContainerProps>) => (
  <section className={style.container}>
    <Header />
    {children}
    <Footer />
  </section>
);

export default MainContainer;
