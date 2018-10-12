import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchInformationsIfNeeded } from '../actions/InformationActions';
import AdminInformation from '../components/AdminInformation';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  attributesState: PropTypes.shape({
    attributes: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
};

const defaultProps = {};

class InformationContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchInformationsIfNeeded());
  }

  render() {
    const { updateInformation, dispatch } = this.props;

    return (
      <AdminInformation
        updateInformation={(body, type) => dispatch(updateInformation(body, type))}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { attributesState } = state;

  return {
    attributesState,
  };
};

InformationContainer.propTypes = propTypes;
InformationContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(InformationContainer);
