import { resolve } from 'path';

import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: resolve(__dirname, './volumeSwagger.json'),
  apiFile: '../services/volume',
  apiImport: 'volumeApi',
  outputFile: '../services/volume/api.ts',
  exportName: 'volumeApi',
  hooks: { queries: true, lazyQueries: true, mutations: true },
};

export default config;
