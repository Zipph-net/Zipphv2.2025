import NavBar from './components/NavBar/NavBar';
import HomePage from './components/MainPage/HomePage/HomePage';
import Offerts from './components/MainPage/Offerts/Offerts';
import Products from './components/MainPage/Products/Products';
import Info from './components/MainPage/Info/Info';
import Footer from './components/MainPage/Footer/Footer';

function App() {
  return (
    // Usa un contenedor base para Bootstrap
    <div className="App"> 
      <NavBar />
      <main>
        <HomePage />
        <Offerts />
        <Info /> 
        <Products />
        <Footer />
      </main>
      
      
    </div>
  );
}

export default App;