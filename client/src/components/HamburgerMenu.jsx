import React from 'react';
import PropTypes from 'prop-types';
import { hamburgerIcon, closeHamburgerIcon } from '../icons';
import '../styles/components/HamburgerMenu.css';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { props } = this;
    props.onHamburgerClick(props.isOpen);
  }

  render() {
    const { isOpen } = this.props;
    return (
      <React.Fragment>
        {!isOpen && (
          <div
            className="HamburgerMenu-iconContainer"
            tabIndex={0}
            onClick={this.onClick}
            role="button"
            onKeyDown={this.onClick}
          >
            {hamburgerIcon}
          </div>
        )}
        {isOpen && (
          <div
            className="HamburgerMenu-iconContainer"
            tabIndex={0}
            onClick={this.onClick}
            role="button"
            onKeyDown={this.onClick}
          >
            {closeHamburgerIcon}
          </div>
        )}
      </React.Fragment>
    );
  }
}

HamburgerMenu.propTypes = propTypes;

export default HamburgerMenu;
