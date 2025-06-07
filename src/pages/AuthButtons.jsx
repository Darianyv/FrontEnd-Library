// src/components/AuthButtons.jsx
import { useNavigate } from 'react-router-dom';

function AuthButtons() {
  const navigate = useNavigate();

  const handleLogin = () => navigate('/login');
  const handleRegister = () => navigate('/register');

  return (
    <div className="user-actions">
      <button className="btn login" onClick={handleLogin}>Iniciar sesión</button>
      <button className="btn register" onClick={handleRegister}>Registrarse</button>
    </div>
  );
}

export default AuthButtons;
