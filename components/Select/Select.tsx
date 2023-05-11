/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import style from 'components/Select/Select.module.scss';
import { useOutsideAlerter } from 'hooks';

import type { SelectOption } from 'components/Select/types';

interface SelectProps {
  placeholder?: string;
  value: string | number;
  options: SelectOption[];
  disabled?: boolean;
  fullWidth?: boolean;
  onChange?: (value: string | number) => void;
  className?: string;
}

export const Select = ({
  placeholder = 'Please Select',
  value,
  options,
  disabled,
  fullWidth,
  onChange,
  className,
}: SelectProps) => {
  const ref = useRef(null);
  const [showOptions, setShowOptions] = useState(false);

  useOutsideAlerter(ref, () => {
    setShowOptions(false);
  });

  const selectedOption = options.find((option) => option.value === value);

  const handleToggleOption = () => {
    if (disabled) return;
    setShowOptions(!showOptions);
  };
  const handleSelectItem = (val: string | number) => {
    if (disabled) return;

    setShowOptions(false);
    onChange?.(val);
  };

  return (
    <div
      className={classNames(style.container, className, { [style.fullWidth]: fullWidth, [style.disabled]: disabled })}
      tabIndex={0}
      ref={ref}
    >
      <div
        className={classNames(style.selectedValueArea, { [style.expanded]: showOptions })}
        onClick={(e) => handleToggleOption()}
      >
        <span className={classNames(style.label, { [style.placeholder]: !selectedOption || showOptions })}>
          {selectedOption && !showOptions ? selectedOption.label : placeholder}
        </span>
        {!showOptions && <FontAwesomeIcon icon={faChevronDown} />}
      </div>
      {showOptions && (
        <div className={style.options}>
          {options.map((item) => (
            <div
              className={style.option}
              tabIndex={0}
              onClick={(e) => handleSelectItem(item.value)}
              key={`option-${item.value}`}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
