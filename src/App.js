import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Service from './components/Service';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/testimonials' element={<Testimonials />}/>
      </Routes>
      <Footer />
      </BrowserRouter>      
    </div>
  );
}

export default App;
