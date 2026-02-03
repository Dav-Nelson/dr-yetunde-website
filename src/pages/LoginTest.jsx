import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../context/AuthContext';

export default function LoginTest() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { user} = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Logged in!');
        } catch (err) {
            setError(err.message);
        }
    };

    if (user) return <p>Already logged in as {user.email}</p>;

    return (
        <div className='max-w-md mx-auto py-10'>
            <h2 className="text-2xl font-bold mb-6">Admin Login Test</h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-3 border rounded"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-3 border rounded"
                    required
                />
                <button type="submit" className="w-full bg-green-700 text-white p-3 rounded hover:bg-green-800">
                    Login
                </button>
                {error && <p className="text-red-600">{error}</p>}
            </form>
        </div>
    );
}