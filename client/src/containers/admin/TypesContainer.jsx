import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdminTypes from '../../components/admin/AdminTypes';
import fetchTypesIfNeeded from '../../actions/TypeActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  typesState: PropTypes.shape({
    types: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
};

const defaultProps = {};

class TypesContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTypesIfNeeded());
  }

  render() {
    const { typesState } = this.props;
    const { types, isFetching } = typesState;

    return <AdminTypes types={types} isFetching={isFetching} />;
  }
}

const mapStateToProps = (state) => {
  const { admin } = state;
  const { typesState } = admin;

  return {
    typesState,
  };
};

TypesContainer.propTypes = propTypes;
TypesContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(TypesContainer);
