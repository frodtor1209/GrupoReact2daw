import { useEffect, useState } from "react";
import axios from "axios";

export default function Estudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/estudiantes")
      .then((response) => setEstudiantes(response.data))
      .catch((error) => console.error("Error obteniendo datos:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Estudiantes</h1>
      <ul>
        {estudiantes.map((est) => (
          <li key={est.id}>{est.nombre} - {est.edad} años</li>
        ))}
      </ul>
    </div>
  );
}