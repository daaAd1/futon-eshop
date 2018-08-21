import React from 'react';
import ReactTable from 'react-table';
import TextareaAutosize from 'react-textarea-autosize';
import Button from './Button';
import '../styles/components/AdminProducts.css';
import { deleteIcon } from '../icons';
import CartItem from './CartItem';
import ImageUploader from 'react-images-upload';

class AdminProducts extends React.Component {
  constructor() {
    super();
    this.state = { images: [] };

    this.onDrop = this.onDrop.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  removeImage(index) {
    const newState = this.state;
    newState.images.splice(index, 1);
    this.setState(newState);
  }

  onDrop(images) {
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

  handleExpandChange(newExpanded, index, event) {
    this.setState({
      expanded: newExpanded,
    });
  }

  render() {
    const data = [
      {
        id: '1',
        name: 'Matrac hriva-latex',
        smallDesc:
          'Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály a matrace z certifikovaných ekologických a šetrne získavaných konských hrív majú jedinečné vlastnosti. Výborne pohlcujú vlhkosť a znižujú množstvo roztočov v matraci. Preto sú vhodné aj pre alergikov. ',
        longDesc:
          '<b>Zloženie</b>: 3 vrstvy 100 % bavlny, 1 cm konská hriva, 4 cm latexu, 1 cm konská hriva,       3 vrstvy 100 % bavlny <br /> <b>Výška</b>: 18 cm Nosnosť matraca: 130 kg <br /><b>Hmotnosť matraca</b>: od 19 kg (veľkosť 90x200 cm) do 40 kg (veľkosť 200x200 cm) <br /><b>Tvrdosť matraca</b>: najmäkší matrac <br /> <b>Bavlna</b>: Je hlavnou súčasťoutradičného japonského futonu. Je pevná, tvrdá a priedušná. Dobre fixuje chrbát. Je hygienická vďaka tomu, že rýchlo schne. Extrémne vysoká gramáž 1000g/m². Vo vnútri futonuje spracovaná ihlovým strojom a stlačená.        <br /> <b>Latexová vrstva</b>: Zvyšuje pružnosť a mäkkosť matraca. Je ideálna aj pokiaľ        budete na matraci často sedieť.<br /> <b>Zloženie</b>: 80 % prírodný kaučuk a 20 % umelý        kaučuk.<br /> <b> Konská hriva</b>: Dodáva matracu skvelé vlastnosti. Je vzdušná, ľahká,        výborne odvádza vlhkosť. Matrac s konskou hrivou je odolný voči plesniam a baktériám.        Konská hriva sa získava zastrihávaním koncov konskej hrivy. <br />        <b>Povrch matraca a gramáž</b>: bavlnené rúno 300g/m² <br />        <b>Certifikácia tkanín matraca</b>: Eko-tex <br /> <b>Značka Matraca</b>: Nejfuton – Česká        republika <br /> <b>Cena za dopravu</b>: malá zásielka: 5 €, stredná zásielka:12 €, veľká        zásielka: 20 € <br /> <b>Doprava</b>: prepravnou spoločnosťou TOPTRANS <br />        <b>Osobný odber</b>: v Košiciach po dohode <br /> <b>Platba</b>: dobierkou alebo prevodomna účet',
        price: '599,00 €',
        type: 'doplnok',
        images: '1',
      },
      {
        id: '1',
        name: 'Jozef Korikov',
        email: 'jozefkorikov@email.com',
        telephone: '+421901901901',
        price: '199,00 €',
        type: 'postel',
        images: '2',
      },
    ];

    const columns = [
      {
        Header: 'id',
        accessor: 'id',
        maxWidth: 50,
      },
      {
        Header: 'Názov',
        accessor: 'name',
      },
      {
        Header: 'Krátky popis',
        accessor: 'smallDesc',
      },
      {
        Header: 'Dlhý popis',
        accessor: 'longDesc',
      },
      {
        Header: 'Cena',
        accessor: 'price',
        maxWidth: 120,
      },
      {
        Header: 'Typ',
        accessor: 'type',
        maxWidth: 100,
      },
      {
        Header: 'Obrázky',
        accessor: 'images',
        maxWidth: 110,
      },
      {
        Header: '',
        Cell: <button className="AdminOrders-deleteButton">{deleteIcon}</button>,
        maxWidth: 50,
      },
    ];

    const { expanded } = this.state;
    return (
      <div className="AdminProducts">
        <h1>Produkty</h1>
        <ReactTable
          data={data}
          columns={columns}
          minRows="10"
          style={{
            textAlign: 'center',
          }}
          expanded={expanded}
          onExpandedChange={(newExpanded, index, event) =>
            this.handleExpandChange(newExpanded, index, event)
          }
          SubComponent={(row) => {
            return (
              <div className="AdminProducts-orderInfo">
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
                    value="
                    Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály
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
                      onChange={this.onDrop}
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
            );
          }}
        />
      </div>
    );
  }
}

export default AdminProducts;
