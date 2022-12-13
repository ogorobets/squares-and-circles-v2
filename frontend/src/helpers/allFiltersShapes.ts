import { filterByShapeColor } from './filterByShapeColor';
import { filterByShapeColorShade } from './filterByShapeColorShade';
import { filterByShapeType } from './filterByShapeType';
import { Shape } from 'api/shapes';
import {
  MenuShapeColor,
  ShapeType,
  MenuShapeColorShade
} from 'constants/constants';

type AllFiltersShapeParams = {
  shapes: Array<Shape>;
  colors: Array<MenuShapeColor>;
  shapeTypes: Array<ShapeType>;
  colorShade: MenuShapeColorShade;
};

export const allFiltersShapes = ({
  shapes,
  colors,
  shapeTypes,
  colorShade
}: AllFiltersShapeParams) => {
  let resultShapes = filterByShapeColor(shapes, colors);
  resultShapes = filterByShapeColorShade(resultShapes, colorShade);
  resultShapes = filterByShapeType(resultShapes, shapeTypes);

  return resultShapes;
};
