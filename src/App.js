import React from 'react';
import './App.css';
import Bar from './components/Bar';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <Home />
      <Bar />
      <Service />
      <Footer />
      </>
    </div>
  );
}

export default App;
