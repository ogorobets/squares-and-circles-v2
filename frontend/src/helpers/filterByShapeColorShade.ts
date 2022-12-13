import { Shape } from 'api/shapes';
import { MenuShapeColorShade } from 'constants/constants';

export const filterByShapeColorShade = (
  shapes: Array<Shape>,
  colorShade: MenuShapeColorShade
) => {
  return shapes.filter((shape) => {
    if (colorShade === MenuShapeColorShade.ALL) {
      return true;
    }
    if (shape.dark && colorShade === MenuShapeColorShade.DARK) {
      return true;
    }
    if (!shape.dark && colorShade === MenuShapeColorShade.LIGHT) {
      return true;
    }
    return false;
  });
};
