import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles/components/ProductGeneralUI.css';
import Button from './Button';
import futon from '../img/futon.jpeg';
import futon2 from '../img/futon2.jpeg';
import futon3 from '../img/futon3.jpeg';
import futon4 from '../img/futon4.jpeg';
import futon5 from '../img/futon5.jpeg';
import futon6 from '../img/futon6.jpeg';

const ProductGeneralUI = (props) => {
  const { children } = props;
  const avc = (
    <div className="ProductGeneralUI-images">
      <div style={{ backgroundImage: `url(${futon})` }} />
    </div>
  );
  const images = [
    {
      original: futon,
      thumbnail: futon,
    },
    {
      original: futon2,
      thumbnail: futon2,
    },
    {
      original: futon3,
      thumbnail: futon3,
    },
  ];

  const sliderImages = [futon, futon2, futon3, futon4, futon5, futon6];

  return (
    <div className="ProductGeneralUI">
      <h1 className="ProductGeneralUI-heading">Matrac hriva - latex</h1>
      <div className="ProductGeneralUI-mainContent">
        <div className="ProductGeneralUI-images">
          <ImageGallery items={images} showPlayButton={false} slideDuration={0} />
        </div>

        <div className="ProductGeneralUI-details">
          <p className="ProductGeneralUI-description">
            Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály a
            matrace z certifikovaných ekologických a šetrne získavaných konských hrív majú jedinečné
            vlastnosti. Výborne pohlcujú vlhkosť a znižujú množstvo roztočov v matraci. Preto sú
            vhodné aj pre alergikov.
          </p>
          <div className="ProductGeneralUI-cartDetails">
            <p className="ProductGeneralUI-price">100,00 €</p>
            <label className="ProductGeneralUI-numberOfItems" htmlFor="mnozstvo">
              Množstvo:
              <input id="mnozstvo" type="number" value="1" min="1" max="10" />
            </label>
            <Button text="Pridať do košíka" shop="add_to_cart" />
          </div>
        </div>
      </div>
      <div className="ProductGeneralUI-longDescription">
        <h2>Popis produktu</h2>
        <p>
          <b>Zloženie</b>: 3 vrstvy 100 % bavlny, 1 cm konská hriva, 4 cm latexu, 1 cm konská hriva,
          3 vrstvy 100 % bavlny <br /> <b>Výška</b>: 18 cm Nosnosť matraca: 130 kg <br />{' '}
          <b>Hmotnosť matraca</b>: od 19 kg (veľkosť 90x200 cm) do 40 kg (veľkosť 200x200 cm) <br />{' '}
          <b>Tvrdosť matraca</b>: najmäkší matrac <br /> <b>Bavlna</b>: Je hlavnou súčasťou
          tradičného japonského futonu. Je pevná, tvrdá a priedušná. Dobre fixuje chrbát. Je
          hygienická vďaka tomu, že rýchlo schne. Extrémne vysoká gramáž 1000g/m². Vo vnútri futonu
          je spracovaná ihlovým strojom a stlačená.
          <br /> <b>Latexová vrstva</b>: Zvyšuje pružnosť a mäkkosť matraca. Je ideálna aj pokiaľ
          budete na matraci často sedieť.<br /> <b>Zloženie</b>: 80 % prírodný kaučuk a 20 % umelý
          kaučuk.<br /> <b> Konská hriva</b>: Dodáva matracu skvelé vlastnosti. Je vzdušná, ľahká,
          výborne odvádza vlhkosť. Matrac s konskou hrivou je odolný voči plesniam a baktériám.
          Konská hriva sa získava zastrihávaním koncov konskej hrivy. <br />{' '}
          <b>Povrch matraca a gramáž</b>: bavlnené rúno 300g/m² <br />{' '}
          <b>Certifikácia tkanín matraca</b>: Eko-tex <br /> <b>Značka Matraca</b>: Nejfuton – Česká
          republika <br /> <b>Cena za dopravu</b>: malá zásielka: 5 €, stredná zásielka:12 €, veľká
          zásielka: 20 € <br /> <b>Doprava</b>: prepravnou spoločnosťou TOPTRANS <br />{' '}
          <b>Osobný odber</b>: v Košiciach po dohode <br /> <b>Platba</b>: dobierkou alebo prevodom
          na účet
        </p>
      </div>
    </div>
  );
};

export default ProductGeneralUI;
