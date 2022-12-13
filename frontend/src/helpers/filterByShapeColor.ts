import { Shape } from 'api/shapes';
import { MenuShapeColor } from 'constants/constants';

export const filterByShapeColor = (
  shapes: Array<Shape>,
  colors: Array<MenuShapeColor>
) => {
  return shapes.filter((shape) => {
    let shapeColor;
    switch (shape.color) {
      case 'red':
        shapeColor = MenuShapeColor.RED;
        break;
      case 'green':
        shapeColor = MenuShapeColor.GREEN;
        break;
      case 'blue':
        shapeColor = MenuShapeColor.BLUE;
        break;
      default:
        shapeColor = MenuShapeColor.YELLOW;
    }

    if (colors.includes(shapeColor)) {
      return true;
    }

    return false;
  });
};
