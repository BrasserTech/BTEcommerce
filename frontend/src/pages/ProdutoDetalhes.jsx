import React from 'react';
import { useParams } from 'react-router-dom';

function ProdutoDetalhes() {
  const { slug } = useParams();

  return (
    <section className="page">
      <h1>Detalhes do produto</h1>
      <p>Slug: {slug}</p>
      <p>Em breve, detalhes completos do produto carregados do Supabase.</p>
    </section>
  );
}

export default ProdutoDetalhes;
