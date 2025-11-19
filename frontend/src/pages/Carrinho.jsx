import React from 'react';
import { useCart } from '../hooks/useCart';

function Carrinho() {
  const { items, totalValue, removeItem, clearCart } = useCart();

  return (
    <section className="page">
      <h1>Meu carrinho</h1>

      {items.length === 0 && <p>Seu carrinho está vazio.</p>}

      {items.length > 0 && (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <strong>{item.nome}</strong>
                  <div>Qtd: {item.quantity}</div>
                </div>
                <button onClick={() => removeItem(item.id)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <p>Total: R$ {totalValue.toFixed(2)}</p>
          <button onClick={clearCart}>Esvaziar carrinho</button>
        </>
      )}
    </section>
  );
}

export default Carrinho;
