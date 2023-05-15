/* eslint-disable @typescript-eslint/no-unused-vars */
import { isRejectedWithValue } from '@reduxjs/toolkit';

import type { MiddlewareAPI, Action } from '@reduxjs/toolkit';
import type { FetchArgs } from '@reduxjs/toolkit/dist/query';

const exceptionEndpoints = [];
const rtkQueryErrorHandler =
  ({ dispatch }: MiddlewareAPI) =>
  <T>(next: (action: Action<T>) => T) =>
  (action: Action) => {
    if (isRejectedWithValue(action)) {
      const arg = action.meta.arg as { endpointName?: string };
      if (exceptionEndpoints.every((name) => name !== arg?.endpointName)) {
        // TODO: handle different error code by using different message
      }
    }

    return next(action);
  };

const buildAdjestedRequestUrl = (baseUrl: string | undefined, args: string | FetchArgs) => {
  const urlEnd = typeof args === 'string' ? args : args.url;
  const adjustedUrl = `${baseUrl ?? ''}${urlEnd}`;
  const adjustedArgs = typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl };
  return adjustedArgs;
};
const request = {
  rtkQueryErrorHandler,
  buildAdjestedRequestUrl,
};

export default request;
