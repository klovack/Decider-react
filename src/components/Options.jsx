import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option.jsx';

const Options = (props) => (
  <div className="widget-options">
    <div className="widget-options--header">
      <p>Your options</p>
      <button
        className="button button--link"
        onClick={props.handleClearOptions}>Remove All</button>
    </div>

    {props.options.length <= 0 &&
    <h4 className="no-options">Please add at least one option</h4> }

    {props.options.length > 0 &&
      <ul className="options-list scrollbar">
        {
          props.options.map((item) => (
            <li
              className="options-list--item"
              key={item}>
              <Option
                optionText={item}
                handleDeleteOptionItem={props.handleDeleteOptionItem}/>
            </li>))
        }
      </ul>
    }
  </div>
);
Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  handleClearOptions: PropTypes.func,
  handleDeleteOptionItem: PropTypes.func,
};

export default Options;
