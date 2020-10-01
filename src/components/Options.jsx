import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option.jsx';

const Options = (props) => (
  <div>
    {props.options.length <= 0 && <p>Please add at least one option</p> }
    <button onClick={props.handleClearOptions}>Remove All</button>
    <ul>
      {
        props.options.map((item) => (
          <li key={item}>
            <Option
              optionText={item}
              handleDeleteOptionItem={props.handleDeleteOptionItem}/>
          </li>))
      }
    </ul>
  </div>
);
Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  handleClearOptions: PropTypes.func,
  handleDeleteOptionItem: PropTypes.func,
};

export default Options;
