import React from 'react';
import ReactTable from 'react-table';
import { confirmAlert } from 'react-confirm-alert'; // Import
import CartItem from './CartItem';
import { deleteIcon } from '../icons';
import '../styles/admin/AdminOrders.css';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class AdminOrders extends React.Component {
  confirmAndRemoveOrder(id, removeFunction) {
    confirmAlert({
      title: 'Potvrďte vymazanie',
      message: 'Ste si istý, že chcete vymazať túto objednávku?',
      buttons: [
        {
          label: 'Áno',
          onClick: () => removeFunction(id),
        },
        {
          label: 'Nie',
          onClick: () => {},
        },
      ],
    });
  }

  render() {
    const { orders, isFetching, removeOrderFromList } = this.props;
    const { items } = orders || {};

    const columns = [
      {
        Header: 'id',
        accessor: 'id',
        maxWidth: 50,
      },
      {
        Header: 'Meno',
        accessor: 'customerName',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Tel. č',
        accessor: 'phone',
      },
      {
        Header: 'Cena celkovo',
        accessor: 'totalPrice',
        maxWidth: 120,
      },
      {
        Header: 'Poznámka',
        accessor: 'note',
        maxWidth: 110,
      },
      {
        Header: '',
        Cell: (row) => (
          <button
            // onClick={() => removeOrderFromList(row.original._id)}
            onClick={() => this.confirmAndRemoveOrder(row.original._id, removeOrderFromList)}
            className="AdminOrders-deleteButton"
          >
            {deleteIcon}
          </button>
        ), // Custom cell components!
        maxWidth: 50,
      },
    ];

    return (
      <div className="AdminOrders">
        <h1>Objednávky</h1>
        <h4>Celkový počet objednávok: {orders.count}</h4>
        <ReactTable
          data={items}
          columns={columns}
          minRows="5"
          style={{
            textAlign: 'center',
          }}
          loading={isFetching}
          SubComponent={(row) => {
            const {
              cart,
              customerName,
              email,
              phone,
              city,
              country,
              address,
              postalCode,
              paymentMethod,
              delivery,
              note,
            } = row.original;
            const cartItems = cart.map((item) => {
              <CartItem
                image={false}
                type="readOnly"
                price="99"
                itemQuantity="1"
                name="Matrac hriva-latex"
              />;
            });
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
                  <p>{customerName}</p>
                </div>
                <div>
                  <p>Email</p>
                  <p>{email}</p>
                </div>
                <div>
                  <p>Tel. č</p>
                  <p>{phone}</p>
                </div>
                <div>
                  <p>Štát</p>
                  <p>{country}</p>
                </div>
                <div>
                  <p>Mesto</p>
                  <p>{city}</p>
                </div>
                <div>
                  <p>Ulica</p>
                  <p>{address}</p>
                </div>
                <div>
                  <p>PSČ</p>
                  <p>{postalCode}</p>
                </div>
                <div>
                  <p>Platba</p>
                  <p>{paymentMethod}</p>
                </div>
                <div>
                  <p>Doprava</p>
                  <p>{delivery}</p>
                </div>
                <div>
                  <p>Poznámka</p>
                  <p>{note}</p>
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
