import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { ShapeType, ShapeColor } from 'constants/constants';
import {
  ShapesWrapper,
  ShapeElement,
  NoShapesTitle
} from 'components/app/Styles';
import { RootState } from 'redux/reducers';

function ShapesContainer() {
  const shapesDisplayed = useSelector(
    (state: RootState) => state.shapes.shapesDisplayed
  );
  const columns = useSelector((state: RootState) => state.shapes.columns);

  const isDisplayShapes = useMemo(() => {
    return shapesDisplayed && shapesDisplayed.length > 0;
  }, [shapesDisplayed]);

  return (
    <Scrollbars style={{ width: '100%', height: 'calc(100% - 147px)' }}>
      {isDisplayShapes ? (
        <ShapesWrapper columns={columns}>
          {shapesDisplayed.map((shape, index) => {
            let shapeType;
            switch (shape.form) {
              case 'circle':
                shapeType = ShapeType.CIRCLE;
                break;
              default:
                shapeType = ShapeType.SQUARE;
            }

            let shapeBgColor;
            switch (shape.color) {
              case 'red':
                if (shape.dark) {
                  shapeBgColor = ShapeColor.DARK_RED;
                } else {
                  shapeBgColor = ShapeColor.LIGHT_RED;
                }
                break;
              case 'green':
                if (shape.dark) {
                  shapeBgColor = ShapeColor.DARK_GREEN;
                } else {
                  shapeBgColor = ShapeColor.LIGHT_GREEN;
                }
                break;
              case 'blue':
                if (shape.dark) {
                  shapeBgColor = ShapeColor.DARK_BLUE;
                } else {
                  shapeBgColor = ShapeColor.LIGHT_BLUE;
                }
                break;
              default:
                if (shape.dark) {
                  shapeBgColor = ShapeColor.DARK_YELLOW;
                } else {
                  shapeBgColor = ShapeColor.LIGHT_YELLOW;
                }
            }

            return (
              <ShapeElement
                key={index}
                backgroundColor={shapeBgColor}
                shape={shapeType}
              />
            );
          })}
        </ShapesWrapper>
      ) : (
        <NoShapesTitle>
          Нет фигур соответствующих выбранным фильтрам
        </NoShapesTitle>
      )}
    </Scrollbars>
  );
}

export default ShapesContainer;
