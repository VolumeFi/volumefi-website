import { configureStore } from '@reduxjs/toolkit';
import { api } from 'services';
import requestTool from 'shared/tools/request';
import commonReducer from 'stores/common';

const store = configureStore({
  reducer: {
    common: commonReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware, requestTool.rtkQueryErrorHandler),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
