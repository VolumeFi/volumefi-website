import { configureStore } from '@reduxjs/toolkit';
import { api } from 'services';
import commonReducer from 'stores/common';
import requestTool from 'tools/request';

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
