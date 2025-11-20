import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import AIFeatures from './components/AIFeatures';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Services />
      <AIFeatures />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
