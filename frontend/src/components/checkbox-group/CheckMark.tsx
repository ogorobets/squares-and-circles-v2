import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { CheckMarkProps } from './Interfaces';

const StyledSvg = styled.svg`
  position: relative;
  top: -10px;
`;

const CheckMark: FunctionComponent<CheckMarkProps> = ({ visible = false }) => {
  return (
    <StyledSvg
      width="34"
      height="39"
      viewBox="0 0 34 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ visibility: `${visible ? `visible` : `hidden`}` }}
    >
      <path
        d="M15.9126 38L1 22.7647L15.9126 28.9832L33 1L15.9126 38Z"
        fill="black"
        stroke="black"
      />
    </StyledSvg>
  );
};

export default CheckMark;
