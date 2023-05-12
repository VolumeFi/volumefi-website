import type { ReactElement } from 'react';

export interface SelectOption {
  label: string | ReactElement | ReactElement[];
  value: string | number;
}
