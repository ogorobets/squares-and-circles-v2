import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Legend } from './Styles';
import { IRadioBtntGroup, IOption } from './Interfaces';
import RadioButton from './RadioButton';

const Fieldset = styled.fieldset`
  border: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
`;

const RadioButtonGroup: FunctionComponent<IRadioBtntGroup> = ({
  legend,
  name,
  options,
  onChange: onChangeParam,
  disabled: groupDisabled
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeParam(Number(event.target.value));
  };

  function renderOptions() {
    return options.map(({ label, disabled, value }: IOption, index) => {
      const shortenedOptionLabel = label.replace(/\s+/g, '');
      const optionId = `radio-option-${shortenedOptionLabel}`;

      return (
        <RadioButton
          value={value}
          label={label}
          key={optionId}
          id={optionId}
          name={name}
          disabled={groupDisabled || disabled}
          defaultChecked={index === 0}
          onChange={onChange}
        />
      );
    });
  }
  return (
    <Fieldset>
      {legend ? <Legend>{legend}</Legend> : null}
      <Wrapper>{renderOptions()}</Wrapper>
    </Fieldset>
  );
};
export default RadioButtonGroup;
