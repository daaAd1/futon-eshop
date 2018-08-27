import React from 'react';
import ReactTable from 'react-table';
import CartItem from '../CartItem';
import { deleteIcon } from '../../icons';
import '../../styles/admin/AdminOrders.css';

class AdminOrders extends React.Component {
  render() {
    const data = [
      {
        id: '1',
        name: 'Dezider Korikovskij',
        email: 'deziderkorikovskij@hotmail.com',
        telephone: '+421901901901',
        totalPrice: '599,00 €',
        state: 'SK',
        city: 'Nove mesto nad Vahom',
        address: 'Trojokovskeho 2, 04001',
        payment: 'dobierka',
        note:
          '3 poschodie 3 poschodie 3 poschodie 3 poschodie 3 poschodie 3 poschodie 3 poschodie 3 poschodie 3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie 3 poschodie 3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie',
      },
      {
        id: '1',
        name: 'Jozef Korikov',
        email: 'jozefkorikov@email.com',
        telephone: '+421901901901',
        totalPrice: '199,00 €',
        state: 'SK',
        city: 'Bardejov',
        address: 'Kosicka 2, 04001',
        payment: 'prevodom',
        note:
          '3 poschodie 3 poschodie 3 poschodie 3 poschodie 3 poschodie 3 poschodie 3 poschodie 3 poschodie 3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie 3 poschodie 3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie',
      },
    ];

    const columns = [
      {
        Header: 'id',
        accessor: 'id',
        maxWidth: 50,
      },
      {
        Header: 'Meno',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
        //accessor: (d) => d.friend.name, // Custom value accessors!
      },
      {
        //Header: (props) => <span>Friend Age</span>, // Custom header components!
        Header: 'Tel. č',
        accessor: 'telephone',
      },
      {
        //Header: (props) => <span>Friend Age</span>, // Custom header components!
        Header: 'Cena celkovo',
        accessor: 'totalPrice',
        maxWidth: 120,
      },
      // {
      //   Header: 'Štát',
      //   accessor: 'state',
      //   maxWidth: 60,
      // },
      // {
      //   Header: 'Mesto',
      //   accessor: 'city',
      // },
      // {
      //   Header: 'Adresa',
      //   accessor: 'address',
      // },
      // {
      //   Header: 'Platba',
      //   accessor: 'payment',
      //   maxWidth: 100,
      // },
      {
        Header: 'Poznámka',
        accessor: 'note',
        maxWidth: 110,
      },
      {
        Header: '',
        Cell: <button className="AdminOrders-deleteButton">{deleteIcon}</button>, // Custom cell components!
        maxWidth: 50,
      },
    ];
    return (
      <div className="AdminOrders">
        <h1>Objednávky</h1>
        <ReactTable
          data={data}
          columns={columns}
          minRows="10"
          style={{
            textAlign: 'center',
          }}
          SubComponent={(row) => {
            return (
              <div className="AdminOrders-orderInfo">
                <div>
                  <p>id</p>
                  <p>1</p>
                </div>
                <div>
                  <p>Tovar</p>
                  <div>
                    <CartItem
                      image={false}
                      type="readOnly"
                      price="99"
                      itemQuantity="1"
                      name="Matrac hriva-latex"
                    />{' '}
                    <CartItem
                      image={false}
                      type="readOnly"
                      price="199"
                      itemQuantity="3"
                      name="Matrac vlna-hriva-latex"
                    />{' '}
                    <CartItem
                      image={false}
                      type="readOnly"
                      price="299"
                      itemQuantity="2"
                      name="Bavlnený matrac s vrstvou kokosu a peny"
                    />
                    <div className="Cart-totalPrice">
                      <p>Cena celkovo:</p> <p>599,00 €</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p>Meno</p>
                  <p>Jozef Korikov</p>
                </div>
                <div>
                  <p>Email</p>
                  <p>jozefkorikov@gotmaaldked.com</p>
                </div>
                <div>
                  <p>Tel. č</p>
                  <p>+42191019101</p>
                </div>
                <div>
                  <p>Štát</p>
                  <p>SK</p>
                </div>
                <div>
                  <p>Mesto</p>
                  <p>Nove mesto nad vahom</p>
                </div>
                <div>
                  <p>Ulica</p>
                  <p>Kosicka9a311 20, 04001</p>
                </div>
                <div>
                  <p>Platba</p>
                  <p>dobierkou</p>
                </div>
                <div>
                  <p>Poznámka</p>
                  <p>
                    3 poschodie 3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3
                    poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3
                    poschodie3 poschodie3 poschodie3 poschodie 3 poschodie3 poschodie3 poschodie3
                    poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3
                    poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie 3
                    poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3
                    poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3
                    poschodie3 poschodie3 poschodie 3 poschodie3 poschodie3 poschodie3 poschodie3
                    poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3 poschodie3
                    poschodie3 poschodie3 poschodie3 poschodie3 poschodie
                  </p>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default AdminOrders;
