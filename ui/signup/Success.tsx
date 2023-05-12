import { useContext, useEffect } from 'react';

import { useRouter } from 'next/router';
import { StaticLink } from 'shared/configs/links';
import { RouterContext as routerContext } from 'shared/context';
import PalomaBot from 'ui/common/banners/PalomaBot';
import style from 'ui/signup/Success.module.scss';

const Success = () => {
  const router = useRouter();
  const { previousRoute } = useContext(routerContext);

  useEffect(() => {
    if (!previousRoute?.includes(StaticLink.Signup)) {
      router.push(StaticLink.Signup);
    }
  }, [previousRoute, router]);

  return (
    <section className={style.container}>
      <section className={style.intro}>
        <h1 className={style.title}>Thank you for signing up!</h1>
        <p className={style.sub}>You&apos;ll be notified when we open for subscriptions.</p>
      </section>
      <PalomaBot className={style.banner} />
    </section>
  );
};

export default Success;
