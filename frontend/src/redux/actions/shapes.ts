import {
  Loading,
  MenuShapeColor,
  MenuShapeColorShade,
  ShapeType
} from 'constants/constants';
import { createAction } from 'redux-actions';
import { Shape } from 'api/shapes';

export type SetColumnsPayload = number;
export const SET_COLUMNS = 'SET_COLUMNS';
export const setColumns = createAction<SetColumnsPayload>(SET_COLUMNS);

export type SetColorsPayload = Array<MenuShapeColor>;
export const SET_COLORS = 'SET_COLORS';
export const setColors = createAction<SetColorsPayload>(SET_COLORS);

export type SetColorShadePayload = MenuShapeColorShade;
export const SET_COLOR_SHADE = 'SET_COLOR_SHADE';
export const setColorShade =
  createAction<SetColorShadePayload>(SET_COLOR_SHADE);

export type SetShapeTypesPayload = Array<ShapeType>;
export const SET_SHAPE_TYPES = 'SET_SHAPE_TYPES';
export const setShapeTypes =
  createAction<SetShapeTypesPayload>(SET_SHAPE_TYPES);

export type SetLoadingShapesDataPayload = Loading;
export const SET_LOADING_SHAPES_DATA = 'SET_LOADING_SHAPES_DATA';
export const setLoadingShapesData = createAction<SetLoadingShapesDataPayload>(
  SET_LOADING_SHAPES_DATA
);

export type SetShapesErrorPayload = string;
export const SET_SHAPES_ERROR = 'SET_SHAPES_ERROR';
export const setShapesError =
  createAction<SetShapesErrorPayload>(SET_SHAPES_ERROR);

export const GET_SHAPES = 'GET_SHAPES';
export const getShapes = createAction(GET_SHAPES);

export type SetShapesPayload = Array<Shape>;
export const SET_SHAPES = 'SET_SHAPES';
export const setShapes = createAction<SetShapesPayload>(SET_SHAPES);

export type ShapesPayload =
  | SetColumnsPayload
  | SetColorsPayload
  | SetColorShadePayload
  | SetShapeTypesPayload
  | SetLoadingShapesDataPayload
  | SetShapesErrorPayload
  | SetShapesPayload;
