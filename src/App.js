import './App.css';

import {Header} from "./components/header/Header";
import {Goal} from "./components/goal/Goal";
import {Brands} from "./components/brands/Brands";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Goal/>
        <Brands/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
