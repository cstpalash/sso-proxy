const eidpConfig = {
  authUrl : "https://eidp-int.de.db.com:8443/auth/realms/Splunk/protocol/openid-connect/auth",
  response_type : "id_token token",
  client_id : "splunk-client",
  redirect_uri : "http://localhost:3000",
  nonce : "abc",
  scope : "openid"
};

export {
	eidpConfig
};