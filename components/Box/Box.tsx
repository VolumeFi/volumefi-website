import { PropsWithChildren } from 'react';
import { DefaultComponentProps } from 'types';

import style from 'components/Box/Box.module.scss';
import classNames from 'classnames';

export const Box = ({ className, children }: PropsWithChildren<DefaultComponentProps>) => (
  <section className={classNames(style.container, className)}>{children}</section>
);
