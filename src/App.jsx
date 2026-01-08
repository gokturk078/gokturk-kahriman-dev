import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section - Fullscreen landing */}
        <Hero />

        {/* About Section - Trust building */}
        <About />

        {/* Services Section - What I offer */}
        <Services />

        {/* Portfolio Section - 8 Demo Projects */}
        <Portfolio />

        {/* Pricing Section - Transparent pricing */}
        <Pricing />

        {/* Testimonials Section - Customer reviews */}
        <Testimonials />

        {/* Contact Section - CTA */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
