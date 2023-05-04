import { PropsWithChildren } from 'react';

import { ButtonType, ButtonVariantType } from 'components/Button';

import style from 'components/Button/Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  type?: ButtonType;
  variant?: ButtonVariantType;
  label?: string;
  href?: string;
  target?: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  type = 'button',
  variant = 'primary',
  label,
  className,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  const content = children ?? label;

  return (
    <button type={type} className={classNames(style.container, style[variant], className)} onClick={(e) => onClick?.()}>
      {content}
    </button>
  );
};
