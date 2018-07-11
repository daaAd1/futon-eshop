import React from 'react';
import '../styles/components/FooterMenu.css';

class FooterMenu extends React.Component {
  render() {
    return (
      <div className="FooterMenu">
        <a href="/otazky/">Najčastejšie otázky</a>
        <a href="/kontakt/">Kontakt</a>
        <a href="/doprava/">Doprava a platba</a>
        <a href="/podmienky/">Obchodné podmienky</a>
      </div>
    );
  }
}

export default FooterMenu;
