export default function UserPage() {
  return (
    <div className="container">
      <h1 className="page-title">User Dashboard</h1>
      <div className="grid">
        <div className="card">
          <h3 className="card-title">User Resources</h3>
          <p>Access your personal resources and documents here.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Your Tasks</h3>
          <p>View and manage your assigned tasks.</p>
        </div>
        <div className="card">
          <h3 className="card-title">Notifications</h3>
          <p>Stay updated with the latest announcements.</p>
        </div>
      </div>
    </div>
  );
}
