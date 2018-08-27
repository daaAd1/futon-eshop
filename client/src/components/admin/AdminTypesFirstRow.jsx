import React from 'react';
import '../../styles/admin/AdminTypesFirstRow.css';

class AdminTypesFirstRow extends React.Component {
  render() {
    return (
      <div className="AdminTypesFirstRow">
        <p className="AdminTypesFirstRow-small" />
        <p>Názov</p>
        <p className="AdminTypesFirstRow-small" />
      </div>
    );
  }
}

export default AdminTypesFirstRow;
