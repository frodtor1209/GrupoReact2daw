import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Card from './components/Card';
import David from './pages/David';
import Francisco from './pages/Francisco';
import Manuel from './pages/Manuel';
import DavidRoute from './pages/DavidRoute';
import FormularioDavid from './pages/FormularioDavid';
import Formulario from './components/Formulario';
import Estudiantes from './pages/Estudiantes';



function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card 
            nombre={"Nombre de prueba"}
            descripcion={"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}
            img={"prueba.jpg"}
          />} />
          <Route path="/estudiantes" element={<Estudiantes/>} />
          <Route path="/david" element={<David />} />
          <Route path="/francisco" element={<Francisco />} />
          <Route path="/manuel" element={<Manuel />} />
          <Route path="/davidRoute" element={<DavidRoute />} />
          <Route path="/formularioDavid" element={<FormularioDavid />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
