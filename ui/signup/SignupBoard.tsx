import { Button } from 'components/Button';
import { useRouter } from 'next/router';
import usePostRegisterVolume from 'services/usePostRegisterVolume';
import { StaticLink } from 'shared/configs/links';
import { useSingleForm } from 'shared/hooks';
import style from 'ui/signup/SignupBoard.module.scss';
import SignupForm from 'ui/signup/SignupForm';

import type { FormikValues } from 'formik';
import type { RegisterVolumeDTO } from 'services';

const SignupBoard = () => {
  const router = useRouter();

  const { formValues, showErrors, handleUpdateForm, handleValidateForm } = useSingleForm();
  const { postRegisterVolume, isLoading } = usePostRegisterVolume();

  const handleSubmit = async () => {
    const couldSave = handleValidateForm();
    if (!couldSave) return;

    // postRegisterVolume(formValues as RegisterVolumeDTO);
    router.push(StaticLink.SignupSuccess);
  };

  return (
    <section className={style.container}>
      <SignupForm showErrors={showErrors} initialValues={{} as FormikValues} onUpdate={handleUpdateForm} />
      <Button variant="primary" className={style.submit} onClick={handleSubmit} disabled={isLoading} fullWidth>
        Join the Waitlist
      </Button>
    </section>
  );
};

export default SignupBoard;
