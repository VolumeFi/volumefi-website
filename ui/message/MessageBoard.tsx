import { Button } from 'components/Button';
import { useRouter } from 'next/router';
import usePostSignupVolume from 'services/volume/usePostSignupVolume';
import { StaticLink } from 'shared/configs/links';
import { useSingleForm } from 'shared/hooks';
import style from 'ui/message/MessageBoard.module.scss';
import MessageForm from 'ui/message/MessageForm';

import type { FormikValues } from 'formik';
import type { CreateUserDto } from 'services/volume/api';

const MessageBoard = () => {
  const router = useRouter();

  const { formValues, showErrors, handleUpdateForm, handleValidateForm } = useSingleForm();
  const { postCreateUser, isLoading } = usePostSignupVolume();

  const handleSubmit = async () => {
    const couldSave = handleValidateForm();
    if (!couldSave) return;

    await postCreateUser(formValues as CreateUserDto);

    router.push(StaticLink.MessageSuccess);
  };

  return (
    <section className={style.container}>
      <MessageForm showErrors={showErrors} initialValues={{} as FormikValues} onUpdate={handleUpdateForm} />
      <Button variant="primary" className={style.submit} onClick={handleSubmit} disabled={isLoading} fullWidth>
        Submit
      </Button>
    </section>
  );
};

export default MessageBoard;
