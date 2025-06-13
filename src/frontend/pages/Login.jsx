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
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: 400, width: '100%' }}>
        <h2 className="text-center mb-4 fw-bold text-primary">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              name="username"
              className="form-control"
              placeholder="Usuario"
              onChange={handleChange}
              required
              autoFocus
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Contraseña"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            <i className="fas fa-sign-in-alt me-2"></i>Entrar
          </button>
        </form>
      </div>
    </div>
  );
}