import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#app');

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.chosenOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="option-modal"
    overlayClassName="option-modal-overlay"
  >
    <h5 className="option-modal__title">Selected Option</h5>
    {props.chosenOption &&
    <p className="option-modal__content">{props.chosenOption}</p>}
    <button
      className="button"
      onClick={props.handleCloseModal}>Close</button>
  </Modal>
);
OptionModal.propTypes = {
  chosenOption: PropTypes.string,
  handleCloseModal: PropTypes.func,
};

export default OptionModal;
