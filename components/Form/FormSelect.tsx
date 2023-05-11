import classNames from 'classnames';
import style from 'components/Form/Form.module.scss';
import { Select } from 'components/Select';

import type { FormControlWrapperProps } from './types';
import type { SelectOption } from 'components/Select';

interface FormSelectProps extends FormControlWrapperProps {
  options?: SelectOption[];
}

export const FormSelect = ({
  options = [],
  title,
  show = true,
  stacked,
  showErrors = false,
  error,
  className,
  value,
  onChange,
  required,
}: FormSelectProps) => {
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
        <Select value={value} onChange={onChange} options={options} fullWidth />
      </div>
      {showErrors && <div className={style.error}>{error}</div>}
    </section>
  );
};
