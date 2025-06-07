import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/auth.css';

export default function Register() {
  const [form, setForm] = useState({ username: '', password: '', role: 'cliente' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(form);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Usuario" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <select name="role" onChange={handleChange}>
          <option value="cliente">Cliente</option>
          <option value="admin">Administrador</option>
        </select>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}


