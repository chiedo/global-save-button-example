import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { areChangesPresent } from '../utils/functions';
import * as _ from 'lodash';

class TotalClicks extends Component {

  constructor(props) {
    super(props);
    this._getTotalClicks = this._getTotalClicks.bind(this);
  }

  static propTypes = {
    // passed in as props through the redux connect() method
    clickers: PropTypes.array.isRequired,
  };

  /**
   * Get total clicks
   */
  _getTotalClicks () {
    const { clickers } = this.props;
    return _.sumBy(clickers, 'clicks');
  }

  render () {
    const changesPresent = areChangesPresent(this.props.clickers);
    const changesClass = (changesPresent ? 'changes-present' : null);
    const totalClicks = this._getTotalClicks();
    return (
      <div className={'total-clicks-bar' + (changesClass ? ` ${changesClass}` : '')}>
        <h2>Total clicks saved: {totalClicks}</h2>
        {changesPresent && <p><em>Unsaved changes present below. Save them to update this bar.</em></p>}
      </div>
    );
  }
}


export default connect((state) => {
  return {
    clickers: state.clickers,
  }
})(TotalClicks);