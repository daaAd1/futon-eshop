import React from 'react';
import '../styles/components/AdminProductsFirstRow.css';

class AdminProductsFirstRow extends React.Component {
  render() {
    return (
      <div className="AdminProductFirstRow">
        <p className="AdminProductFirstRow-small" />
        <p className="AdminProductFirstRow-small">id</p>
        <p>Názov</p>
        <p>Krátky popis</p>
        <p>Dlhý popis</p>
        <p>Cena</p>
        <p>Typ</p>
        <p className="AdminProductFirstRow-small" />
      </div>
    );
  }
}

export default AdminProductsFirstRow;
