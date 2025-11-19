import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Conta() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut();
    navigate('/');
  }

  if (!user) {
    return (
      <section className="page">
        <h1>Minha conta</h1>
        <p>Você não está autenticado.</p>
      </section>
    );
  }

  return (
    <section className="page">
      <h1>Minha conta</h1>
      <p>E-mail: {user.email}</p>
      <button onClick={handleLogout}>Sair</button>
    </section>
  );
}

export default Conta;
