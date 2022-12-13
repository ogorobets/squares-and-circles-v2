import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  CheckboxGroupDirection,
  CheckboxType,
  ShapeType,
  MenuCheckboxShape
} from 'constants/constants';
import CheckboxGroup from 'components/checkbox-group/CheckboxGroup';
import { setShapeTypes } from 'redux/actions/shapes';
import { Wrapper } from './Styles';
import LeftSideMenu from 'components/left-side-menu';

function TopMenu() {
  const shapesTypeList = useMemo(
    () => [
      {
        type: CheckboxType.TRANSPARENT,
        label: 'круги',
        checked: true,
        value: ShapeType.CIRCLE
      },
      {
        type: CheckboxType.TRANSPARENT,
        label: 'квадраты',
        checked: true,
        value: ShapeType.SQUARE
      }
    ],
    []
  );

  const dispatch = useDispatch();
  const handleCheckboxChange = (checkedValues: Array<MenuCheckboxShape>) => {
    dispatch(setShapeTypes(checkedValues as Array<ShapeType>));
  };

  return (
    <Wrapper>
      <LeftSideMenu />
      <CheckboxGroup
        options={shapesTypeList}
        onChange={handleCheckboxChange}
        direction={CheckboxGroupDirection.HORIZONTAL}
      />
    </Wrapper>
  );
}

export default TopMenu;
