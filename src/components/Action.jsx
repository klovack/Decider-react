import React from 'react';
import PropTypes from 'prop-types';

const Action = (props) => (
  <div className="action">
    <button
      className="button button--large button--full"
      onClick={props.handleMakeDecision}
      disabled={!props.hasOptions}>
      {props.hasOptions ? 'What Should I do?' :
      'You haven\'t given me any option to choose'}
    </button>
  </div>
);
Action.propTypes = {
  handleMakeDecision: PropTypes.func,
  hasOptions: PropTypes.bool,
};

export default Action;
