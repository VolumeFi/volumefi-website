import type { RefObject } from 'react';
import { useEffect } from 'react';

/**
 * Hook that call action() outside of the passed ref
 */
export const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  action: () => void,
  exceptions: RefObject<unknown>[] = [],
) => {
  useEffect(() => {
    /**
     * on outside of element
     */
    const handleClickOutside = (event) => {
      for (const exception of exceptions) {
        if (exception.current === event.target) return;
      }

      if (ref.current && !ref.current.contains(event.target as Node)) {
        action();
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
