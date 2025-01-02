import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import ProductDetail from './components/sections/AboutSection';
import { ProductFeatures } from './components/sections/ProductFeatures';
import { BeyondScreen } from './components/sections/BeyondScreen';
import { Testimonials } from './components/sections/Testimonials';
// import { ProductSection } from './components/sections/ProductSection';
import { Footer } from './components/Footer';
import LandingPage from './components/sections/Landingpage';
import VRFeaturesSection from './components/sections/whychoose'
import NewsletterSignup from './components/sections/Newsletter'
function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <ProductDetail /> 
      <LandingPage />
      <ProductFeatures />
      <VRFeaturesSection/>
      <BeyondScreen />
      <Testimonials />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;
