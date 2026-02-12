import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Industries from './sections/Industries';
import Founder from './sections/Founder';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-rich-black text-white selection:bg-gold selection:text-black">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Industries />
      <Founder />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
