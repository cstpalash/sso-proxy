import { all } from 'redux-saga/effects';
import appSagas from './App/saga';
export default function* rootSaga(getState) {
  yield all([
    appSagas()
  ]);
}