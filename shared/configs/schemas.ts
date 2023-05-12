import * as yup from 'yup';

const requiredFirstNameSchema = yup.string().required('First name is required');
const requiredLastNameSchema = yup.string().required('Last name is required');
const requiredCompanySchema = yup.string().required('Company name is required');
const requiredEmailSchema = yup.string().email('Invalid Email address').required('Email is required');
const requiredJobTitleSchema = yup.string().required('Job title is required');
const requiredBusinesSector = yup.string().required('Business sector is required');
const requiredHearFrom = yup.string().required('How did you hear about us?');

export const signupSchema = () =>
  yup.object().shape({
    firstName: requiredFirstNameSchema,
    lastName: requiredLastNameSchema,
    companyName: requiredCompanySchema,
    email: requiredEmailSchema,
    jobTitle: requiredJobTitleSchema,
    businessSector: requiredBusinesSector,
    hearFrom: requiredHearFrom,
  });
