import React from 'react';
import '../styles/components/AdminAttributesOptionsFirstRow.css';

class AdminAttributesOptionsFirstRow extends React.Component {
  render() {
    return (
      <div className="AdminAttributesOptionsFirstRow">
        <p>Názov</p>
        <p>Cena</p>
        <p className="AdminAttributesOptionsFirstRow-small" />
      </div>
    );
  }
}

export default AdminAttributesOptionsFirstRow;
