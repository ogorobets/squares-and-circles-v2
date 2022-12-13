import React from 'react';
import styled from 'styled-components';

export const MenuWrapper = styled.div<{ isShown: boolean }>`
  position: absolute;
  top: 40px;
  left: ${({ isShown }) => (isShown ? '-24px' : '-230px')};
  display: flex;
  flex-direction: column;
  padding: 40px 11px;
  width: 208px;
  background: rgba(217, 217, 217, 0.9);
  transition: ${({ isShown }) => (isShown ? 'left 0.5s ease' : null)};
`;

export const MenuNButtonContainer = styled.div`
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  padding: 6px;
  border: 3px solid #c8c7c7;
  border-radius: 0;
  width: 40px;
  height: 57px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputLabel = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
  margin-right: 16px;
`;
