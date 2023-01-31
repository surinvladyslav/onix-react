import './App.css';

import {Header} from "./components/header";
import {Goal} from "./components/goal";
import {Brands} from "./components/brands";
import {Footer} from "./components/footer";

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
