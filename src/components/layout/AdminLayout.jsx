import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AdminLayout() {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login-test replace" />; // redirect to login if not authenticated
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Admin header */}
            <header className="bg-green-800 text-white p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center"> 
                    <h1 className="text-xl font-bold">Admin Dashboard - Dr. Yetunde Abioye</h1>
                    <div>
                        <span className="mr-4">{user.email}</span>
                        <button
                            onClick={() => auth.signOut()}
                            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-6">
                <Outlet /> {/* This renders the child admin pages */}
            </main>
        </div>
    );
}