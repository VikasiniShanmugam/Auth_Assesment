export default function ManagerPage() {
  return (
    <div className="container">
      <h1 className="page-title">Manager Dashboard</h1>
      <div className="grid">
        <div className="card">
          <h3 className="card-title">Team Overview</h3>
          <p>View and manage your team members.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Project Status</h3>
          <p>Track ongoing projects and deadlines.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Reports</h3>
          <p>Generate and view team performance reports.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Resource Allocation</h3>
          <p>Manage team resources and assignments.</p>
        </div>
      </div>
    </div>
  );
}
