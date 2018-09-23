import { connect } from 'react-redux';
import { addProductToCart } from '../actions/CartActions';
import Product from '../components/Product';

const mapStateToProps = (state) => {
  return {
    name: 'Matrac hriva - latex',
    price: '100,00',
    smallDesc:
      'Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály a      ',
    longDesc:
      '<b>Zloženie</b>: 3 vrstvy 100 % bavlny, 1 cm konská hriva, 4 cm latexu, 1 cm konská hriva',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCartClick: (id, count) => {
      dispatch(addProductToCart(id, count));
    },
  };
};

const ProductContainer = connect(mapDispatchToProps)(Product);

export default ProductContainer;
