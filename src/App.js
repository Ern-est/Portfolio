import React from 'react';
import './App.css';
import About from './components/About';
import Bar from './components/Bar';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <Home />
      <Bar />
      <About />
      <Service />
      <Testimonials />
      <Footer />
      </>
    </div>
  );
}

export default App;
