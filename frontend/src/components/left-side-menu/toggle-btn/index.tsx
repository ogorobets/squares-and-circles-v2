import React, { FunctionComponent } from 'react';
import { Row, RowWrapper } from './Styles';

type ToggleBtnClick = {
  onClick: () => void;
};

const ToggleBtn: FunctionComponent<ToggleBtnClick> = ({ onClick }) => {
  return (
    <RowWrapper onClick={onClick}>
      <Row />
      <Row />
      <Row />
    </RowWrapper>
  );
};

export default ToggleBtn;
