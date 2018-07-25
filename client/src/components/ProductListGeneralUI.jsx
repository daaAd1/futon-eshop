import React from 'react';
import '../styles/components/ProductListGeneralUI.css';
import ProductCard from './ProductCard';
import futon from '../img/futon.jpeg';
import futon2 from '../img/futon8.jpeg';
import futon3 from '../img/futon7.jpeg';
import futon4 from '../img/futon4.jpeg';
import futon5 from '../img/futon5.jpeg';
import futon6 from '../img/futon6.jpeg';

class ProductListGeneralUI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const filterIfNeeded = (
    //   <div className="ProductListGeneralUI-filterWrapper">
    //     <Sticky top={0} bottomBoundary={830}>
    //       <CategoryFilter filterVisible={filterVisible} />
    //     </Sticky>
    //   </div>
    // );
    // <div className="ProductListGeneralUI">
    //     <ProductCard />
    //     <ProductCard />
    //     <ProductCard />
    //     <ProductCard />
    //     <ProductCard />
    //   </div>
    const { categoryName } = this.props;
    return (
      <ul className="ProductListGeneralUI">
        <h1>Zoznam produktov</h1>
        <ProductCard name="Matrac hriva - latex" image={futon} price="100,00" />
        <ProductCard name="Matrac vlna - hriva - latex" image={futon2} price="200,00" />
        <ProductCard name="Matrac latex - kokos" image={futon3} price="300,00" />
        <ProductCard name="Matrac bavlna" image={futon4} price="400,00" />
        <ProductCard name="Bavlnený matrac s vrstvou kokosu a peny" image={futon5} price="500,00" />
        {/* <ProductCard name="Bavlnený matrac s penou" image={futon6} price="600,00" /> */}
      </ul>
    );
  }
}

export default ProductListGeneralUI;
