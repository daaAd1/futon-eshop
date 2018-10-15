import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdminTypes from '../components/AdminTypes';
import { fetchTypesIfNeeded, createNewType, updateType, removeType } from '../actions/TypeActions';

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
    const { typesState, dispatch } = this.props;
    const { types, isFetching } = typesState;

    return (
      <AdminTypes
        types={types}
        isFetching={isFetching}
        updateType={(body, id) => dispatch(updateType(body, id))}
        createNewType={(body) => dispatch(createNewType(body))}
        deleteType={(id) => dispatch(removeType(id))}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { typesState } = state;

  return {
    typesState,
  };
};

TypesContainer.propTypes = propTypes;
TypesContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(TypesContainer);
