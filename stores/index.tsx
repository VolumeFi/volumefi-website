import { configureStore } from '@reduxjs/toolkit';
import { volumeApi } from 'services/volume';
import requestTool from 'shared/tools/request';
import commonReducer from 'stores/common';

const store = configureStore({
  reducer: {
    common: commonReducer,
    [volumeApi.reducerPath]: volumeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(volumeApi.middleware, requestTool.rtkQueryErrorHandler),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
