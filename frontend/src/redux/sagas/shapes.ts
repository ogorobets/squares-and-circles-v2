import { put, call, takeEvery } from 'redux-saga/effects';
import {
  GET_SHAPES,
  SET_SHAPES_ERROR,
  SET_LOADING_SHAPES_DATA,
  setShapes
} from '../actions/shapes';
import { getShapes, Shape } from '../../api/index';
import { Loading } from 'constants/constants';

export function* handleShapes() {
  yield put({ type: SET_LOADING_SHAPES_DATA, payload: Loading.PENDING });
  try {
    const shapes: Array<Shape> = yield call(getShapes);
    yield put(setShapes(shapes));
    yield put({ type: SET_LOADING_SHAPES_DATA, payload: Loading.SUCCESS });
  } catch (error) {
    console.log(`Error occurred: ${JSON.stringify(error)}`);
    yield put({ type: SET_LOADING_SHAPES_DATA, payload: Loading.ERROR });
    yield put({
      type: SET_SHAPES_ERROR,
      payload: 'Error fetching shapes data'
    });
  }
}

export default function* watchShapesSaga() {
  yield takeEvery(GET_SHAPES, handleShapes);
}
