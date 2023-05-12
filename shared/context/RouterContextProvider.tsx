import type { ReactNode } from 'react';
import { createContext } from 'react';

import { usePreviousRoute } from 'shared/hooks';

interface RouterContextProps {
  previousRoute?: string | null;
}

export const RouterContext = createContext<RouterContextProps>({});

interface RouterContextProviderProps {
  children: ReactNode | ReactNode[];
}

export const RouterContextProvider = ({ children }: RouterContextProviderProps) => {
  const previousRoute = usePreviousRoute();

  return <RouterContext.Provider value={{ previousRoute }}>{children}</RouterContext.Provider>;
};
