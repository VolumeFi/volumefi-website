import { useEffect } from 'react';

import { FormInput, FormSelect } from 'components/Form';
import { useFormik } from 'formik';
import { companySizeSectorOptions } from 'shared/configs/message';
import { signupSchema } from 'shared/configs/schemas';
import style from 'ui/message/MessageForm.module.scss';

export interface FormValue {
  firstName?: string;
  lastName?: string;
  companyName?: string; // telegramID
  email?: string;
  jobTitle?: string; // companyUrl
  businessSector?: string; // companySizeSector
  hearAboutUs?: string;
}

interface MessageFormProps {
  showErrors: boolean;
  initialValues: FormValue;
  onUpdate: (values: FormValue, errors: object) => void;
}

const MessageForm = ({ showErrors, initialValues, onUpdate }: MessageFormProps) => {
  const formik = useFormik({
    validationSchema: signupSchema,
    initialValues,
    validateOnMount: false,
    enableReinitialize: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: () => {},
  });

  useEffect(() => {
    formik.validateForm();
  }, []);

  useEffect(() => {
    onUpdate(formik.values, formik.errors);
  }, [formik.values, formik.errors, onUpdate]);

  return (
    <section className={style.container}>
      <section className={style.row}>
        <FormInput
          required
          stacked
          title="First Name"
          value={formik.values.firstName ?? ''}
          error={formik.errors.firstName}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('firstName', val)}
        />
        <FormInput
          required
          stacked
          title="Last Name"
          value={formik.values.lastName ?? ''}
          error={formik.errors.lastName}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('lastName', val)}
        />
      </section>
      <section className={style.row}>
        <FormInput
          required
          stacked
          title="Email"
          value={formik.values.email ?? ''}
          error={formik.errors.email}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('email', val)}
        />
        <FormInput
          required
          stacked
          title="Telegram ID"
          value={formik.values.companyName ?? ''}
          error={formik.errors.companyName}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('companyName', val)}
        />
      </section>
      <section className={style.row}>
        <FormInput
          required
          stacked
          title="Company URL"
          value={formik.values.jobTitle ?? ''}
          error={formik.errors.jobTitle}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('jobTitle', val)}
        />
      </section>
      <section className={style.row}>
        <FormSelect
          required
          stacked
          options={companySizeSectorOptions}
          title="Company Size"
          value={formik.values.businessSector ?? ''}
          error={formik.errors.businessSector}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('businessSector', val)}
        />
      </section>
      <section className={style.row}>
        <FormInput
          required
          stacked
          type="textarea"
          title="Tell us your new Bot idea here?"
          value={formik.values.hearAboutUs ?? ''}
          error={formik.errors.hearAboutUs}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('hearAboutUs', val)}
        />
      </section>
    </section>
  );
};

export default MessageForm;
