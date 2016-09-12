import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { areChangesPresent } from '../utils/functions';

// actions
import { saveAll } from '../actions/clicker-actions';

class SaveAllBar extends Component {

  constructor(props) {
    super(props);
    this._saveAll = this._saveAll.bind(this);
  }

  static propTypes = {
    // passed in as props through the redux connect() method
    clickers: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  _saveAll() {
    const { dispatch } = this.props;
    dispatch(saveAll());
  }

  render () {
    const changesPresent = areChangesPresent(this.props.clickers);
    if (changesPresent) {
      return (
        <div className="save-all-bar">
          <button onClick={this._saveAll}>SAVE ALL!</button>
        </div>
      );  
    }
    return <div/>;
  }
}


export default connect((state) => {
  return {
    clickers: state.clickers,
  }
})(SaveAllBar);