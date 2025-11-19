import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';

function Navbar() {
  const { totalItems } = useCart();
  const { user } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="nav-link">Início</NavLink>
        <NavLink to="/produtos" className="nav-link">Produtos</NavLink>
      </div>

      <div className="navbar-right">
        <Link to="/carrinho" className="nav-link">
          Carrinho ({totalItems})
        </Link>

        {user ? (
          <Link to="/conta" className="nav-link">
            Minha conta
          </Link>
        ) : (
          <>
            <Link to="/login" className="nav-link">Entrar</Link>
            <Link to="/criar-conta" className="nav-link nav-link-primary">
              Criar conta
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
