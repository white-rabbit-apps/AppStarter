import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  handleLogin() {
    // 1. dispatch to ui the url: how to get url? params. withrouter./ Route.
    // 2. redirect to login.
  }

  logoutUser() {
    this.props.logout();
  }

  render() {
    return (
      <div>
      {this.props.currentUser ? (<a className="nav-logout" onClick={() => this.logoutUser() }>Disconnect</a>) : (<Link to="/connect">Connect</Link>)}
      </div>
    )
  }
}


export default Greeting;
