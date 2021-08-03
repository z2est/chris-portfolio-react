import logo from './logo.svg';

import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import SkillSection from './components/UseSkill';
import Features from './components/Features';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection/>
      <SkillSection/>
      <Features/>
    </div>
  );
}

export default App;
