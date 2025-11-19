import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');
    try {
      await signIn(email, password);
      navigate('/conta');
    } catch (error) {
      setErrorMsg(error.message || 'Erro ao entrar.');
    }
  }

  return (
    <section className="page">
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          E-mail
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Senha
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {errorMsg && <p className="form-error">{errorMsg}</p>}

        <button type="submit" className="btn-primary">
          Entrar
        </button>
      </form>

      <p>
        Ainda não tem conta?{' '}
        <Link to="/criar-conta">Criar conta</Link>
      </p>
    </section>
  );
}

export default Login;
