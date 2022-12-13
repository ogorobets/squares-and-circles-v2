import React, { FunctionComponent } from 'react';
import { CheckboxType, ShapeColor, ThemeColor } from 'constants/constants';
import CheckMark from './CheckMark';
import { CheckboxProps } from './Interfaces';

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  LabelWrapper,
  LabelText
} from './Styles';

const Checkbox: FunctionComponent<CheckboxProps> = ({
  type = CheckboxType.TRANSPARENT,
  label,
  className = '',
  checked,
  value,
  onChange
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ checked: event.target.checked, value });
  };

  let backgroundColor;
  switch (type) {
    case CheckboxType.RED:
      backgroundColor = ShapeColor.LIGHT_RED;
      break;
    case CheckboxType.GREEN:
      backgroundColor = ShapeColor.LIGHT_GREEN;
      break;
    case CheckboxType.BLUE:
      backgroundColor = ShapeColor.LIGHT_BLUE;
      break;
    case CheckboxType.YELLOW:
      backgroundColor = ShapeColor.LIGHT_YELLOW;
      break;
  }

  let borderColor;
  switch (type) {
    case CheckboxType.RED:
    case CheckboxType.GREEN:
    case CheckboxType.BLUE:
    case CheckboxType.YELLOW:
      borderColor = ThemeColor.CHECKBOX_WITH_COLORED_BG_BORDER;
      break;
    default:
      borderColor = ThemeColor.CHECKBOX_BLANK_BG_BORDER;
      break;
  }

  return (
    <LabelWrapper>
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />
        <StyledCheckbox
          backgroundColor={backgroundColor}
          borderColor={borderColor}
        >
          <CheckMark visible={checked} />
        </StyledCheckbox>
      </CheckboxContainer>
      {label ? <LabelText>{label}</LabelText> : null}
    </LabelWrapper>
  );
};

export default Checkbox;
