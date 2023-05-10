import type { ReactElement } from 'react';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Button } from 'components/Button';
import style from 'ui/common/Panel.module.scss';
import SectionContainer from 'ui/common/SectionContainer';

interface PanelProps {
  title?: string | ReactElement | ReactElement[];
  text?: string | ReactElement | ReactElement[];
  buttonText?: string;
  onClick?: () => void;
  className?: string;
}

const Panel = ({ title, text, buttonText, onClick, className }: PanelProps) => (
  <SectionContainer>
    <section className={classNames(style.container, className)}>
      <div className={style.textWrapper}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
      </div>
      <Button variant="dark" className={style.join} onClick={onClick}>
        <span>{buttonText}</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </section>
  </SectionContainer>
);

export default Panel;
