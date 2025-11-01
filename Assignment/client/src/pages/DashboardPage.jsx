export default function DashboardPage() {
  return (
    <div className="container">
      <h1 className="page-title">Dashboard</h1>
      <div className="grid">
        <div className="card">
          <h3 className="card-title">Quick Actions</h3>
          <p>Welcome to your dashboard. Use the navigation menu to access different sections based on your role.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Recent Activity</h3>
          <p>Your recent actions and updates will appear here.</p>
        </div>
        <div className="card">
          <h3 className="card-title">System Status</h3>
          <p>All systems are operational.</p>
        </div>
      </div>
    </div>
  );
}
