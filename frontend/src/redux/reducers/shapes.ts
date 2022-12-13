import { Action, handleActions } from 'redux-actions';
import {
  SET_COLUMNS,
  SET_COLORS,
  SET_COLOR_SHADE,
  SET_SHAPE_TYPES,
  SET_LOADING_SHAPES_DATA,
  SET_SHAPES_ERROR,
  SET_SHAPES,
  ShapesPayload
} from 'redux/actions/shapes';
import { Shape } from 'api/shapes';
import { allFiltersShapes } from 'helpers';

import {
  Loading,
  MenuShapeColor,
  MenuShapeColorShade,
  ShapeType
} from 'constants/constants';

export type ShapeState = {
  shapes: Array<Shape>;
  shapesDisplayed: Array<Shape>;
  loading: Loading;
  columns: number;
  colors: Array<MenuShapeColor>;
  colorShade: MenuShapeColorShade;
  shapeTypes: Array<ShapeType>;
  error: string;
};

const initialState: ShapeState = {
  shapes: [],
  shapesDisplayed: [],
  loading: Loading.INITIAL,
  columns: 4,
  colors: [
    MenuShapeColor.RED,
    MenuShapeColor.GREEN,
    MenuShapeColor.BLUE,
    MenuShapeColor.YELLOW
  ],
  colorShade: MenuShapeColorShade.ALL,
  shapeTypes: [ShapeType.CIRCLE, ShapeType.SQUARE],
  error: ''
};

const shapesReducer = handleActions<ShapeState, ShapesPayload>(
  {
    [SET_COLUMNS]: (state: ShapeState, { payload }: Action<any>) => {
      return {
        ...state,
        columns: payload
      };
    },
    [SET_COLORS]: (state: ShapeState, { payload }: Action<any>) => {
      const colors = payload;
      return {
        ...state,
        colors,
        shapesDisplayed: allFiltersShapes({
          shapes: state.shapes,
          colors,
          shapeTypes: state.shapeTypes,
          colorShade: state.colorShade
        })
      };
    },
    [SET_COLOR_SHADE]: (state: ShapeState, { payload }: Action<any>) => {
      const colorShade = payload;
      return {
        ...state,
        colorShade,
        shapesDisplayed: allFiltersShapes({
          shapes: state.shapes,
          colors: state.colors,
          shapeTypes: state.shapeTypes,
          colorShade
        })
      };
    },
    [SET_SHAPE_TYPES]: (state: ShapeState, { payload }: Action<any>) => {
      const shapeTypes = [...payload];
      return {
        ...state,
        shapeTypes,
        shapesDisplayed: allFiltersShapes({
          shapes: state.shapes,
          colors: state.colors,
          shapeTypes,
          colorShade: state.colorShade
        })
      };
    },
    [SET_LOADING_SHAPES_DATA]: (
      state: ShapeState,
      { payload }: Action<any>
    ) => {
      return {
        ...state,
        loading: payload
      };
    },
    [SET_SHAPES_ERROR]: (state: ShapeState, { payload }: Action<any>) => {
      return {
        ...state,
        error: payload
      };
    },
    [SET_SHAPES]: (state: ShapeState, { payload }: Action<any>) => {
      return {
        ...state,
        shapes: [...payload],
        shapesDisplayed: [...payload]
      };
    }
  },
  initialState
);

export default shapesReducer;
