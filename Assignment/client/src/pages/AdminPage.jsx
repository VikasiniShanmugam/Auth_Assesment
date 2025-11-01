export default function AdminPage() {
  return (
    <div className="container">
      <h1 className="page-title">Admin Control Panel</h1>
      <div className="grid">
        <div className="card">
          <h3 className="card-title">User Management</h3>
          <p>Manage user accounts, roles, and permissions.</p>
        </div>
        <div className="card">
          <h3 className="card-title">System Settings</h3>
          <p>Configure application settings and preferences.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Audit Logs</h3>
          <p>Review system activity and security logs.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Statistics</h3>
          <p>View system analytics and usage statistics.</p>
        </div>
      </div>
    </div>
  );
}
