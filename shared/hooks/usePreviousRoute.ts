import { useRef } from 'react';

import { useRouter } from 'next/router';

export const usePreviousRoute = () => {
  const router = useRouter();
  const ref = useRef<string | null>(null);

  router.events?.on('routeChangeStart', () => {
    ref.current = router.asPath;
  });

  return ref.current;
};
