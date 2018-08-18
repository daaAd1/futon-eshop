import React from 'react';
import '../styles/components/AdminDashboard.css';
import AdminMenu from './AdminMenu';

class AdminDashboard extends React.Component {
  render() {
    return (
      <div className="AdminDashboard">
        <AdminMenu />
        <h1>Admin rozhranie</h1>
      </div>
    );
  }
}

export default AdminDashboard;
