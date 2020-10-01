import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#app');

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.chosenOption}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {props.chosenOption && <p>{props.chosenOption}</p>}
    <button onClick={props.handleCloseModal}>Close</button>
  </Modal>
);
OptionModal.propTypes = {
  chosenOption: PropTypes.string,
  handleCloseModal: PropTypes.func,
};

export default OptionModal;
