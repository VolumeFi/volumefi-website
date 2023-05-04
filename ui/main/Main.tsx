import { PropsWithChildren } from 'react';
import { Router } from 'next/router';

import Header from 'ui/header/Header';
import Footer from 'ui/footer/Footer';

import style from 'ui/main/Main.module.scss';

interface MainContainerProps {
  router: Router;
}

const MainContainer = ({ router, children }: PropsWithChildren<MainContainerProps>) => (
  <section className={style.container}>
    <Header />
    {children}
    <Footer />
  </section>
);

export default MainContainer;
