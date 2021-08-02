import logo from './logo.svg';

import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import SkillSection from './components/UseSkill';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection/>
      <SkillSection/>
    </div>
  );
}

export default App;
