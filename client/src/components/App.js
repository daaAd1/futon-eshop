import React, { Component } from 'react';
import '../styles/components/App.css';
import ProductGeneralUI from './ProductGeneralUI';
import ProductListGeneralUI from './ProductListGeneralUI';
import HeaderMenu from './HeaderMenu';
import FooterMenu from './FooterMenu';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderMenu />
        <div className="App-container">
          <ProductListGeneralUI categoryName="Futony" />
          <Form />
          <ProductGeneralUI
            name="Matrac hriva - latex"
            price="100,00"
            smallDesc="Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály a
          matrace z certifikovaných ekologických a šetrne získavaných konských hrív majú jedinečné
          vlastnosti. Výborne pohlcujú vlhkosť a znižujú množstvo roztočov v matraci. Preto sú
          vhodné aj pre alergikov."
            longDesc="<b>Zloženie</b>: 3 vrstvy 100 % bavlny, 1 cm konská hriva, 4 cm latexu, 1 cm konská hriva,
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
          na účet"
          />
        </div>
        <FooterMenu />
      </div>
    );
  }
}

export default App;
