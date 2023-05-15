import { useUserControllerCreateMutation } from 'services/volume/api';

import type { CreateUserDto } from 'services/volume/api';

const usePostSignupVolume = () => {
  const [createUser, { isLoading, data, error }] = useUserControllerCreateMutation();

  const postCreateUser = async (user: CreateUserDto) => {
    return createUser({
      createUserDto: user,
    });
  };

  return {
    postCreateUser,
    isLoading,
    data,
    error,
  };
};

export default usePostSignupVolume;
