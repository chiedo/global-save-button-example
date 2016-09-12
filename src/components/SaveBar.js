import React, {PropTypes} from 'react';

const SaveBar = ({
  save,
  cancel
}) => {
  return (
    <div className="save-bar">
      <button name="cancel" onClick={cancel}>Cancel</button>
      <button name="save" onClick={save}>Save</button>
    </div>
  );
};

SaveBar.propTypes = {
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default SaveBar;