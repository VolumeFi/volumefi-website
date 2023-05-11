import type { PropsWithChildren } from 'react';

import classNames from 'classnames';
import style from 'components/Button/Button.module.scss';

import type { ButtonType, ButtonVariantType } from 'components/Button';

interface ButtonProps {
  type?: ButtonType;
  variant?: ButtonVariantType;
  label?: string;
  href?: string;
  target?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  type = 'button',
  variant = 'primary',
  label,
  className,
  onClick,
  children,
  disabled,
  fullWidth,
}: PropsWithChildren<ButtonProps>) => {
  const content = children ?? label;

  return (
    <button
      type={type}
      className={classNames(style.container, style[variant], className, { [style.fullWidth]: fullWidth })}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onClick={(e) => onClick?.()}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
