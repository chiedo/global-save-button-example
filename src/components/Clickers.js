import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// child components
import Clicker from './Clicker';

class Clickers extends Component {
  static propTypes = {
    // passed in as props through the redux connect() method
    clickers: PropTypes.array.isRequired,
  };

  render () {
    const clickers = this.props.clickers.map((clicker, index) => {
      return (
        <div key={index} className="col-xs-12 col-sm-12 col-md-6">
          <Clicker key={index} clicker={clicker} />
        </div>
      );
    });
    
    return (
      <div className="clickers container">
        <div className="row">
          {clickers}
        </div>
      </div>
    );
  }
}


export default connect((state) => {
  return {
    clickers: state.clickers,
  }
})(Clickers);