import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// actions
import { saveClicks, setClickerHasChanged, registerSaveCallback, deregisterSaveCallback } from '../actions/clicker-actions';

// child components
import SaveBar from './SaveBar';

class Clicker extends Component {
  static propTypes = {
    // passed down from parent
    clicker: PropTypes.object.isRequired,
    // passed in as props through the redux connect() method
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      unsavedClicks: 0, // keeps track of clicks that have not been saved (local state only)
    };
    this._getClicks = this._getClicks.bind(this);
    this._areChangesPresent = this._areChangesPresent.bind(this);
    this._increment = this._increment.bind(this);
    this._cancel = this._cancel.bind(this);
    this._save = this._save.bind(this);
  }

  componentWillMount() {
    const { dispatch, clicker } = this.props;
    dispatch(registerSaveCallback(this._save, clicker.id));
  }

  componentWillUnmount() {
    const { dispatch, clicker } = this.props;
    dispatch(deregisterSaveCallback(this._save, clicker.id));
  }

  /**
   * Display saved clicks + unsaved clicks
   * note: when validating input in the real world, you may need to add parseInt to ensure data is in correct format
   * @returns {int}
   */
  _getClicks () {
    const { clicker } = this.props;
    const { unsavedClicks } = this.state;
    return clicker.clicks + unsavedClicks;
  }

  /**
   * Determine if changes are present based on number of unsaved clicks
   * note: proprietary bootstrap classes are used
   * @returns {string}
   */
  _areChangesPresent () {
    const { unsavedClicks } = this.state;
    if (unsavedClicks > 0) { return true; }
    return false;
  }

  /**
   * Handle click event - add one click to unsaved clicks
   * @param {event} ev
   * @returns {null}
   */
  _increment (ev) {
    const { dispatch, clicker } = this.props;
    if (!ev.target.name && ev.target.name !== 'save' && ev.target.name !== 'cancel') {
      this.setState({ unsavedClicks: this.state.unsavedClicks + 1 });
      if (!clicker.hasChanged) { dispatch(setClickerHasChanged(true, clicker.id)); }
    }
  }

  /**
   * Cancel unsaved clicks
   * @param {event} ev
   * @returns {null}
   */
  _cancel (ev) {
    const { dispatch, clicker } = this.props;
    this.setState({ unsavedClicks: 0 });
    dispatch(setClickerHasChanged(false, clicker.id));
  }

  _save (ev) {
    const { dispatch, clicker } = this.props;
    const clicks = this.state.unsavedClicks;
    dispatch(saveClicks(clicks, clicker.id));
    this.setState({ unsavedClicks: 0 });
    // only fire clicker has changed event if target exists i.e. this function was called by a click event
    if (ev && ev.target) {
      dispatch(setClickerHasChanged(false, clicker.id));
    }
  }

  render () {
    const { clicker } = this.props;
    const changesPresent = this._areChangesPresent();
    const clickerClass = (changesPresent ? 'changes-present' : null);
    const numClicks = this._getClicks();

    return (
      <div className={'clicker noselect' + (clickerClass ? ` ${clickerClass}` : '')} onClick={this._increment}>
        <code>Clicker {clicker.id + 1}</code>
        <h2>{numClicks}</h2>
        {changesPresent && <SaveBar save={this._save} cancel={this._cancel} />}
      </div>
    );
  }
}

export default connect()(Clicker);