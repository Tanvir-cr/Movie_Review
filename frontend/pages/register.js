import { useState } from 'react';
import { api } from '../lib/api';
import Navbar from '../components/Navbar';
import Router from 'next/router';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', { username, email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      Router.push('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Register failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-xl font-bold mb-4">Register</h1>
          <form onSubmit={submit} className="space-y-3">
            <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" className="w-full p-2 border rounded" />
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border rounded" />
            <button type="submit" className="w-full py-2 bg-green-600 text-white rounded">Register</button>
          </form>
        </div>
      </main>
    </div>
  );
}
