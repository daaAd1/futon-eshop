import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchAttributesIfNeeded,
  removeAttribute,
  updateAttribute,
  createNewAttribute,
} from '../../actions/AttributeActions';
import AdminAttributes from '../../components/admin/AdminAttributes';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  attributesState: PropTypes.shape({
    attributes: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
};

const defaultProps = {};

class AttributesContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAttributesIfNeeded());
  }

  render() {
    const { attributesState, dispatch } = this.props;
    const { attributes, isFetching } = attributesState;

    return (
      <AdminAttributes
        deleteAttribute={(id) => removeAttribute(id)}
        updateAttribute={(body, id) => updateAttribute(body, id)}
        createNewAttribute={(body) => dispatch(createNewAttribute(body))}
        attributes={attributes}
        isFetching={isFetching}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { admin } = state;
  const { attributesState } = admin;

  return {
    attributesState,
  };
};

AttributesContainer.propTypes = propTypes;
AttributesContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(AttributesContainer);
