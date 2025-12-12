// Imports limpios y organizados
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/pages/Landing';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main style={{ marginTop: '80px' }}>
        <Landing />
      </main>
      <Footer />
    </div>
  );
}

export default App;