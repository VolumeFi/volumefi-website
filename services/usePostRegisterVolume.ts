import { usePostRegisterClaimMutation } from 'services/api/palomaService';

import type { PostRegisterVolumeApiArg } from 'services/api/palomaService';

export type RegisterVolumeDTO = PostRegisterVolumeApiArg;

const usePostRegisterVolume = () => {
  const [registerVolume, { isLoading, data, error }] = usePostRegisterClaimMutation();

  const postRegisterVolume = async (payload: PostRegisterVolumeApiArg) => {
    return registerVolume(payload);
  };

  return {
    postRegisterVolume,
    isLoading,
    data,
    error,
  };
};

export default usePostRegisterVolume;
