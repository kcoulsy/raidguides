import React from 'react';

import Head from '../components/head'
import Nav from '../components/nav'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
        <div>
        <Head title="Home" />
        <Nav selected="home" />
        <div className="page">
          <div className="content">
            <p>
                {this.props.statusCode
                ? `An error ${this.props.statusCode} occurred on server`
                : 'An error occurred on client'}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;