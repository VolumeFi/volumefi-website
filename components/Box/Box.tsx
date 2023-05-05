import type { PropsWithChildren } from 'react';

import classNames from 'classnames';
import style from 'components/Box/Box.module.scss';

export const Box = ({ className, children }: PropsWithChildren<DefaultComponentProps>) => (
  <section className={classNames(style.container, className)}>{children}</section>
);
