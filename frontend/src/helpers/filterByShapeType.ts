import { Shape } from 'api/shapes';
import { ShapeType } from 'constants/constants';

export const filterByShapeType = (
  shapes: Array<Shape>,
  shapeTypes: Array<ShapeType>
) => {
  return shapes.filter((shape) => {
    if (shape.form === 'circle' && shapeTypes.includes(ShapeType.CIRCLE)) {
      return true;
    }
    if (shape.form === 'square' && shapeTypes.includes(ShapeType.SQUARE)) {
      return true;
    }
    return false;
  });
};
