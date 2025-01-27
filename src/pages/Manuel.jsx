import Formulario from '../components/Formulario';
import Tabla from '../components/tabla';
import Manuel from './pages/Manuel';


const Manuel = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Página de Manuel</h1>
      <p>Contenido específico de Manuel.</p>

      <Tabla />
      <Formulario/>
    </div>
  );
};

export default Manuel;
