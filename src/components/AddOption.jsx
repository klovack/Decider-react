import React from 'react';
import PropTypes from 'prop-types';

/**
 * AddOption
 */
export default class AddOption extends React.Component {
  state = {
    error: undefined,
  }

  /**
   * Constructor
   * @param {*} props React Props
   */
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  /**
   *
   * @param {ElementRef} e is the form Element Ref
   */
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;
    const error = this.props.handleAddOption(option);

    if (!error) {
      e.target.elements.option.value = '';
    }

    this.setState(() => (
      {
        error,
      }
    ));
  }

  /**
   * @return {JSX} jsx which renders the option
   */
  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" id="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
AddOption.propTypes = {
  handleAddOption: PropTypes.func,
};
