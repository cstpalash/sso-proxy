import React, { Component } from 'react';
import { connect } from 'react-redux';
import authAction from '../../redux/App/actions';
import './style.css';
import qs from 'qs';

const { login, loginSuccess } = authAction;

class App extends Component {

  componentDidMount(){

  	const hashData = qs.parse(window.location.hash);

  	if(hashData['#id_token'] && hashData['access_token']){
  		this.props.loginSuccess(hashData['#id_token'], hashData['access_token']);
  	}
  	else{
  		this.props.login();
  	}
  }	

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Please wait while we are authenticating you to SCRIBE</h1>
        </header>
      </div>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.App.get('idToken') !== null ? true : false,
  }),
  { login, loginSuccess }
)(App);
