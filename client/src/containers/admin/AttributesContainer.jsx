import React from 'react';
import { connect } from 'react-redux';
import fetchAttributesIfNeeded from '../../actions/AttributeActions';
import AdminAttributes from '../../components/admin/AdminAttributes';

class AttributesContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAttributesIfNeeded());
  }

  render() {
    const { attributes } = this.props;

    return (
      <AdminAttributes attributes={attributes.attributes} isFetching={attributes.isFetching} />
    );
  }
}

const mapStateToProps = (state) => {
  const { isFetching, attributes } = state;

  return {
    isFetching,
    attributes,
  };
};

export default connect(mapStateToProps)(AttributesContainer);
