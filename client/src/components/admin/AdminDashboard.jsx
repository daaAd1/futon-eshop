import React from 'react';
import '../../styles/admin/AdminDashboard.css';
import AdminMenu from './AdminMenu';

class AdminDashboard extends React.Component {
  render() {
    return (
      <div className="AdminDashboard">
        <AdminMenu />
      </div>
    );
  }
}

export default AdminDashboard;
