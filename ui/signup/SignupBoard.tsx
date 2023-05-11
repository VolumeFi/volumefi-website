import { Button } from 'components/Button';
import { useSingleForm } from 'hooks';
import usePostRegisterVolume from 'services/usePostRegisterVolume';
import style from 'ui/signup/SignupBoard.module.scss';
import SignupForm from 'ui/signup/SignupForm';

import type { FormikValues } from 'formik';
import type { RegisterVolumeDTO } from 'services';

const SignupBoard = () => {
  const { formValues, showErrors, handleUpdateForm, handleValidateForm } = useSingleForm();
  const { postRegisterVolume, isLoading } = usePostRegisterVolume();

  const handleSubmit = async () => {
    const couldSave = handleValidateForm();
    if (!couldSave) return;

    postRegisterVolume(formValues as RegisterVolumeDTO);
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
