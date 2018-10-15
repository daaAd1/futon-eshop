import React from 'react';
import '../styles/admin/AdminAttributesFirstRow.css';

class AdminAttributesFirstRow extends React.Component {
  render() {
    return (
      <div className="AdminAttributesFirstRow">
        <p className="AdminAttributesFirstRow-small" />
        <p>Názov</p>
        <p>Typ</p>
        <p className="AdminAttributesFirstRow-small" />
      </div>
    );
  }
}

export default AdminAttributesFirstRow;
