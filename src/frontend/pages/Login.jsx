import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/auth.css';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === form.username && u.password === form.password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Inicio de sesión exitoso');
      navigate(user.role === 'admin' ? '/admin' : '/');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Usuario" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
