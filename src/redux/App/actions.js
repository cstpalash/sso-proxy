const appActons = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  REDIRECT_SCRIBE: 'REDIRECT_SCRIBE',
  login: () => ({
    type: appActons.LOGIN_REQUEST
  }),
  loginSuccess: (idToken, accessToken) => ({
    type: appActons.LOGIN_SUCCESS,
    idToken: idToken,
    accessToken: accessToken
  }),
  redirectToScribe: () => ({
    type: appActons.REDIRECT_SCRIBE
  })
};
export default appActons;