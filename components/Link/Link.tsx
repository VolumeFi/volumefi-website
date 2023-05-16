import type { MutableRefObject, PropsWithChildren } from 'react';

import classNames from 'classnames';
import style from 'components/Link/Link.module.scss';
import NextLink from 'next/link';

interface LinkProps {
  label?: string;
  href?: string;
  target?: string;
  className?: string;
  onClick?: () => void;
  forwardedRef?: MutableRefObject<HTMLDivElement | null>;
}

export const Link = ({
  label,
  href,
  target,
  className,
  onClick,
  children,
  forwardedRef,
}: PropsWithChildren<LinkProps>) => {
  const content = children ?? label;

  if (!href)
    return (
      <div
        className={classNames(style.container, className)}
        tabIndex={0}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onClick={(e) => onClick?.()}
        ref={forwardedRef}
      >
        {content}
      </div>
    );

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
