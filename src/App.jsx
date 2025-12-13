import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './styles/globals.scss';

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