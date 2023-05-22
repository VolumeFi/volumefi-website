import { useEffect } from 'react';

import { useRouter } from 'next/router';
import { StaticLink } from 'shared/configs/links';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (router.route === '/') {
      router.push(StaticLink.Events);
    }
  }, [router]);
}
