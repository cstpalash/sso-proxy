import { Map } from 'immutable';
import actions from './actions';
import { getToken } from '../../helpers/localStorageHelper';

const initState = new Map({
  idToken: '',
  accessToken: ''
});

export default function appReducer(state = initState.merge(getToken()), action) {
    switch (action.type) {
      case actions.LOGIN_SUCCESS:
          return state.set('idToken', action.idToken).set('accessToken', action.accessToken);
      default:
        return state;
    }
}