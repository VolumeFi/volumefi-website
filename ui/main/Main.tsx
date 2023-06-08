import { DefaultSeo } from 'next-seo';
import type { PropsWithChildren } from 'react';

import Footer from 'ui/footer/Footer';
import Header from 'ui/header';
import style from 'ui/main/Main.module.scss';

const MainContainer = ({ children }: PropsWithChildren) => (
  <>
    <DefaultSeo
      title="Volume"
      description="Affordable Private Key Management Software for the Rest of Us"
      openGraph={{
        type: 'website',
        images: [
          {
            url: 'https://volume.finance/favicon.ico',
          },
        ],
      }}
    />
    <main>
      <section className={style.container}>
        <Header />
        <section className={style.pageContainer}>{children}</section>
        <Footer />
      </section>
    </main>
  </>
);

export default MainContainer;
