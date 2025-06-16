import React from 'react';
import Head from './components/head/Head';
import About from './components/about/About';
import Services from './components/services/Services';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      
      
      <Head/>
      <About/>
      <Services/>
      <Gallery/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
