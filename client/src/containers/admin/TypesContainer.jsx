import React from 'react';
import { connect } from 'react-redux';
import AdminTypes from '../../components/admin/AdminTypes';
import fetchTypesIfNeeded from '../../actions/TypeActions';

class TypesContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTypesIfNeeded());
  }

  render() {
    const { types } = this.props;

    return <AdminTypes types={types.types} isFetching={types.isFetching} />;
  }
}

const mapStateToProps = (state) => {
  const { isFetching, types } = state;

  return {
    types,
    isFetching,
  };
};

export default connect(mapStateToProps)(TypesContainer);
