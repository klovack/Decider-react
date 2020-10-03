import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => (
  <div className="option">
    {props.optionText}
    <button
      className="button button--link"
      onClick={() => {
        props.handleDeleteOptionItem(props.optionText);
      }}
    >Delete</button>
  </div>
);
Option.propTypes = {
  optionText: PropTypes.string,
  handleDeleteOptionItem: PropTypes.func,
};

export default Option;
