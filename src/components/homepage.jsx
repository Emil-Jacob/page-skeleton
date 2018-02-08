import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> CONTENT </h1>
      </div>
    );
  }
}

HomePage.contextTypes = {
  router: PropTypes.object
};

export default HomePage;
