import { useEffect } from 'react';

import { FormInput, FormSelect } from 'components/Form';
import { useFormik } from 'formik';
import { signupSchema } from 'shared/configs/schemas';
import { businessSectorOptions } from 'shared/configs/signup';
import style from 'ui/signup/SignupForm.module.scss';

export interface FormValue {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  email?: string;
  jobTitle?: string;
  businessSector?: string;
  hearFrom?: string;
}

interface SignupFormProps {
  showErrors: boolean;
  initialValues: FormValue;
  onUpdate: (values: FormValue, errors: object) => void;
}

const SignupForm = ({ showErrors, initialValues, onUpdate }: SignupFormProps) => {
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
          title="Company Name"
          value={formik.values.companyName ?? ''}
          error={formik.errors.companyName}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('companyName', val)}
        />
        <FormInput
          required
          stacked
          title="Email"
          value={formik.values.email ?? ''}
          error={formik.errors.email}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('email', val)}
        />
      </section>
      <section className={style.row}>
        <FormInput
          required
          stacked
          title="Job Title"
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
          options={businessSectorOptions}
          title="Business Sector"
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
          title="How did you hear about us?"
          value={formik.values.hearFrom ?? ''}
          error={formik.errors.hearFrom}
          showErrors={showErrors}
          onChange={async (val) => formik.setFieldValue('hearFrom', val)}
        />
      </section>
    </section>
  );
};

export default SignupForm;
