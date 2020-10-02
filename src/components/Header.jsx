import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <div className="header">
    <h1 className="header__title">{props.title}</h1>
    {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
  </div>
);
Header.defaultProps = {
  title: 'Indecision',
};
Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Header;
