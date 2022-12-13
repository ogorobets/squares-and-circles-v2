import React, { FunctionComponent, useState, useLayoutEffect } from 'react';
import { ICheckboxGroup, ICheckedNValueOption, IOption } from './Interfaces';
import { MenuCheckboxShape } from 'constants/constants';
import Checkbox from './Checkbox';
import { CheckBoxGroupWrapper } from './Styles';

const CheckboxGroup: FunctionComponent<ICheckboxGroup> = ({
  options,
  direction,
  onChange,
  disabled
}) => {
  const [checkedValues, setCheckedValues] = useState<Array<MenuCheckboxShape>>(
    []
  );
  const [checkNValueOptions, setCheckNValueOptions] = useState<
    Array<ICheckedNValueOption>
  >([]);

  useLayoutEffect(() => {
    const checkedOptions = options.filter((option) => {
      return option.checked;
    });
    const checkedValues = checkedOptions.map((option) => {
      return option.value;
    });
    setCheckedValues(checkedValues);

    const nextCheckNValueOptions = options.map((option) => {
      return { value: option.value, checked: option.checked };
    });
    setCheckNValueOptions(nextCheckNValueOptions);
  }, [options]);

  const handleCheckboxChange = ({ value, checked }: ICheckedNValueOption) => {
    let nextCheckedValues = [];
    if (checked) {
      nextCheckedValues = [...checkedValues, value];
      setCheckedValues(nextCheckedValues);
    } else {
      nextCheckedValues = checkedValues.filter((currValue) => {
        return currValue !== value;
      });
      setCheckedValues(nextCheckedValues);
    }
    const nextCheckNValueOptions = checkNValueOptions.map((option) => {
      if (option.value === value) {
        return { checked, value };
      }
      return option;
    });
    setCheckNValueOptions(nextCheckNValueOptions);

    onChange(nextCheckedValues);
  };

  function renderOptions() {
    return options.map(
      ({ type, label, value, checked: initOptionChecked }: IOption) => {
        let checked = initOptionChecked;
        const checkNValueOption = checkNValueOptions.find((option) => {
          return option.value === value;
        });
        if (checkNValueOption) {
          checked = checkNValueOption.checked;
        }

        return (
          <Checkbox
            key={value}
            type={type}
            label={label}
            checked={checked}
            disabled={disabled}
            value={value}
            onChange={handleCheckboxChange}
          />
        );
      }
    );
  }
  return (
    <CheckBoxGroupWrapper direction={direction}>
      {renderOptions()}
    </CheckBoxGroupWrapper>
  );
};
export default CheckboxGroup;
