import { PropsWithChildren } from 'react';

import style from 'ui/common/SectionContainer.module.scss';
import classNames from 'classnames';

interface SectionContainerProps extends DefaultComponentProps {
  fullScreenWidth?: boolean;
}

const SectionContainer = ({ fullScreenWidth, className, children }: PropsWithChildren<SectionContainerProps>) => (
  <section
    className={classNames(style.container, className, {
      [style['w-max-full']]: !fullScreenWidth,
    })}
  >
    {children}
  </section>
);

export default SectionContainer;
