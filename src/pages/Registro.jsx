import { useState } from 'react';

function Registro() {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'cliente' });

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    alert('Usuario registrado. Ahora puede iniciar sesión.');
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="email" placeholder="Correo" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <input type="password" placeholder="Contraseña" onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
      <select onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
        <option value="cliente">Cliente</option>
        <option value="admin">Administrador</option>
      </select>
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Registro;

