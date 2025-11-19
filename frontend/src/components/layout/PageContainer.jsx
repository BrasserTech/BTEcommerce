import React from 'react';
import Header from './Header';
import Footer from './Footer';

function PageContainer({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageContainer;
