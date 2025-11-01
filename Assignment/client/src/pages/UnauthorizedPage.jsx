export default function UnauthorizedPage() {
  return (
    <div className="container">
      <div className="card text-center" style={{ maxWidth: '500px', margin: '40px auto' }}>
        <h1 className="page-title" style={{ color: 'var(--error-color)' }}>Access Denied</h1>
        <p className="mb-2">You do not have permission to view this page.</p>
        <p>Please contact your administrator if you believe this is a mistake.</p>
      </div>
    </div>
  );
}
