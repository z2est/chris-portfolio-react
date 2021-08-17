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
      <switch>
        <Route path="/" component={HeroSection}/>
        <Route path="/products" component={SkillSection}/>
        <Route path="/feature" component={Features}/>
      </switch>
    </div>
  );
}

export default App;
