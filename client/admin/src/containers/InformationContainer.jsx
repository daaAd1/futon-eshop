import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchInformationsIfNeeded, updateInformations } from '../actions/InformationActions';
import AdminInformation from '../components/AdminInformation';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  attributesState: PropTypes.shape({
    attributes: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
  informationsState: PropTypes.shape({
    infromations: PropTypes.object.isRequired,
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
    const { dispatch, informationsState } = this.props;
    const { informations, error } = informationsState || {};

    return (
      <AdminInformation
        informations={informations}
        error={error}
        updateInformations={(body) => dispatch(updateInformations(body))}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { informationsState } = state;

  return {
    informationsState,
  };
};

InformationContainer.propTypes = propTypes;
InformationContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(InformationContainer);
