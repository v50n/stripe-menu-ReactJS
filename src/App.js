import React from 'react'
import Hero from './components/hero';
import Navbar from './components/navbar';
import SubMenu from './components/subMenu';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <SubMenu />
    </div>
  );
}

export default App;
