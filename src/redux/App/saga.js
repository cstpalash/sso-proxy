import { all, takeEvery, put, fork, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { clearToken, setToken } from '../../helpers/localStorageHelper';
import { getUserDetail, redirectToEidpLogin } from '../../helpers/eidpHelper';
import actions from './actions';

//const fakeApiCall = false; // auth0 or express JWT

const getIdToken = (state) => state.App.get('idToken');
const getAccessToken = (state) => state.App.get('accessToken');

export function* loginRequest() {
  yield takeEvery('LOGIN_REQUEST', function*() {

    var idToken = yield select(getIdToken);
    var accessToken = yield select(getAccessToken);

    if(!idToken){
      //nothing found in localStorage, need to re-login with EIDP
      redirectToEidpLogin();
    }
    else{
      yield put({ type: actions.REDIRECT_SCRIBE });
    }
  });
}

export function* redirectToScribe() {
  yield takeEvery(actions.REDIRECT_SCRIBE, function*() {

      var idToken = yield select(getIdToken);
      var accessToken = yield select(getAccessToken);

      var user = getUserDetail(idToken, accessToken);
      console.log(user);
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {

    yield setToken(payload.idToken, payload.accessToken);
    yield put({ type: actions.REDIRECT_SCRIBE });
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {
    clearToken();
    yield put(push('/'));
  });
}

export default function* rootSaga() {
  yield all([
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(redirectToScribe)
  ]);
}
