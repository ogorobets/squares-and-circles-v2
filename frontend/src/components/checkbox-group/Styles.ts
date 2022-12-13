import React from 'react';
import styled, { css } from 'styled-components';
import {
  ShapeColor,
  ThemeColor,
  CheckboxGroupDirection
} from 'constants/constants';

export const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

// Hide checkbox visually but remain accessible to screen readers.
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{
  borderColor: ThemeColor;
  backgroundColor: ShapeColor | undefined;
}>`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 3px solid ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
`;

export const LabelText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  color: ${ThemeColor.CHECKBOX_LABEL};
  margin-left: 8px;
`;

export const CheckBoxGroupWrapper = styled.div<{
  direction: CheckboxGroupDirection;
}>`
  display: flex;
  ${({ direction }) => {
    switch (direction) {
      case CheckboxGroupDirection.HORIZONTAL:
        return css`
          flex-direction: row;
          gap: 32px;
        `;
      case CheckboxGroupDirection.VERTICAL:
        return css`
          flex-direction: column;
          gap: 19px;
          margin-bottom: 20px;
        `;
    }
  }}
`;
