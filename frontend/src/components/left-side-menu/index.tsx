import React, { FunctionComponent, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CheckboxGroupDirection,
  CheckboxType,
  MenuShapeColor,
  MenuShapeColorShade,
  MenuCheckboxShape
} from 'constants/constants';
import RadioButtonGroup from 'components/radio-button-group/RadioButtonGroup';
import CheckboxGroup from 'components/checkbox-group/CheckboxGroup';
import { setColors, setColorShade, setColumns } from 'redux/actions/shapes';
import {
  MenuWrapper,
  MenuNButtonContainer,
  Input,
  InputWrapper,
  InputLabel
} from './Styles';
import ToggleBtn from './toggle-btn';
import { RootState } from 'redux/reducers';

const LeftSideMenu: FunctionComponent = () => {
  const shapesColorShadeList = useMemo(
    () => [
      {
        label: 'все',
        value: MenuShapeColorShade.ALL
      },
      {
        label: 'темные',
        value: MenuShapeColorShade.DARK
      },
      {
        label: 'светлые',
        value: MenuShapeColorShade.LIGHT
      }
    ],
    []
  );

  const shapesColorList = useMemo(
    () => [
      {
        type: CheckboxType.RED,
        label: 'красные',
        checked: true,
        value: MenuShapeColor.RED
      },
      {
        type: CheckboxType.GREEN,
        label: 'зеленые',
        checked: true,
        value: MenuShapeColor.GREEN
      },
      {
        type: CheckboxType.BLUE,
        label: 'синие',
        checked: true,
        value: MenuShapeColor.BLUE
      },
      {
        type: CheckboxType.YELLOW,
        label: 'желтые',
        checked: true,
        value: MenuShapeColor.YELLOW
      }
    ],
    []
  );

  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.shapes.columns);
  const [isShown, setIsShown] = useState(false);
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    setInputVal(columns.toString());
  }, [columns]);

  const handleCheckboxChange = (checkedValues: Array<MenuCheckboxShape>) => {
    dispatch(setColors(checkedValues as Array<MenuShapeColor>));
  };

  const handleColorChadeChange = (value: MenuShapeColorShade) => {
    dispatch(setColorShade(value));
  };

  const onToggleBtnClick = () => {
    setIsShown(!isShown);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value)) && value !== '') {
      dispatch(setColumns(Number(value)));
    }
    setInputVal(value);
  };

  return (
    <MenuNButtonContainer>
      <ToggleBtn onClick={onToggleBtnClick} />
      <MenuWrapper isShown={isShown}>
        <CheckboxGroup
          options={shapesColorList}
          onChange={handleCheckboxChange}
          direction={CheckboxGroupDirection.VERTICAL}
        />
        <RadioButtonGroup
          options={shapesColorShadeList}
          name="shapes-сolor-shade-list"
          onChange={handleColorChadeChange}
        />
        <InputWrapper>
          <InputLabel>колонок</InputLabel>
          <Input onChange={handleInputChange} value={inputVal} type="text" />
        </InputWrapper>
      </MenuWrapper>
    </MenuNButtonContainer>
  );
};

export default LeftSideMenu;
