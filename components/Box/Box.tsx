import type { PropsWithChildren } from 'react';

import classNames from 'classnames';
import style from 'components/Box/Box.module.scss';

import type { BoxType, ColorType } from 'components/Box/types';

interface BoxProps extends DefaultComponentProps {
  fill?: BoxType;
  color?: ColorType;
}

export const Box = ({ className, children, fill = 'solid', color = 'dark' }: PropsWithChildren<BoxProps>) => (
  <section className={classNames(style.container, className, style[fill], style[color])}>{children}</section>
);
