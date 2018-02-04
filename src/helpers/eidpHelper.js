import jwt from 'jwt-decode';
import {eidpConfig} from '../config.js';

function parseToken(token){
	return jwt(token);
}

export function getUserDetail(idToken, accessToken){
	var idVal = parseToken(idToken);
	var accessVal = parseToken(accessToken);

	return {
		email : idVal.email,
		roles : accessVal.resource_access.account.roles.join(',')
	}
}

export function redirectToEidpLogin(){
	window.location.href = eidpConfig.authUrl +
		"?response_type=" + encodeURIComponent(eidpConfig.response_type) +
		"&client_id=" + encodeURIComponent(eidpConfig.client_id) +
		"&redirect_uri=" + encodeURIComponent(eidpConfig.redirect_uri) +
		"&nonce=" + encodeURIComponent(eidpConfig.nonce) +
		"&scope=" + encodeURIComponent(eidpConfig.scope)
}
