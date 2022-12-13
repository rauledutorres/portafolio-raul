/* import PropTypes from 'prop-types'
import {useState} from "react"; */
import './App.css';
import { HeaderComp } from './Componentes/HeaderComp';
import { BannerComp } from './Componentes/BannerComp';
import { SobreMiComp } from './Componentes/SobreMiComp';
import { TrabajoComp } from './Componentes/TrabajoComp';
import { SkillsComp } from './Componentes/SkillsComp';

function App() {
  return (
    <div className="App">
      <HeaderComp/>
      <BannerComp/>
      <SobreMiComp/>
      <SkillsComp/>
      <TrabajoComp/>
    </div>
  );
}

export default App;
