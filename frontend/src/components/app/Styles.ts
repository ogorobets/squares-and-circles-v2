import React from 'react';
import styled from 'styled-components';
import { ShapeColor, ShapeType } from 'constants/constants';

export const AppContainer = styled.div`
  text-align: center;
  height: 100%;
  overflow: hidden;
`;

export const AppTitle = styled.div`
  font-style: normal;
  font-weight: 100;
  font-size: 42px;
  line-height: 51px;
  color: #3e4797;
`;

export const ErrorWrapper = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
`;

export const ShapesWrapper = styled.div<{ columns: number }>`
  padding 80px 31px 60px 31px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${({ columns }) => `${`repeat(${columns}, 1fr)`}`};
  grid-auto-rows: 1fr;
  grid-column-gap: 22px;
  grid-row-gap: 26px;
`;

export const ShapeElement = styled.div<{
  backgroundColor: ShapeColor;
  shape: ShapeType;
}>`
  aspect-ratio: 1 / 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ shape }) => (shape === ShapeType.CIRCLE ? '50%' : null)};
`;

export const NoShapesTitle = styled.div`
  font-style: normal;
  font-weight: 100;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
  margin-top: 40px;
`;
