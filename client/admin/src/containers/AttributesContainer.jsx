import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchAttributesIfNeeded,
  removeAttribute,
  updateAttribute,
  createNewAttribute,
} from '../actions/AttributeActions';
import AdminAttributes from '../components/AdminAttributes';
import { fetchTypesIfNeeded } from '../actions/TypeActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  attributesState: PropTypes.shape({
    attributes: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
  typesState: PropTypes.shape({
    types: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
};

const defaultProps = {};

class AttributesContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAttributesIfNeeded());
    dispatch(fetchTypesIfNeeded());
  }

  render() {
    const { attributesState, typesState, dispatch } = this.props;
    const { attributes, isFetching } = attributesState;
    const { types } = typesState || {};

    return (
      <AdminAttributes
        types={types}
        deleteAttribute={(id) => dispatch(removeAttribute(id))}
        updateAttribute={(body, id) => dispatch(updateAttribute(body, id))}
        createNewAttribute={(body) => dispatch(createNewAttribute(body))}
        attributes={attributes}
        isFetching={isFetching}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { attributesState, typesState } = state;

  return {
    attributesState,
    typesState,
  };
};

AttributesContainer.propTypes = propTypes;
AttributesContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(AttributesContainer);
