import classNames from 'classnames';
import style from 'components/Form/Form.module.scss';
import { TextInput } from 'components/TextInput';

import type { FormControlWrapperProps } from './types';
import type { TextInputType } from 'components/TextInput';

interface FormInputProps extends FormControlWrapperProps {
  type?: TextInputType;
}

export const FormInput = ({
  type = 'text',
  title,
  show = true,
  stacked,
  showErrors = false,
  error,
  className,
  value,
  onChange,
  required,
}: FormInputProps) => {
  if (!show) return null;

  return (
    <section className={classNames(style.container, className)}>
      <div className={classNames(style.inputWrapper, { [style.stacked]: stacked })}>
        {title && (
          <label className={style.title}>
            {title}
            {required && <span className={style.required}>*</span>}
          </label>
        )}
        <TextInput type={type as TextInputType} value={value} onChange={onChange} fullWidth />
      </div>
      {showErrors && <div className={style.error}>{error}</div>}
    </section>
  );
};
