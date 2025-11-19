import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PageContainer from '../components/layout/PageContainer';
import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import ProdutoDetalhes from '../pages/ProdutoDetalhes';
import Carrinho from '../pages/Carrinho';
import Login from '../pages/Login';
import CriarConta from '../pages/CriarConta';
import Conta from '../pages/Conta';

function AppRoutes() {
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:slug" element={<ProdutoDetalhes />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path="/conta" element={<Conta />} />
      </Routes>
    </PageContainer>
  );
}

export default AppRoutes;
