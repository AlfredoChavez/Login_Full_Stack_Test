import { useState } from "react";
import { useNavigate } from "react-router";
import * as AuthService from "../../services/authService";
import "./login.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userId = await AuthService.login(user, password);
      
      if (userId instanceof Error) throw('Invalid user/password');

      navigate(`/user/${userId}/${user}`);

    } catch (error) {
      console.log(error);
      setError(error, "Credenciales incorrectas o error de conexión.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1 className="login-title">Iniciar sesión</h1>

        <input
          type="usuario"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
          className="login-input"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit" className="login-button">
          Submit
        </button>
      </form>
    </div>
  );
}