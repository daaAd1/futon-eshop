import React from 'react';
import Slider from 'react-slick';
import '../styles/components/ImageSlider.css';

class ImageSlider extends React.Component {
  render() {
    const { images } = this.props;

    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 500,
    };

    const imgArray = [];
    images.map((image, index) => {
      imgArray.push(
        <div>
          <a className="ImageSlider-link" href="www.google.sk">
            <p>Detský matrac latex</p>
            <img src={image} />
          </a>
        </div>,
      );
    });

    return <Slider {...settings}>{imgArray}</Slider>;
  }
}

export default ImageSlider;
