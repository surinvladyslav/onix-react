import './App.css';

import Header from './components/header/Header';
import Goal from './components/goal/Goal';
import Brands from './components/brands/Brands';
import Footer from './components/footer/Footer';

import BrandContextProvider from './contexts/brandContext';

function App() {
  return (
    <div className="App">
      <BrandContextProvider>
        <Header />
        <main>
          <Goal />
          <Brands />
        </main>
        <Footer />
      </BrandContextProvider>
    </div>
  );
}

export default App;
