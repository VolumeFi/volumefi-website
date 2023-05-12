import { api } from 'services';
import { envParam } from 'shared/configs/constants';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postRegisterClaim: build.mutation<PostRegisterVolumeResponse, PostRegisterVolumeApiArg>({
      query: (queryArg) => ({
        url: `${envParam.palomaNestServiceAPIBaseUrl}/registr-volume`,
        method: 'POST',
        body: queryArg,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type PostRegisterVolumeResponse = /** status 200 Success */ {
  code?: number;
  success?: boolean;
};
export type PostRegisterVolumeApiArg = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  jobTitle: string;
  builderSection: string;
  hearFrom: string;
};

export const { usePostRegisterClaimMutation } = injectedRtkApi;
