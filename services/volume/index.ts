import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { envParams } from 'shared/configs/constants';
import requestTool from 'shared/tools/request';

import type { BaseQueryFn, FetchBaseQueryError, FetchArgs } from '@reduxjs/toolkit/query/react';

const rawBaseQuery = fetchBaseQuery({
  prepareHeaders: async (headers) => {
    return headers;
  },
});

const dynamicBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const baseUrl = envParams.apiVolumeService;
  const adjustedArgs = requestTool.buildAdjestedRequestUrl(baseUrl, args);
  return rawBaseQuery(adjustedArgs, api, extraOptions);
};

export const volumeApi = createApi({
  reducerPath: 'volumeApi',
  baseQuery: dynamicBaseQuery,
  endpoints: () => ({}),
});
