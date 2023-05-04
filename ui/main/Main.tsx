import { PropsWithChildren } from 'react';
import { Router } from 'next/router';

import Header from 'ui/header/Header';

import style from 'ui/main/Main.module.scss';

interface MainContainerProps {
  router: Router;
}

const MainContainer = ({ router, children }: PropsWithChildren<MainContainerProps>) => (
  <section className={style.container}>
    <Header />
    {children}
  </section>
);

export default MainContainer;
