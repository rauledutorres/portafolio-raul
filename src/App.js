import logo from './logo.svg';
import './App.css';
import { HeaderComp } from './Componentes/HeaderComp';
import { BannerComp } from './Componentes/BannerComp';

function App() {
  return (
    <div className="App">
      <HeaderComp/>
      <BannerComp/>
    </div>
  );
}

export default App;
