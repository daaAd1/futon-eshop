import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import ImageUploader from 'react-images-upload';
import Button from './Button';
import {
  deleteIcon,
  chevronDownIcon,
  chevronUpIcon,
  fullCircleIcon,
  emptyCircleIcon,
} from '../icons';
import '../styles/components/AdminOneProduct.css';

class AdminOneProduct extends React.Component {
  state = {
    isExpanded: false,
    isActive: true,
    images: [],
    data: [],
    offset: 0,
  };

  constructor() {
    super();

    this.removeImage = this.removeImage.bind(this);
    this.addImage = this.addImage.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleActiveChange = this.handleActiveChange.bind(this);
    this.handlePageClick = this.handleExpandChange.bind(this);
  }

  removeImage(index) {
    const newState = this.state;
    newState.images.splice(index, 1);
    this.setState(newState);
  }

  addImage(images) {
    const joinedArray = [];
    const currentImages = this.state.images;

    images.forEach((newImg) => {
      let isDuplicate = false;
      if (currentImages.length > 0) {
        currentImages.forEach((currentImg) => {
          if (newImg.name === currentImg.name) {
            isDuplicate = true;
          }
        });
      }

      if (!isDuplicate) {
        joinedArray.push(newImg);
      }
    });

    this.setState({
      images: currentImages.concat(joinedArray),
    });
  }

  handleExpandChange() {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  handleActiveChange() {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({ offset: offset }, () => {
      this.setState({
        pageCount: Math.ceil(100 / 5),
      });
    });
  };

  render() {
    const { isExpanded, isActive } = this.state;
    const { id, name, shortDesc, longDesc, price, type } = this.props;

    const productActive = isActive
      ? 'color-change-reverse'
      : 'AdminOneProduct-propertiesInactive color-change ';

    return (
      <div className="AdminOneProduct">
        <div className={`AdminOneProduct-properties ${productActive}`}>
          <div
            onClick={this.handleExpandChange}
            className="AdminOneProduct-small AdminOneProduct-cursorPointer"
          >
            {isExpanded ? chevronUpIcon : chevronDownIcon}
          </div>
          <div className="AdminOneProduct-small">{id}</div>
          <div>{name}</div>
          <div>{shortDesc}</div>
          <div>{longDesc}</div>
          <div>{price}</div>
          <div>{type}</div>
          <div
            onClick={this.handleActiveChange}
            className="AdminOneProduct-small AdminOneProduct-cursorPointer"
          >
            <button className="AdminOneProduct-activeButton">
              {isActive ? fullCircleIcon : emptyCircleIcon}
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="AdminOneProduct-expandedInfo swing-in-top-bck">
            <div>
              <p>id</p>
              <p>1</p>
            </div>
            <div>
              <p>Názov</p>
              <TextareaAutosize value="Jozef Korikov" />
            </div>
            <div>
              <p>Krátky popis</p>
              <TextareaAutosize
                value="Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály
                    a matrace z certifikovaných ekologických a šetrne získavaných konských hrív majú
                    jedinečné vlastnosti. Výborne pohlcujú vlhkosť a znižujú množstvo roztočov v
                    matraci. Preto sú vhodné aj pre alergikov."
              />
            </div>
            <div>
              <p>Dlhý popis</p>
              <TextareaAutosize
                value="<b>Zloženie</b>: 3 vrstvy 100 % bavlny, 1 cm konská hriva, 4 cm latexu, 1 cm
                    konská hriva, 3 vrstvy 100 % bavlny <br /> <b>Výška</b>: 18 cm Nosnosť matraca:
                    130 kg <br />
                    <b>Hmotnosť matraca</b>: od 19 kg (veľkosť 90x200 cm) do 40 kg (veľkosť 200x200
                    cm) <br />
                    <b>Tvrdosť matraca</b>: najmäkší matrac <br /> <b>Bavlna</b>: Je hlavnou
                    súčasťoutradičného japonského futonu. Je pevná, tvrdá a priedušná. Dobre fixuje
                    chrbát. Je hygienická vďaka tomu, že rýchlo schne. Extrémne vysoká gramáž
                    1000g/m². Vo vnútri futonuje spracovaná ihlovým strojom a stlačená. <br />{' '}
                    <b>Latexová vrstva</b>: Zvyšuje pružnosť a mäkkosť matraca. Je ideálna aj pokiaľ
                    budete na matraci často sedieť.
                    <br /> <b>Zloženie</b>: 80 % prírodný kaučuk a 20 % umelý kaučuk.
                    <br /> <b> Konská hriva</b>: Dodáva matracu skvelé vlastnosti. Je vzdušná,
                    ľahká, výborne odvádza vlhkosť. Matrac s konskou hrivou je odolný voči plesniam
                    a baktériám. Konská hriva sa získava zastrihávaním koncov konskej hrivy. <br />{' '}
                    <b>Povrch matraca a gramáž</b>: bavlnené rúno 300g/m² <br />{' '}
                    <b>Certifikácia tkanín matraca</b>: Eko-tex <br /> <b>Značka Matraca</b>:
                    Nejfuton – Česká republika <br /> <b>Cena za dopravu</b>: malá zásielka: 5 €,
                    stredná zásielka:12 €, veľká zásielka: 20 € <br /> <b>Doprava</b>: prepravnou
                    spoločnosťou TOPTRANS <br /> <b>Osobný odber</b>: v Košiciach po dohode <br />{' '}
                    <b>Platba</b>: dobierkou alebo prevodom na účet"
              />
            </div>
            <div>
              <p>Cena</p>
              <TextareaAutosize value="599,00 €" />
            </div>
            <div>
              <p>Typ</p>
              <TextareaAutosize value="doplnok" />
            </div>
            <div>
              <p>Obrázky</p>
              <div className="AdminProducts-imageUpload">
                <h2>Aktuálne súbory</h2>
                <ul>
                  {this.state.images.map((img) => (
                    <li key={img.name}>
                      {img.name} - {img.size / 1000000} mb <Button text="odstrániť" />
                    </li>
                  ))}
                </ul>
                <ImageUploader
                  withIcon
                  buttonText="Nahrajte sem obrázky"
                  onChange={this.addImage}
                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880}
                />
                <h2>Nahrané súbory</h2>
                <ul>
                  {this.state.images.map((img, index) => (
                    <li key={img.name}>
                      {img.name} - {img.size / 1000000} mb{' '}
                      <Button onClick={() => this.removeImage(index)} text="odstrániť" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="AdminProducts-saveButton">
              <p />
              <Button text="Uložiť" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AdminOneProduct;
