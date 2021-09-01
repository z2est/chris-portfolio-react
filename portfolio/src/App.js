import logo from './logo.svg';

import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import SkillSection from './components/UseSkill';
import Features from './components/Features';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <SkillSection/>
      <Features/>
    </div>
  );
}

export default App;
