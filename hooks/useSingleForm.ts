/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState, useCallback } from 'react';

/**
 * Hook to sync formik related state to its parent component if the submit action happens in parent component
 * This hooks only suppose to track one single formik instance
 */
export const useSingleForm = () => {
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState<any>({});
  const [showErrors, setShowErrors] = useState(false);

  const handleUpdateForm = useCallback((values: any, errors: any) => {
    setFormValues(values);
    setFormErrors(errors);
  }, []);

  const handleValidateForm = () => {
    const hasError = (Object.keys(formErrors) as Array<string>).some((key) => !!formErrors[key]);

    if (hasError) {
      setShowErrors(true);
      return false;
    }

    return true;
  };

  return {
    formValues,
    setFormValues,
    formErrors,
    setFormErrors,
    showErrors,
    handleUpdateForm,
    handleValidateForm,
  };
};
