import React from 'react'
import Navbar from './components/Navbar';
import Consultation from './components/Consultation';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Consultation />
      <Body />
      <Footer />

    </div>
  );
}

export default App
