import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { InputElementProps } from './Interfaces';
import { Label, Radio } from './Styles';

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const RadioButton: FunctionComponent<InputElementProps> = ({
  label,
  id,
  disabled,
  ...rest
}) => {
  return (
    <Wrapper>
      <Radio id={id} type="radio" disabled={disabled} {...rest} />
      <Label htmlFor={id} disabled={disabled}>
        <span>{label}</span>
      </Label>
    </Wrapper>
  );
};

export default RadioButton;
