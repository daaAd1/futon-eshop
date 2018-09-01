import { connect } from 'react-redux';
import { removeProductFromCart } from '../actions/CartActions';
import HeaderMenu from '../components/HeaderMenu';

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
    onRemoveFromCartClick: (id, count) => {
      dispatch(removeProductFromCart(id, count));
    },
  };
};

const HeaderMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderMenu);

export default HeaderMenuContainer;
