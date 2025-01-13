import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Card from "./components/Card";

function App() {

  return (
    <>
      <Navbar id="navbar"></Navbar>
      <Card
        nombre={"Nombre de prueba"}
        descripcion={"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}
        img={"prueba.jpg"}
      />
      <Footer id="footer"></Footer>
    </>
  )
}

export default App
