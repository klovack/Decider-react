import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header.jsx';
import AddOption from './AddOption.jsx';
import Action from './Action.jsx';
import Options from './Options.jsx';
import OptionModal from './OptionModal.jsx';

/* eslint-disable require-jsdoc */
export default class IndecisionApp extends React.Component {
  static get STORAGE_OPTIONS() {
    return 'options';
  }

  constructor(props) {
    super(props);
    this.handleClearOptions = this.handleClearOptions.bind(this);
    this.handleMakeDecision = this.handleMakeDecision.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptionItem = this.handleDeleteOptionItem.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      options: props.options,
    };
  }

  handleClearOptions() {
    this.setState(() => (
      {
        options: [],
        chosenOption: null,
      }
    ));
  }

  handleDeleteOptionItem(optionItem) {
    this.setState((prevState) => ({
      options: prevState.options.filter((val) => {
        return val !== optionItem;
      }),
    }));
  }

  handleAddOption(optionItem) {
    if (!optionItem) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(optionItem) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(optionItem),
    }));
  }

  handleMakeDecision() {
    const rand = Math.floor(Math.random() * this.state.options.length);
    this.setState(() =>(
      {
        chosenOption: this.state.options[rand],
      }
    ));
  }

  handleCloseModal() {
    this.setState(() => {
      return {
        chosenOption: undefined,
      };
    });
  }

  componentDidMount() {
    try {
      const optionJson = localStorage.getItem(IndecisionApp.STORAGE_OPTIONS);
      const options = JSON.parse(optionJson);

      if (options) {
        this.setState(() => ({
          options: options,
        }));
      }
    } catch (error) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      const optionJson = JSON.stringify(this.state.options);
      localStorage.setItem(IndecisionApp.STORAGE_OPTIONS, optionJson);
    }
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'The computer will choose for you.';

    return (
      <div className="wrapper card">
        <Header
          title={title}
          subtitle={subtitle}
        />
        <Action
          handleMakeDecision={this.handleMakeDecision}
          hasOptions={this.state.options && this.state.options.length > 0} />
        <Options
          options={this.state.options}
          handleClearOptions={this.handleClearOptions}
          handleDeleteOptionItem={this.handleDeleteOptionItem} />
        <AddOption
          handleAddOption={this.handleAddOption} />
        <OptionModal
          chosenOption={this.state.chosenOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: [],
};
IndecisionApp.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
