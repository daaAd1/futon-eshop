import React from 'react';
import ReactTable from 'react-table';
import TextareaAutosize from 'react-textarea-autosize';
import ReactPaginate from 'react-paginate';
import Button from './Button';
import '../styles/components/AdminProducts.css';
import { deleteIconWhite } from '../icons';
import CartItem from './CartItem';
import ImageUploader from 'react-images-upload';
import AdminOneProduct from './AdminOneProduct';
import AdminProductsFirstRow from './AdminProductsFirstRow';

class AdminProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      isNewProductOpen: false,
      currentPage: 1,
      numOfProducts: 17,
      itemsPerPage: 5,
    };

    this.onDrop = this.onDrop.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.toggleNewProductForm = this.toggleNewProductForm.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
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

  removeImage(index) {
    const newState = this.state;
    newState.images.splice(index, 1);
    this.setState(newState);
  }

  handleExpandChange(newExpanded, index, event) {
    this.setState({
      expanded: newExpanded,
    });
  }

  toggleNewProductForm() {
    this.setState((prevState) => ({
      isNewProductOpen: !prevState.isNewProductOpen,
    }));
  }

  handlePreviousClick() {
    const { currentPage } = this.state;

    currentPage > 1
      ? this.setState({
          currentPage: currentPage - 1,
        })
      : null;
  }

  handleNextClick() {
    const { currentPage, numOfProducts, itemsPerPage } = this.state;

    currentPage < numOfProducts / itemsPerPage
      ? this.setState({
          currentPage: currentPage + 1,
        })
      : null;
  }

  render() {
    const data = [
      {
        id: '1',
        name: 'Matrac hriva-latex',
        shortDesc:
          'Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály a matrace z certifikovaných ekologických a šetrne získavaných konských hrív majú jedinečné vlastnosti. Výborne pohlcujú vlhkosť a znižujú množstvo roztočov v matraci. Preto sú vhodné aj pre alergikov. ',
        longDesc:
          '<b>Zloženie</b>: 3 vrstvy 100 % bavlny, 1 cm konská hriva, 4 cm latexu, 1 cm konská hriva,       3 vrstvy 100 % bavlny <br /> <b>Výška</b>: 18 cm Nosnosť matraca: 130 kg <br /><b>Hmotnosť matraca</b>: od 19 kg (veľkosť 90x200 cm) do 40 kg (veľkosť 200x200 cm) <br /><b>Tvrdosť matraca</b>: najmäkší matrac <br /> <b>Bavlna</b>: Je hlavnou súčasťoutradičného japonského futonu. Je pevná, tvrdá a priedušná. Dobre fixuje chrbát. Je hygienická vďaka tomu, že rýchlo schne. Extrémne vysoká gramáž 1000g/m². Vo vnútri futonuje spracovaná ihlovým strojom a stlačená.        <br /> <b>Latexová vrstva</b>: Zvyšuje pružnosť a mäkkosť matraca. Je ideálna aj pokiaľ        budete na matraci často sedieť.<br /> <b>Zloženie</b>: 80 % prírodný kaučuk a 20 % umelý        kaučuk.<br /> <b> Konská hriva</b>: Dodáva matracu skvelé vlastnosti. Je vzdušná, ľahká,        výborne odvádza vlhkosť. Matrac s konskou hrivou je odolný voči plesniam a baktériám.        Konská hriva sa získava zastrihávaním koncov konskej hrivy. <br />        <b>Povrch matraca a gramáž</b>: bavlnené rúno 300g/m² <br />        <b>Certifikácia tkanín matraca</b>: Eko-tex <br /> <b>Značka Matraca</b>: Nejfuton – Česká        republika <br /> <b>Cena za dopravu</b>: malá zásielka: 5 €, stredná zásielka:12 €, veľká        zásielka: 20 € <br /> <b>Doprava</b>: prepravnou spoločnosťou TOPTRANS <br />        <b>Osobný odber</b>: v Košiciach po dohode <br /> <b>Platba</b>: dobierkou alebo prevodomna účet',
        price: '599,00 €',
        type: 'doplnok',
        images: '1',
      },
      {
        id: '2',
        name: 'Jozef Korikov',
        email: 'jozefkorikov@email.com',
        telephone: '+421901901901',
        price: '199,00 €',
        type: 'postel',
        images: '2',
      },
      {
        id: '3',
        name: 'Matrac hriva-latex',
        shortDesc:
          'Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály a matrace z certifikovaných ekologických a šetrne získavaných konských hrív majú jedinečné vlastnosti. Výborne pohlcujú vlhkosť a znižujú množstvo roztočov v matraci. Preto sú vhodné aj pre alergikov. ',
        longDesc:
          '<b>Zloženie</b>: 3 vrstvy 100 % bavlny, 1 cm konská hriva, 4 cm latexu, 1 cm konská hriva,       3 vrstvy 100 % bavlny <br /> <b>Výška</b>: 18 cm Nosnosť matraca: 130 kg <br /><b>Hmotnosť matraca</b>: od 19 kg (veľkosť 90x200 cm) do 40 kg (veľkosť 200x200 cm) <br /><b>Tvrdosť matraca</b>: najmäkší matrac <br /> <b>Bavlna</b>: Je hlavnou súčasťoutradičného japonského futonu. Je pevná, tvrdá a priedušná. Dobre fixuje chrbát. Je hygienická vďaka tomu, že rýchlo schne. Extrémne vysoká gramáž 1000g/m². Vo vnútri futonuje spracovaná ihlovým strojom a stlačená.        <br /> <b>Latexová vrstva</b>: Zvyšuje pružnosť a mäkkosť matraca. Je ideálna aj pokiaľ        budete na matraci často sedieť.<br /> <b>Zloženie</b>: 80 % prírodný kaučuk a 20 % umelý        kaučuk.<br /> <b> Konská hriva</b>: Dodáva matracu skvelé vlastnosti. Je vzdušná, ľahká,        výborne odvádza vlhkosť. Matrac s konskou hrivou je odolný voči plesniam a baktériám.        Konská hriva sa získava zastrihávaním koncov konskej hrivy. <br />        <b>Povrch matraca a gramáž</b>: bavlnené rúno 300g/m² <br />        <b>Certifikácia tkanín matraca</b>: Eko-tex <br /> <b>Značka Matraca</b>: Nejfuton – Česká        republika <br /> <b>Cena za dopravu</b>: malá zásielka: 5 €, stredná zásielka:12 €, veľká        zásielka: 20 € <br /> <b>Doprava</b>: prepravnou spoločnosťou TOPTRANS <br />        <b>Osobný odber</b>: v Košiciach po dohode <br /> <b>Platba</b>: dobierkou alebo prevodomna účet',
        price: '599,00 €',
        type: 'doplnok',
        images: '1',
      },
      {
        id: '4',
        name: 'Jozef Korikov',
        email: 'jozefkorikov@email.com',
        telephone: '+421901901901',
        price: '199,00 €',
        type: 'postel',
        images: '2',
      },
      {
        id: '5',
        name: 'Matrac hriva-latex',
        shortDesc:
          'Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály a matrace z certifikovaných ekologických a šetrne získavaných konských hrív majú jedinečné vlastnosti. Výborne pohlcujú vlhkosť a znižujú množstvo roztočov v matraci. Preto sú vhodné aj pre alergikov. ',
        longDesc:
          '<b>Zloženie</b>: 3 vrstvy 100 % bavlny, 1 cm konská hriva, 4 cm latexu, 1 cm konská hriva,       3 vrstvy 100 % bavlny <br /> <b>Výška</b>: 18 cm Nosnosť matraca: 130 kg <br /><b>Hmotnosť matraca</b>: od 19 kg (veľkosť 90x200 cm) do 40 kg (veľkosť 200x200 cm) <br /><b>Tvrdosť matraca</b>: najmäkší matrac <br /> <b>Bavlna</b>: Je hlavnou súčasťoutradičného japonského futonu. Je pevná, tvrdá a priedušná. Dobre fixuje chrbát. Je hygienická vďaka tomu, že rýchlo schne. Extrémne vysoká gramáž 1000g/m². Vo vnútri futonuje spracovaná ihlovým strojom a stlačená.        <br /> <b>Latexová vrstva</b>: Zvyšuje pružnosť a mäkkosť matraca. Je ideálna aj pokiaľ        budete na matraci často sedieť.<br /> <b>Zloženie</b>: 80 % prírodný kaučuk a 20 % umelý        kaučuk.<br /> <b> Konská hriva</b>: Dodáva matracu skvelé vlastnosti. Je vzdušná, ľahká,        výborne odvádza vlhkosť. Matrac s konskou hrivou je odolný voči plesniam a baktériám.        Konská hriva sa získava zastrihávaním koncov konskej hrivy. <br />        <b>Povrch matraca a gramáž</b>: bavlnené rúno 300g/m² <br />        <b>Certifikácia tkanín matraca</b>: Eko-tex <br /> <b>Značka Matraca</b>: Nejfuton – Česká        republika <br /> <b>Cena za dopravu</b>: malá zásielka: 5 €, stredná zásielka:12 €, veľká        zásielka: 20 € <br /> <b>Doprava</b>: prepravnou spoločnosťou TOPTRANS <br />        <b>Osobný odber</b>: v Košiciach po dohode <br /> <b>Platba</b>: dobierkou alebo prevodomna účet',
        price: '599,00 €',
        type: 'doplnok',
        images: '1',
      },
      {
        id: '6',
        name: 'Jozef Korikov',
        email: 'jozefkorikov@email.com',
        telephone: '+421901901901',
        price: '199,00 €',
        type: 'postel',
        images: '2',
      },
      {
        id: '7',
        name: 'Matrac hriva-latex',
        shortDesc:
          'Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály a matrace z certifikovaných ekologických a šetrne získavaných konských hrív majú jedinečné vlastnosti. Výborne pohlcujú vlhkosť a znižujú množstvo roztočov v matraci. Preto sú vhodné aj pre alergikov. ',
        longDesc:
          '<b>Zloženie</b>: 3 vrstvy 100 % bavlny, 1 cm konská hriva, 4 cm latexu, 1 cm konská hriva,       3 vrstvy 100 % bavlny <br /> <b>Výška</b>: 18 cm Nosnosť matraca: 130 kg <br /><b>Hmotnosť matraca</b>: od 19 kg (veľkosť 90x200 cm) do 40 kg (veľkosť 200x200 cm) <br /><b>Tvrdosť matraca</b>: najmäkší matrac <br /> <b>Bavlna</b>: Je hlavnou súčasťoutradičného japonského futonu. Je pevná, tvrdá a priedušná. Dobre fixuje chrbát. Je hygienická vďaka tomu, že rýchlo schne. Extrémne vysoká gramáž 1000g/m². Vo vnútri futonuje spracovaná ihlovým strojom a stlačená.        <br /> <b>Latexová vrstva</b>: Zvyšuje pružnosť a mäkkosť matraca. Je ideálna aj pokiaľ        budete na matraci často sedieť.<br /> <b>Zloženie</b>: 80 % prírodný kaučuk a 20 % umelý        kaučuk.<br /> <b> Konská hriva</b>: Dodáva matracu skvelé vlastnosti. Je vzdušná, ľahká,        výborne odvádza vlhkosť. Matrac s konskou hrivou je odolný voči plesniam a baktériám.        Konská hriva sa získava zastrihávaním koncov konskej hrivy. <br />        <b>Povrch matraca a gramáž</b>: bavlnené rúno 300g/m² <br />        <b>Certifikácia tkanín matraca</b>: Eko-tex <br /> <b>Značka Matraca</b>: Nejfuton – Česká        republika <br /> <b>Cena za dopravu</b>: malá zásielka: 5 €, stredná zásielka:12 €, veľká        zásielka: 20 € <br /> <b>Doprava</b>: prepravnou spoločnosťou TOPTRANS <br />        <b>Osobný odber</b>: v Košiciach po dohode <br /> <b>Platba</b>: dobierkou alebo prevodomna účet',
        price: '599,00 €',
        type: 'doplnok',
        images: '1',
      },
      {
        id: '8',
        name: 'Jozef Korikov',
        email: 'jozefkorikov@email.com',
        telephone: '+421901901901',
        price: '199,00 €',
        type: 'postel',
        images: '2',
      },
      {
        id: '9',
        name: 'Matrac hriva-latex',
        shortDesc:
          'Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály a matrace z certifikovaných ekologických a šetrne získavaných konských hrív majú jedinečné vlastnosti. Výborne pohlcujú vlhkosť a znižujú množstvo roztočov v matraci. Preto sú vhodné aj pre alergikov. ',
        longDesc:
          '<b>Zloženie</b>: 3 vrstvy 100 % bavlny, 1 cm konská hriva, 4 cm latexu, 1 cm konská hriva,       3 vrstvy 100 % bavlny <br /> <b>Výška</b>: 18 cm Nosnosť matraca: 130 kg <br /><b>Hmotnosť matraca</b>: od 19 kg (veľkosť 90x200 cm) do 40 kg (veľkosť 200x200 cm) <br /><b>Tvrdosť matraca</b>: najmäkší matrac <br /> <b>Bavlna</b>: Je hlavnou súčasťoutradičného japonského futonu. Je pevná, tvrdá a priedušná. Dobre fixuje chrbát. Je hygienická vďaka tomu, že rýchlo schne. Extrémne vysoká gramáž 1000g/m². Vo vnútri futonuje spracovaná ihlovým strojom a stlačená.        <br /> <b>Latexová vrstva</b>: Zvyšuje pružnosť a mäkkosť matraca. Je ideálna aj pokiaľ        budete na matraci často sedieť.<br /> <b>Zloženie</b>: 80 % prírodný kaučuk a 20 % umelý        kaučuk.<br /> <b> Konská hriva</b>: Dodáva matracu skvelé vlastnosti. Je vzdušná, ľahká,        výborne odvádza vlhkosť. Matrac s konskou hrivou je odolný voči plesniam a baktériám.        Konská hriva sa získava zastrihávaním koncov konskej hrivy. <br />        <b>Povrch matraca a gramáž</b>: bavlnené rúno 300g/m² <br />        <b>Certifikácia tkanín matraca</b>: Eko-tex <br /> <b>Značka Matraca</b>: Nejfuton – Česká        republika <br /> <b>Cena za dopravu</b>: malá zásielka: 5 €, stredná zásielka:12 €, veľká        zásielka: 20 € <br /> <b>Doprava</b>: prepravnou spoločnosťou TOPTRANS <br />        <b>Osobný odber</b>: v Košiciach po dohode <br /> <b>Platba</b>: dobierkou alebo prevodomna účet',
        price: '599,00 €',
        type: 'doplnok',
        images: '1',
      },
      {
        id: '10',
        name: 'Jozef Korikov',
        email: 'jozefkorikov@email.com',
        telephone: '+421901901901',
        price: '199,00 €',
        type: 'postel',
        images: '2',
      },
      {
        id: '11',
        name: 'Matrac hriva-latex',
        shortDesc:
          'Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály a matrace z certifikovaných ekologických a šetrne získavaných konských hrív majú jedinečné vlastnosti. Výborne pohlcujú vlhkosť a znižujú množstvo roztočov v matraci. Preto sú vhodné aj pre alergikov. ',
        longDesc:
          '<b>Zloženie</b>: 3 vrstvy 100 % bavlny, 1 cm konská hriva, 4 cm latexu, 1 cm konská hriva,       3 vrstvy 100 % bavlny <br /> <b>Výška</b>: 18 cm Nosnosť matraca: 130 kg <br /><b>Hmotnosť matraca</b>: od 19 kg (veľkosť 90x200 cm) do 40 kg (veľkosť 200x200 cm) <br /><b>Tvrdosť matraca</b>: najmäkší matrac <br /> <b>Bavlna</b>: Je hlavnou súčasťoutradičného japonského futonu. Je pevná, tvrdá a priedušná. Dobre fixuje chrbát. Je hygienická vďaka tomu, že rýchlo schne. Extrémne vysoká gramáž 1000g/m². Vo vnútri futonuje spracovaná ihlovým strojom a stlačená.        <br /> <b>Latexová vrstva</b>: Zvyšuje pružnosť a mäkkosť matraca. Je ideálna aj pokiaľ        budete na matraci často sedieť.<br /> <b>Zloženie</b>: 80 % prírodný kaučuk a 20 % umelý        kaučuk.<br /> <b> Konská hriva</b>: Dodáva matracu skvelé vlastnosti. Je vzdušná, ľahká,        výborne odvádza vlhkosť. Matrac s konskou hrivou je odolný voči plesniam a baktériám.        Konská hriva sa získava zastrihávaním koncov konskej hrivy. <br />        <b>Povrch matraca a gramáž</b>: bavlnené rúno 300g/m² <br />        <b>Certifikácia tkanín matraca</b>: Eko-tex <br /> <b>Značka Matraca</b>: Nejfuton – Česká        republika <br /> <b>Cena za dopravu</b>: malá zásielka: 5 €, stredná zásielka:12 €, veľká        zásielka: 20 € <br /> <b>Doprava</b>: prepravnou spoločnosťou TOPTRANS <br />        <b>Osobný odber</b>: v Košiciach po dohode <br /> <b>Platba</b>: dobierkou alebo prevodomna účet',
        price: '599,00 €',
        type: 'doplnok',
        images: '1',
      },
      {
        id: '12',
        name: 'Jozef Korikov',
        email: 'jozefkorikov@email.com',
        telephone: '+421901901901',
        price: '199,00 €',
        type: 'postel',
        images: '2',
      },
      {
        id: '13',
        name: 'Matrac hriva-latex',
        shortDesc:
          'Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály a matrace z certifikovaných ekologických a šetrne získavaných konských hrív majú jedinečné vlastnosti. Výborne pohlcujú vlhkosť a znižujú množstvo roztočov v matraci. Preto sú vhodné aj pre alergikov. ',
        longDesc:
          '<b>Zloženie</b>: 3 vrstvy 100 % bavlny, 1 cm konská hriva, 4 cm latexu, 1 cm konská hriva,       3 vrstvy 100 % bavlny <br /> <b>Výška</b>: 18 cm Nosnosť matraca: 130 kg <br /><b>Hmotnosť matraca</b>: od 19 kg (veľkosť 90x200 cm) do 40 kg (veľkosť 200x200 cm) <br /><b>Tvrdosť matraca</b>: najmäkší matrac <br /> <b>Bavlna</b>: Je hlavnou súčasťoutradičného japonského futonu. Je pevná, tvrdá a priedušná. Dobre fixuje chrbát. Je hygienická vďaka tomu, že rýchlo schne. Extrémne vysoká gramáž 1000g/m². Vo vnútri futonuje spracovaná ihlovým strojom a stlačená.        <br /> <b>Latexová vrstva</b>: Zvyšuje pružnosť a mäkkosť matraca. Je ideálna aj pokiaľ        budete na matraci často sedieť.<br /> <b>Zloženie</b>: 80 % prírodný kaučuk a 20 % umelý        kaučuk.<br /> <b> Konská hriva</b>: Dodáva matracu skvelé vlastnosti. Je vzdušná, ľahká,        výborne odvádza vlhkosť. Matrac s konskou hrivou je odolný voči plesniam a baktériám.        Konská hriva sa získava zastrihávaním koncov konskej hrivy. <br />        <b>Povrch matraca a gramáž</b>: bavlnené rúno 300g/m² <br />        <b>Certifikácia tkanín matraca</b>: Eko-tex <br /> <b>Značka Matraca</b>: Nejfuton – Česká        republika <br /> <b>Cena za dopravu</b>: malá zásielka: 5 €, stredná zásielka:12 €, veľká        zásielka: 20 € <br /> <b>Doprava</b>: prepravnou spoločnosťou TOPTRANS <br />        <b>Osobný odber</b>: v Košiciach po dohode <br /> <b>Platba</b>: dobierkou alebo prevodomna účet',
        price: '599,00 €',
        type: 'doplnok',
        images: '1',
      },
      {
        id: '14',
        name: 'Jozef Korikov',
        email: 'jozefkorikov@email.com',
        telephone: '+421901901901',
        price: '199,00 €',
        type: 'postel',
        images: '2',
      },
      {
        id: '15',
        name: 'Matrac hriva-latex',
        shortDesc:
          'Futon Kami patrí medzi mäkké futony. Konská hriva patrí medzi luxusné materiály a matrace z certifikovaných ekologických a šetrne získavaných konských hrív majú jedinečné vlastnosti. Výborne pohlcujú vlhkosť a znižujú množstvo roztočov v matraci. Preto sú vhodné aj pre alergikov. ',
        longDesc:
          '<b>Zloženie</b>: 3 vrstvy 100 % bavlny, 1 cm konská hriva, 4 cm latexu, 1 cm konská hriva,       3 vrstvy 100 % bavlny <br /> <b>Výška</b>: 18 cm Nosnosť matraca: 130 kg <br /><b>Hmotnosť matraca</b>: od 19 kg (veľkosť 90x200 cm) do 40 kg (veľkosť 200x200 cm) <br /><b>Tvrdosť matraca</b>: najmäkší matrac <br /> <b>Bavlna</b>: Je hlavnou súčasťoutradičného japonského futonu. Je pevná, tvrdá a priedušná. Dobre fixuje chrbát. Je hygienická vďaka tomu, že rýchlo schne. Extrémne vysoká gramáž 1000g/m². Vo vnútri futonuje spracovaná ihlovým strojom a stlačená.        <br /> <b>Latexová vrstva</b>: Zvyšuje pružnosť a mäkkosť matraca. Je ideálna aj pokiaľ        budete na matraci často sedieť.<br /> <b>Zloženie</b>: 80 % prírodný kaučuk a 20 % umelý        kaučuk.<br /> <b> Konská hriva</b>: Dodáva matracu skvelé vlastnosti. Je vzdušná, ľahká,        výborne odvádza vlhkosť. Matrac s konskou hrivou je odolný voči plesniam a baktériám.        Konská hriva sa získava zastrihávaním koncov konskej hrivy. <br />        <b>Povrch matraca a gramáž</b>: bavlnené rúno 300g/m² <br />        <b>Certifikácia tkanín matraca</b>: Eko-tex <br /> <b>Značka Matraca</b>: Nejfuton – Česká        republika <br /> <b>Cena za dopravu</b>: malá zásielka: 5 €, stredná zásielka:12 €, veľká        zásielka: 20 € <br /> <b>Doprava</b>: prepravnou spoločnosťou TOPTRANS <br />        <b>Osobný odber</b>: v Košiciach po dohode <br /> <b>Platba</b>: dobierkou alebo prevodomna účet',
        price: '599,00 €',
        type: 'doplnok',
        images: '1',
      },
      {
        id: '16',
        name: 'Jozef Korikov',
        email: 'jozefkorikov@email.com',
        telephone: '+421901901901',
        price: '199,00 €',
        type: 'postel',
        images: '2',
      },
      {
        id: '17',
        name: 'Jozef Korikov',
        email: 'jozefkorikov@email.com',
        telephone: '+421901901901',
        price: '199,00 €',
        type: 'postel',
        images: '2',
      },
    ];

    const { expanded, isNewProductOpen, currentPage, numOfProducts, itemsPerPage } = this.state;
    const products = data.map((product, index) => {
      const rows = [];
      if (
        product.id <= currentPage * itemsPerPage &&
        product.id >= currentPage * itemsPerPage - (itemsPerPage - 1)
      ) {
        rows.push(
          <AdminOneProduct
            id={product.id}
            name={product.name}
            shortDesc={product.shortDesc}
            longDesc={product.longDesc}
            price={product.price}
            type={product.type}
          />,
        );
      }
      if (
        product.id === numOfProducts.toString() &&
        product.id <= currentPage * itemsPerPage &&
        product.id >= currentPage * itemsPerPage - (itemsPerPage - 1)
      ) {
        const numOfAdditionalRowsNeeded = currentPage * itemsPerPage - numOfProducts;
        for (let numOfEmptyRows = 0; numOfEmptyRows < numOfAdditionalRowsNeeded; numOfEmptyRows++) {
          rows.push(<AdminOneProduct id="" name="" shortDesc="" longDesc="" price="" type="" />);
        }
      }
      return rows;
    });

    return (
      <div className="AdminProducts">
        <div className="AdminProducts-header">
          <h1>Produkty</h1>
          <Button onClick={this.toggleNewProductForm} text="Nový produkt" />
        </div>
        {isNewProductOpen && (
          <div className="AdminProducts-productInfo swing-in-top-bck">
            <div>
              <p>Názov</p>
              <TextareaAutosize />
            </div>
            <div>
              <p>Krátky popis</p>
              <TextareaAutosize value="" />
            </div>
            <div>
              <p>Dlhý popis</p>
              <TextareaAutosize />
            </div>
            <div>
              <p>Cena</p>
              <TextareaAutosize />
            </div>
            <div>
              <p>Typ</p>
              <TextareaAutosize />
            </div>
            <div>
              <p>Obrázky</p>
              <div className="AdminProducts-imageUpload">
                <ImageUploader
                  withIcon
                  buttonText="Nahrajte sem obrázky"
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880}
                />
                <h2>Nahrané súbory</h2>
                <ul className="AdminProducts-uploadedImages">
                  {this.state.images.map((img, index) => (
                    <li key={img.name}>
                      {img.name} - {img.size / 1000000} mb{' '}
                      <Button onClick={() => this.removeImage(index)} text={deleteIconWhite} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="AdminProducts-saveButton">
              <p />
              <Button text="Vytvoriť produkt" />
            </div>
          </div>
        )}
        <div className="AdminProducts-gridContainer">
          <AdminProductsFirstRow />
          {products}
          <div className="AdminProducts-navButtons">
            <Button type="secondary" onClick={this.handlePreviousClick} text="< " />
            <Button type="secondary" onClick={this.handleNextClick} text=" >" />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProducts;
