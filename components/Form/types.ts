export interface FormControlWrapperProps {
  title?: string;
  show?: boolean;
  stacked?: boolean;
  className?: string;
  showErrors?: boolean;
  error?: string;
  value: string;
  onChange?: (value: string) => void;
  required?: boolean;
}
