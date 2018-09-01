import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import '../styles/components/App.css';
import 'react-table/react-table.css';
import * as routes from '../routes';
import HeaderMenuContainer from '../containers/HeaderMenuContainer';
import FooterMenu from './FooterMenu';
import OrderForm from './OrderForm';
import Home from './Home';
import CartPage from './CartPage';
import ShowRoom from './ShowRoom';
import InformationPage from './InformationPage';
import AdminDashboard from './admin/AdminDashboard';
import AdminProducts from './admin/AdminProducts';
import AdminOrders from './admin/AdminOrders';
import AdminAttributes from './admin/AdminAttributes';
import AdminTypes from './admin/AdminTypes';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <AdminDashboard />
          <Route exact path={routes.ADMIN_ORDERS} component={() => <AdminOrders />} />
          <Route exact path={routes.ADMIN_PRODUCTS} component={() => <AdminProducts />} />
          <Route exact path={routes.ADMIN_TYPES} component={() => <AdminTypes />} />
          <Route exact path={routes.ADMIN_ATTRIBUTES} component={() => <AdminAttributes />} />
          <HeaderMenuContainer />
          <Route exact path={routes.HOME} component={() => <Home />} />
          <Route exact path={routes.CART} component={() => <CartPage totalPrice="599" />} />
          <Route exact path={routes.CHECKOUT} component={() => <OrderForm />} />
          <Route exact path={routes.SHOWROOM} component={() => <ShowRoom />} />
          <Route exact path={routes.FAQ} component={() => <InformationPage text="faq" />} />
          <Route
            exact
            path={routes.CONTACT}
            component={() => (
              <InformationPage
                text="
Showroom Košice
 

Radi Vás privítame v našej vzorkovej predajni, kde si môžete vyskúšať futony a pozrieť rozkladacie pohovky a postele.



Ak máte záujem stretnúť sa v našom showroome, zavolajte prosím deň vopred na tel. 0904 013 837, aby sme si dohodli stretnutie, keďže tam nie sme vždy prítomní..



Nájdete nás:



Slovenská 10/A (budova Vodoarm, 1. poschodie)

040 01 Košice 

Mapa tu



Otváracie hodiny:

PO-PI  9.00 – 17.00

SO       9.00 – 13.00



Otázky a objednávky môžete zasielať na mail info@matrace-futony.sk



alebo nás môžete kontaktovať na telefónnom čísle +421 904 013 837.

 

Showroom Košice

 

 

O firme
 

Matrace-futony.sk je on-line obchod pre Váš zdravý spánok. 

Prinášame kvalitný a prehľadne riešený e-shop pre pohodlný nákup. Pri tovare nájdete všetky informácie. V Blogu sa o futonoch dočítate veľa faktov o tomto obľúbenom japonskom matraci. Tovar je zaradený do štyroch základných skupín: Pohovky, Postele, Futony a Doplnky.



Textilný tovar predávaný v našom e-shope má dlhoročnú tradíciu už od roku 1994 a je obľúbeným sortimentom pre mnoho krajín západnej Európy. Textílie sú vyrábané z materiálov podliehajúcim vysokým štandardom kvality certifikátu eko-tex.



Sme Vám plne k dispozícii k Vašej spokojnosti. Radi obratom zodpovieme akékoľvek otázky spojené s výberom ideálneho futonu. Poradíme, predvedieme, privezieme.
 

Kontakt
 

TOP DETAIL s.r.o.

Baltická 1359/2

040 12 Košice

Slovenská republika

Slovenská republika



tel: +421 0904 013 837

email: info@matrace-futony.sk



Fakturačné údaje



TOP DETAIL s.r.o.Baltická 1359/2040 12 KošiceSlovenská republika tel: +421 0911 013 837email: info@matrace-futony.sk IČO: 47 133 899DIČ: 20 23 76 76 03
TOP DETAIL s.r.o.

Baltická 1359/2

040 12 Košice 

Slovenská republika

IČO: 47 133 899

DIČ: 20 23 76 76 03

 

Číslo účtu:

SK0675000000004018026864"
              />
            )}
          />
          <Route
            exact
            path={routes.SHIPPING}
            component={() => <InformationPage text="shipping" />}
          />
          <Route exact path={routes.TERMS} component={() => <InformationPage text="terms" />} />
          <FooterMenu />
        </div>
      </HashRouter>
    );
  }
}

export default App;
