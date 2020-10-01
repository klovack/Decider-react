import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={() => {
          props.handleDeleteOptionItem(props.optionText);
        }}
      >X</button>
    </div>
  );
};
Option.propTypes = {
  optionText: PropTypes.string,
  handleDeleteOptionItem: PropTypes.func,
};

export default Option;
