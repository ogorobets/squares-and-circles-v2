import React from 'react';
import {
  CheckboxGroupDirection,
  CheckboxType,
  MenuCheckboxShape
} from 'constants/constants';

export type ICheckedNValueOption = {
  checked: boolean;
  value: MenuCheckboxShape;
};
export interface IOption {
  type: CheckboxType;
  label: string;
  checked: boolean;
  value: MenuCheckboxShape;
}
export interface ICheckboxGroup {
  options: IOption[];
  disabled?: boolean;
  direction: CheckboxGroupDirection;
  onChange: (checkedValues: Array<MenuCheckboxShape>) => void;
}

export type CheckMarkProps = {
  visible: boolean;
};

export type CheckboxProps = {
  type: CheckboxType;
  checked: boolean;
  value: MenuCheckboxShape;
  label?: string;
  className?: string;
  disabled?: boolean;
  onChange: ({ checked, value }: ICheckedNValueOption) => void;
};
