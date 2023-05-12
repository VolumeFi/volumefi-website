import classNames from 'classnames';
import style from 'components/TextInput/TextInput.module.scss';

import type { TextInputType } from 'components/TextInput/types';

interface TextInputProps {
  type?: TextInputType;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  rows?: number;
  onChange?: (value: string) => void;
  className?: string;
}

export const TextInput = ({
  type = 'text',
  value,
  placeholder,
  disabled,
  fullWidth,
  rows = 5,
  onChange,
  className,
}: TextInputProps) =>
  type === 'textarea' ? (
    <textarea
      placeholder={placeholder}
      disabled={disabled}
      className={classNames(style.input, style.textarea, className, { [style.fullWidth]: fullWidth })}
      onChange={(e) => onChange?.(e.target.value)}
      rows={rows}
      defaultValue={value}
    />
  ) : (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      className={classNames(style.input, className, { [style.fullWidth]: fullWidth })}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
