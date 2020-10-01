import React from 'react';
import PropTypes from 'prop-types';

const Action = (props) => (
  <div>
    <button
      onClick={props.handleMakeDecision}
      disabled={!props.hasOptions}>
        What Should I do?
    </button>
  </div>
);
Action.propTypes = {
  handleMakeDecision: PropTypes.func,
  hasOptions: PropTypes.bool,
};

export default Action;
