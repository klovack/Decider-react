import React from 'react';
import PropTypes from 'prop-types';

/**
 * AddOption
 */
export default class AddOption extends React.Component {
  state = {
    error: undefined,
    placeholderTexts: [
      'Eat',
      'Sleep',
      'Play video games',
      'Cook',
      'Take a shower',
      'Workout',
      'Call mom',
      'Study',
    ],
    currentPlaceholderIndex: 0,
  }

  /**
   * Constructor
   * @param {*} props React Props
   */
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.startPlaceholderChange = this.startPlaceholderChange.bind(this);
    this.removeError = this.removeError.bind(this);
    this.startPlaceholderChange();
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

  // eslint-disable-next-line require-jsdoc
  startPlaceholderChange() {
    setInterval(() => {
      // eslint-disable-next-line max-len
      const next = this.state.currentPlaceholderIndex + 1 >= this.state.placeholderTexts.length ? 0 : this.state.currentPlaceholderIndex + 1;
      this.setState(() => {
        return {
          currentPlaceholderIndex: next,
        };
      });
    }, 1500);
  }

  // eslint-disable-next-line require-jsdoc
  removeError() {
    this.setState(() => (
      {
        error: null,
      }
    ));
  }

  /**
   * @return {JSX} jsx which renders the option
   */
  render() {
    return (
      <div className="add-option">
        { this.state.error &&
        <p className="add-option__error">{this.state.error + '. '}
          <span
            className="clickable"
            onClick={this.removeError}>I understand.</span>
        </p>
        }
        <form id="add-option__form" onSubmit={this.handleAddOption}>
          <input
            // eslint-disable-next-line max-len
            placeholder={this.state.placeholderTexts[this.state.currentPlaceholderIndex]}
            autoComplete="off"
            className="add-option__input"
            type="text" name="option" id="option"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
AddOption.propTypes = {
  handleAddOption: PropTypes.func,
};
