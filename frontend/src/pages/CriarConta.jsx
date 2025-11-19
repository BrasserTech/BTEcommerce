import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function CriarConta() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [infoMsg, setInfoMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');
    setInfoMsg('');
    try {
      await signUp(email, password);
      setInfoMsg('Conta criada. Verifique seu e-mail se a confirmação estiver ativada.');
      navigate('/login');
    } catch (error) {
      setErrorMsg(error.message || 'Erro ao criar conta.');
    }
  }

  return (
    <section className="page">
      <h1>Criar conta</h1>
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
        {infoMsg && <p className="form-info">{infoMsg}</p>}

        <button type="submit" className="btn-primary">
          Criar conta
        </button>
      </form>

      <p>
        Já tem conta? <Link to="/login">Entrar</Link>
      </p>
    </section>
  );
}

export default CriarConta;
