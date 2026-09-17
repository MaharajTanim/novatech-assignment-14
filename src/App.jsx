import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact'; // Imported Contact
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <About />
      <Contact /> {/* Added Contact Section */}
      <Footer />
    </div>
  );
}

export default App;