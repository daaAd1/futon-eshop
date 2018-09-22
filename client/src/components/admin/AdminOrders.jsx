import React from 'react';
import ReactTable from 'react-table';
import CartItem from '../CartItem';
import { deleteIcon } from '../../icons';
import '../../styles/admin/AdminOrders.css';

class AdminOrders extends React.Component {
  render() {
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
            onClick={() => {
              fetch(`http://localhost:5000/order/${row.original._id}`, {
                method: 'DELETE',
                body: {},
                headers: {
                  'Content-Type': 'application/json; charset=utf-8',
                  'Access-Control-Allow-Methods': 'GET, POST, DELETE',
                },
              });
            }}
            className="AdminOrders-deleteButton"
          >
            {deleteIcon}
          </button>
        ), // Custom cell components!
        maxWidth: 50,
      },
    ];

    const { orders, isFetching } = this.props;
    const { items } = orders || {};

    return (
      <div className="AdminOrders">
        <h1>Objednávky</h1>
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
