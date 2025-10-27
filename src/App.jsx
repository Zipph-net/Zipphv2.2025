import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingTable from './components/PricingTable';
import FeaturesSection from './components/FeaturesSection';
//import Footer from './components/Footer';

function App() {
  return (
    // Usa un contenedor base para Bootstrap
    <div className="App"> 
      {/* El header debe estar fijo, por eso no está en el 'main' */}
      <Header />
      
      {/* El contenido principal de la página */}
      <main>
        <HeroSection />
        <PricingTable />
        <FeaturesSection /> 
      </main>
      
      
    </div>
  );
}

export default App;