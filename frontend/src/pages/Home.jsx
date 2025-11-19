import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="page">
      <h1>Bem-vindo à BTEcommerce</h1>
      <p>Loja virtual em desenvolvimento usando React, Supabase e Node.</p>
      <Link to="/produtos" className="btn-primary">
        Ver produtos
      </Link>
    </section>
  );
}

export default Home;
