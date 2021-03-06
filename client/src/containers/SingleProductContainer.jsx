import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from '../components/Product';
import { removeProductFromCart, addProductToCart } from '../actions/CartActions';
import { fetchAttributesIfNeeded } from '../actions/AttributeActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  productWithId: PropTypes.shape({
    productsList: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
  productId: PropTypes.string.isRequired,
  onAddToCartClick: PropTypes.func.isRequired,
};

const defaultProps = {};

class SingleProductContainer extends React.Component {
  constructor() {
    super();

    this.onRemoveFromCartClick = this.onRemoveFromCartClick.bind(this);
    this.onAddToCartClick = this.onAddToCartClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAttributesIfNeeded());
  }

  onRemoveFromCartClick(id, count, name, totalItemPrice, selectedOptions) {
    const { dispatch } = this.props;
    dispatch(removeProductFromCart(id, count, name, totalItemPrice, selectedOptions));
  }

  onAddToCartClick(id, count, name, totalItemPrice, selectedOptions, image) {
    const { dispatch } = this.props;
    dispatch(addProductToCart(id, count, name, totalItemPrice, selectedOptions, image));
  }

  render() {
    const { productWithId, productId } = this.props;
    return (
      <Product
        onAddToCartClick={this.onAddToCartClick}
        onRemoveFromCartClick={this.onRemoveFromCartClick}
        productWithId={productWithId}
        productId={productId}
      />
    );
  }
}

const findProductWithId = (products, id) => {
  return products && products.find((product) => product._id === id);
};

const mapStateToProps = (state, props) => {
  const { products } = state;
  const { productsList } = products && products;
  const { items } = productsList && productsList;
  const { match } = props;
  const { params } = match && match;
  const { id } = params && params;

  const productId = id;
  const productWithId = findProductWithId(items, productId);

  return {
    productWithId,
    productId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  //onOrderStatusChange: (id, newStatus) => dispatch(changeOrderStatus(id, newStatus)),
});

SingleProductContainer.propTypes = propTypes;
SingleProductContainer.defaultProps = defaultProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleProductContainer);
