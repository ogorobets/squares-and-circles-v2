import { all, fork } from 'redux-saga/effects';
import watchShapesSaga from './shapes';

export default function* rootSaga() {
  yield all([fork(watchShapesSaga)]);
}
