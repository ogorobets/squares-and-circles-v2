import React, { InputHTMLAttributes } from 'react';
import { MenuShapeColorShade } from 'constants/constants';

export interface IOption {
  label: string;
  disabled?: boolean;
  value: MenuShapeColorShade;
}

export interface IRadioBtntGroup {
  legend?: string;
  name: string;
  options: IOption[];
  hasFullWidth?: boolean;
  disabled?: boolean;
  onChange: (value: MenuShapeColorShade) => void;
}

export interface InputElementProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: boolean;
  disabled?: boolean;
}
