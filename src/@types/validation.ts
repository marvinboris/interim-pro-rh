export type Validation = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  isEmail?: boolean;
  isNumeric?: boolean;
  confirm?: string;
};
