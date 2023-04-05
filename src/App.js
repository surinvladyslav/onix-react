import './App.css';

import cn from 'classnames';

import { useContext } from 'react';
import { BrandContext } from './contexts/brandContext';

import Header from './components/header/Header';
import Goal from './components/goal/Goal';
import Brands from './components/brands/Brands';
import Footer from './components/footer/Footer';

function App() {
  const { theme } = useContext(BrandContext);

  return (
    <div className={cn('App', { active: theme })}>
      <Header />
      <main>
        <Goal />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}

export default App;
