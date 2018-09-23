import { connect } from 'react-redux';
import Product from '../components/Product';

const findProductWithId = (products, id) => {
  return products.find((product) => product._id === id);
};

const mapStateToProps = (state, props) => {
  const { products } = state;
  const { productsItems } = products && products;
  const { items } = productsItems && productsItems;
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

export default connect(mapStateToProps)(Product);
