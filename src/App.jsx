import Header from './components/modules/Header/Header';
import Footer from './components/modules/Footer/Footer';
import Home from './components/templates/Home/Home';
import './styles/globals.scss';
import React from 'react';

function App() {
  return (
    <div className="app">
      <Header />
      <main style={{ marginTop: '80px' }}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;