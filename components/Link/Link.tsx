import type { PropsWithChildren } from 'react';

import classNames from 'classnames';
import style from 'components/Link/Link.module.scss';
import NextLink from 'next/link';

interface LinkProps {
  label?: string;
  href?: string;
  target?: string;
  className?: string;
}

export const Link = ({ label, href, target, className, children }: PropsWithChildren<LinkProps>) => {
  const content = children ?? label;

  if (!href) return null;

  return target ? (
    <a href={href} target={target} className={classNames(style.container, className)}>
      {content}
    </a>
  ) : (
    <NextLink href={href}>
      <section className={classNames(style.container, className)}>{content}</section>
    </NextLink>
  );
};
