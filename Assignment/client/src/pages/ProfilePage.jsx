import { useAuth } from "../context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();
  return (
    <div className="container">
      <h1 className="page-title">Profile</h1>
      <div className="card">
        <h3 className="card-title">User Information</h3>
        <div className="grid" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div>
            <p><strong>Email:</strong></p>
            <p><strong>Role:</strong></p>
            <p><strong>Member Since:</strong></p>
          </div>
          <div>
            <p>{user?.email}</p>
            <p>{user?.role}</p>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
