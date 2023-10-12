import { useContext, useEffect } from 'react';

import { useRouter } from 'next/router';
import { StaticLink } from 'shared/configs/links';
import { RouterContext as routerContext } from 'shared/context';
import PalomaBotBanner from 'ui/common/banners/PalomaBotBanner';
import style from 'ui/message/Success.module.scss';

const Success = () => {
  const router = useRouter();
  const { previousRoute } = useContext(routerContext);

  useEffect(() => {
    if (!previousRoute?.includes(StaticLink.Message)) {
      router.push(StaticLink.Message);
    }
  }, [previousRoute, router]);

  return (
    <section className={style.container}>
      <section className={style.intro}>
        <h1 className={style.title}>Thank you for Contacting us</h1>
        <p className={style.sub}>We will review your request and contact you directly to schedule a meeting.</p>
      </section>
      <PalomaBotBanner className={style.banner} />
    </section>
  );
};

export default Success;
