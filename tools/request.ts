import { isRejectedWithValue } from '@reduxjs/toolkit';

import type { MiddlewareAPI, Action } from '@reduxjs/toolkit';

const exceptionEndpoints = [];

const rtkQueryErrorHandler =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

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

const request = {
  rtkQueryErrorHandler,
};

export default request;
