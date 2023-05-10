import { useEffect } from 'react';

import { StaticLink } from 'configs/links';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (router.route === '/') {
      router.push(StaticLink.About);
    }
  }, [router]);
}
