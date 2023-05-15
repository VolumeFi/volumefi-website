import { volumeApi as api } from './';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    userControllerCreate: build.mutation<UserControllerCreateApiResponse, UserControllerCreateApiArg>({
      query: (queryArg) => ({ url: '/users/signup', method: 'POST', body: queryArg.createUserDto }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as volumeApi };
export type UserControllerCreateApiResponse = /** status 200  */ CreateUserSuccessResponseDto;
export type UserControllerCreateApiArg = {
  createUserDto: CreateUserDto;
};
export type CreateUserSuccessResponseDto = {
  success: boolean;
  message: string;
};
export type BadRequestResponseDto = {
  statusCode: number;
  message: string[];
  error: string;
};
export type CreateUserDto = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  jobTitle: string;
  businessSector: string;
  hearAboutUs: string;
};
export const { useUserControllerCreateMutation } = injectedRtkApi;
